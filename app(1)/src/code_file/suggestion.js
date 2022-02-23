import React from 'react';
import './suggestion.css';
class suggestion extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            ContactEmail:"",
            name:"",
            message:""
        }
        this.handleSumit = this.handleSumit.bind(this)
    }

    handlechange=(event)=>{
        this.setState({name:event.target.value})
        event.preventDefault()
    }
    handlechange1=(event)=>{
        this.setState({ContactEmail:event.target.value})
        event.preventDefault()
    }
    handlechange2=(event)=>{
        this.setState({message:event.target.value})
        event.preventDefault()
    }

    handleSumit=event => {
        this.setState({name:'',ContactEmail:'',message:''})
    }

    render(){
        return(
            <>
                <div className="Suggestionbox">
                    <h1>Your suggestion matters!Please feel free to send us any messages to improve our website!</h1>
                    <h1>Please enter your Name, Email and your priceless suggestions right below. We are looking forward to receiving your email!</h1><br/>
                </div>
                <div className="questionbox">
                    <form onSubmit={this.handleSumit}>
                        <p>Your Name:   <input type='text' placeholder="Name..." name='name' className="namebox" onChange={this.handlechange}/></p>
                        <p>Your Email:  <input type='text' placeholder="Your Contact Email!..." name='ContactEmail' className="emailbox" onChange={this.handlechange1}/></p>
                        <p>Your Suggestion <br/><br/><input type='text' placeholder="Your Suggestion..." name='message' className="suggestionbox" onChange={this.handlechange2}/></p>
                        <input className="submitbox" type='submit' value={'submit'}/>
                    </form>
                </div>

            </>

        )
    }
}



export default suggestion;