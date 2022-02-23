import React from 'react';
import { AiFillHome } from "react-icons/ai";
import * as Bs from 'react-icons/bs';
import * as Bi from 'react-icons/bi';

export const subnavigation =[
    {
        webname:'Home',
        link: '/Home',
        meme:<AiFillHome/>,
    },
    {
        webname:'Searching Restaurants',
        link: '/searching',
        meme:<Bs.BsFillCursorFill/>,
    },
    {
        webname:'Tops',
        link: '/Tops',
        meme:<Bi.BiLike/>,
    },
    {
        webname:'Comments',
        link: '/comments',
        meme:<Bi.BiMessage/>,
    },
    {
        webname:'Reservation',
        link: '/reservation',
        meme:<Bi.BiPencil/>,
    },
    {
        webname:'Suggestions',
        link: '/suggestion',
        meme:<Bi.BiSupport/>,
    }

]