import json

from django.core import serializers
from django.http import HttpResponse
from django.shortcuts import render


# Create your views here.
from rest_framework.decorators import api_view

from aplikacija.models import Korisnik, Predmet


def index(request):
    return HttpResponse("sta ima kod tebe?")

@api_view(['POST'])
def login(request):
    userName = request.data.get('korisnickoIme')
    password = request.data.get('password')

    korisnik = Korisnik.objects.get(korisnicko_ime=userName, password=password)
    json_korisnik = serializers.serialize('json', [korisnik, ])
    py_obj = json.loads(json_korisnik)
    data = json.dumps(py_obj[0])
    print(data)
    return HttpResponse(data)

@api_view(['POST'])
def register(request):
    ime= request.data.get('ime')
    prezime= request.data.get('prezime')
    korisnickoIme= request.data.get('korisnickoIme')
    email= request.data.get('email')
    password= request.data.get('password')
    tip_korisnika= request.data.get('tip_korisnika')
    aktivnost= request.data.get('aktivnost')

    Korisnik.objects.create(ime=ime, prezime=prezime, korisnicko_ime=korisnickoIme, email=email, password=password, tip_korisnika=tip_korisnika, aktivnost=aktivnost)
    return HttpResponse("succes")

@api_view(['POST'])
def getPredmeti(request):
    tipKorisnika=request.data.get('tip_korisnika')
    id=request.data.get('id')
    #userName="mama1"
    #tipKorisnika = "profesor"
    #predmeti = Predmet.objects.all()

    if(tipKorisnika == "dekan" or tipKorisnika == "sef odsjeka"):
         predmeti = Predmet.objects.all()
    elif(tipKorisnika == "asistent"):
         predmeti=Predmet.objects.filter(asistent_id=id)
    else:
        predmeti=Predmet.objects.filter(profesor_id=id)

    res = serializers.serialize('json',predmeti)
    #st=json.loads(res)
    #data=json.dumps(st[0])
    print(res)
    return HttpResponse(res)