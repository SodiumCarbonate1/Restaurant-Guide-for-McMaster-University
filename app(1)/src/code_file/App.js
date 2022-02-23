import React from 'react';
import './App.css';
import Navbar from '../Components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import suggestion from "./suggestion";
import Tops from "./Tops";
import searching from "./searching";
import reservation from "./reservation";
import comments from "./comments";
import Home from './Home';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        }
    }
    render(){
        return(
            <>
                <div className="homepage1">
                    <Router>
                        <Navbar/>
                        <Switch>
                            <Route path='/Home' exact component={Home}/>
                            <Route path='/Tops' exact component={Tops}/>
                            <Route path='/searching' exact component={searching}/>
                            <Route path='/comments' exact component={comments}/>
                            <Route path='/reservation' exact component={reservation}/>
                            <Route path='/suggestion' exact component={suggestion}/>
                        </Switch>
                    </Router>
                </div>
            </>

        )
    }
}

export default App;
