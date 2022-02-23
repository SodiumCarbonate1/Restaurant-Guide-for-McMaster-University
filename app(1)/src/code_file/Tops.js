import React from 'react';
import './Tops.css';
import {toprestaurants} from "./toprestaurants";
import * as Ai from 'react-icons/ai';

class Tops extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            fivestar: true,
            fourstar: true,
            threestar:true,
            twostar:true,
            onestar:true
        }
    }
    handlechange=event => {
        this.setState({fivestar:event.target.checked})
    }
    handlechange1=event => {
        this.setState({fourstar:event.target.checked})
    }
    handlechange2=event => {
        this.setState({threestar:event.target.checked})
    }
    handlechange3=event => {
        this.setState({twostar:event.target.checked})
    }
    handlechange4=event => {
        this.setState({onestar:event.target.checked})
    }
    render() {
        let filteredlist = toprestaurants.filter((toprestaurants)=> {return toprestaurants.rate === "5" && this.state.fivestar === true});
        let filteredlist1 = toprestaurants.filter((toprestaurants)=> {return toprestaurants.rate === "4" && this.state.fourstar === true});
        let filteredlist2 = toprestaurants.filter((toprestaurants)=> {return toprestaurants.rate === "3" && this.state.threestar === true});
        let filteredlist3 = toprestaurants.filter((toprestaurants)=> {return toprestaurants.rate === "2" && this.state.twostar === true});
        let filteredlist4 = toprestaurants.filter((toprestaurants)=> {return toprestaurants.rate === "1" && this.state.onestar === true});
        return(
            <>
                <div className="toppage1">
                    <div className="tops">
                        <h1>Tops Restaurants Around McMaster</h1>
                    </div>
                    <div className="cid">
                        <input type = "checkbox" checked ={this.state.fivestar} onChange={this.handlechange}/>
                        <label form="fivestar"><Ai.AiFillStar/><Ai.AiFillStar/><Ai.AiFillStar/><Ai.AiFillStar/><Ai.AiFillStar/></label><br/>
                        <input type = "checkbox" checked ={this.state.fourstar} onChange={this.handlechange1}/>
                        <label form="fourstar"><Ai.AiFillStar/><Ai.AiFillStar/><Ai.AiFillStar/><Ai.AiFillStar/></label><br/>
                        <input type = "checkbox" checked ={this.state.threestar} onChange={this.handlechange2}/>
                        <label form="threestar"><Ai.AiFillStar/><Ai.AiFillStar/><Ai.AiFillStar/></label><br/>
                        <input type = "checkbox" checked ={this.state.twostar} onChange={this.handlechange3}/>
                        <label form="twostar"><Ai.AiFillStar/><Ai.AiFillStar/></label><br/>
                        <input type = "checkbox" checked ={this.state.onestar} onChange={this.handlechange4}/>
                        <label form="onestar"><Ai.AiFillStar/></label>
                    </div>
                    <div className="restauranttops">
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
                            {filteredlist3.map((rest,number) =>{
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
                            {filteredlist4.map((rest,number) =>{
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
                </div>

            </>

        )
    }
}
export default Tops;