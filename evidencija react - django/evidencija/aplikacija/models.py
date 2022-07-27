from django.db import models


#class Aktivnost(models.Model):
# aktivnost = models.CharField(max_length=20)

class Korisnik(models.Model):
    ime = models.CharField(max_length=40)
    prezime = models.CharField(max_length=40)
    korisnicko_ime = models.CharField(max_length=40, unique=True)
    email = models.EmailField(max_length=254, unique=True)
    password = models.CharField(max_length=40)
    tip_korisnika = models.CharField(default="", max_length=70)
    aktivnost = models.CharField(default="aktivan", max_length=70)


class Predmet(models.Model):
    naziv = models.CharField(max_length=50)
    profesor = models.ForeignKey(Korisnik, on_delete=models.CASCADE, related_name='profesor')
    asistent = models.ForeignKey(Korisnik, on_delete=models.CASCADE,related_name='asistent')
    termin_predavanja=models.TimeField(auto_now_add=False)
    termin_vjezbi=models.TimeField(auto_now_add=False)
    #datum_odrzavanja=models.DateField()
    godina=models.IntegerField()
    semestar=models.IntegerField()