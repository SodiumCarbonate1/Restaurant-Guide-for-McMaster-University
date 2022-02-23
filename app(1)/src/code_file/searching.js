import React from 'react';
import './searching.css';
import './toprestaurants';

import {subnavigation} from "../Components/subnavigation";
import {Link} from "react-router-dom";
import {toprestaurants} from "./toprestaurants";
import restpic from '../picture/13.png';
import * as Ai from 'react-icons/ai';

class searching extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            name: false,
            price: false,
            rate: false,
            search: "",
            mode: "search"
        }
    }



    handlechange=event => {
        this.setState({name: !this.state.name})
    }
    handlechange1=event => {
        this.setState({price: !this.state.price})
    }
    handlechange2=event => {
        this.setState({rate: !this.state.rate})
    }


    

    render() {

      
        let filteredlist = toprestaurants.filter((toprestaurants)=> {return toprestaurants.restname.includes(this.state.search) && this.state.name === true  });
        let filteredlist1 = toprestaurants.filter((toprestaurants)=> {return toprestaurants.price.includes(this.state.search) && this.state.price === true  });
        let filteredlist2 = toprestaurants.filter((toprestaurants)=> {return toprestaurants.rate.includes(this.state.search) && this.state.rate === true  });
       
        
        return(
            <>
                <div className="tops1">
                    <h1>All Restaurants in Hamilton</h1>
                </div>
                <div className="random">
                    <div className="random1">
                        <input type = "checkbox" checked ={this.state.name} onChange={this.handlechange}/>
                        <label form="fivestar">Name</label>
                        <input type = "checkbox" checked ={this.state.price} onChange={this.handlechange1}/>
                        <label form="fourstar">Price</label>
                        <input type = "checkbox" checked ={this.state.rate} onChange={this.handlechange2}/>
                        <label form="threestar">Rate</label>
                        <br/>
                        <input type="search"
                               onChange={(event) => this.setState({ search: event.target.value })}
                        />
                    </div>
                </div>
                <div className="d1ad">
                    <ul>
                        {filteredlist.map((rest,number) =>{
                            return(
                                /**/
                                <div key ={number} className="restaurantdisplaying">
                                    <img src = {rest.picture} alt = "restaurants picture" className="restaurant1"/> <br/>
                                    <div className="information">
                                        Name: {rest.restname} <br  />
                                        Price: {rest.price}<br />
                                        Rate: {rest.rate}<br /><br /><br />
                                    </div>
                                </div>
                            )
                        })}
                        {filteredlist1.map((rest,number) =>{
                            return(
                                /**/
                                <div key ={number} className="restaurantdisplaying">
                                    <img src = {rest.picture} alt = "restaurants picture" className="restaurant1"/> <br/>
                                    <div className="information">
                                        Name: {rest.restname} <br  />
                                        Price: {rest.price}<br />
                                        Rate: {rest.rate}<br /><br /><br />
                                    </div>
                                </div>
                            )
                        })}
                        {filteredlist2.map((rest,number) =>{
                            return(
                                /**/
                                <div key ={number} className="restaurantdisplaying">
                                    <img src = {rest.picture} alt = "restaurants picture" className="restaurant1"/> <br/>
                                    <div className="information">
                                        Name: {rest.restname} <br  />
                                        Price: {rest.price}<br />
                                        Rate: {rest.rate}<br /><br /><br />
                                    </div>
                                </div>
                            )
                        })}

                    </ul>
                </div>
            </>

        )
    }
}


export default searching;