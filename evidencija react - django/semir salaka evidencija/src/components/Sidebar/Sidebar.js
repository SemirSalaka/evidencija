import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import { SidebarItemsKorisnik, SideBarItemsSef } from "./SidebarItems";

const Sidebar = ({ sef }) => {
  const SideBarItems = sef ? SideBarItemsSef : SidebarItemsKorisnik;
  return (
    <div className="sidebar">
      
        {SideBarItems.map((item, key) => {
          return (
            
              <Link key={key} to={item.link}>
                <div> {item.item}</div>
              </Link>
            
          );
        })}
      
    </div>
  );
};

export default Sidebar;
