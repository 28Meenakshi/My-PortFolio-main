import { useContext } from "react";
import ThemeContext from "../ColorTheme/themeContext";

import {DarkMode, LightMode ,Instagram , GitHub ,LinkedIn } from '@mui/icons-material';
const MenuIconsItems = [
  {
    icon :<GitHub className="text-[10px]"/> ,
    link : "https://github.com/28Meenakshi"
  },
  {
    icon :<Instagram className="text-[10px]"/> ,
    link : "https://www.instagram.com/accounts/onetap/?next=%2F"
  },
  {
    icon :<LinkedIn className="text-[10px]"/> ,
    link : "https://www.linkedin.com/in/meenakshi-k-12b89720b/"
  },
]

export default function MenuIcons() {
    const {theme , setTheme} = useContext(ThemeContext);

    function HandleClick(){
        setTheme(prev=>!prev)
    }
    return (
        <div id="icons" className="flex items-center bg-transparent">
        {theme ? (
          <button onClick={HandleClick } className={`${theme ? 'hover:text-blue-700' : 'hover:text-violet-800'}`}>
            <DarkMode className="text-[10px]" />
          </button>
        ) : (
          <button onClick={HandleClick} className={`${theme ? 'hover:text-blue-700' : 'hover:text-violet-800'}`}>
            <LightMode className="text-[10px]"/>
          </button>
        )}
        <div className="flex items-center -gap-x-2">
          {
          MenuIconsItems.map(({icon,link},id)=>(
            <a href={link} key={id}>
          <button className={`${theme ? 'hover:text-blue-700' : 'hover:text-violet-800'}`}>
            {icon}
          </button>
        </a>
          ))}</div>
        
        
      </div>
    )
};