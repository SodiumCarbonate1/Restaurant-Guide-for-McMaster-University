import React from 'react';
import './Tops.css';
import './Home.css';
import mainpage from '../picture/1.jpg';


class Home extends React.Component{
    render() {
        return(
            <img src= {mainpage} alt="mainpage" className="main"/>
        )
    }
}

export default Home;