
import React, {useState} from 'react';
import './Navbar.css';
import {subnavigation} from "./subnavigation";
import {Link} from 'react-router-dom';
import * as Fa from 'react-icons/fa';
import * as Ai from 'react-icons/ai';
import * as Bs from 'react-icons/bs';
import {IconContext} from "react-icons";
function Navbar(){
    const [checked,setchecked] = useState(false)
    const showchecked = () => setchecked(!checked)
    return(
        <>
            <IconContext.Provider value={{color:'none'}}>
                <div className='navigation'>
                    <Link to='#' className='hiddenmenubar'>
                        <Fa.FaBars onClick={showchecked}/>
                    </Link>
                    <div className="searchingbar">
                        <p className="title1">McMaster Students Restaurants Guide</p>
                    </div>
                </div>
            <nav className={checked ? 'displayedmenu active': 'displayedmenu'}>
                <ul className='hidemenu' onClick={showchecked}>
                    <li>
                        <Link to="#" className='goback'>
                            <Ai.AiOutlineDoubleLeft/>
                        </Link>
                    </li>
                    <li>
                        {subnavigation.map((menu,number) =>{
                            return(
                                <li key ={number} className="titles">
                                    <Link to={menu.link}>
                                        {menu.meme}
                                        <p>{menu.webname}</p>
                                    </Link>
                                </li>
                            )
                        })}
                    </li>
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    );
}


export default Navbar;