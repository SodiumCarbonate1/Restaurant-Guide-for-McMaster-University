import React from 'react';
import './comments.css';
class comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Restaurantname: '',
            Rate:'',
            Comments: '',
            id: 0,
            id1: 0,
            id2: 0,
            id3: 0,
            id4: 0,
            list1:[]
        }
    }
    handleSubmit=(event)=>{
        this.setState({
            Name:'',
            Restaurantname:'',
            Rate:'',
            Comments:''
        })
        alert("Your Comment has been sent!");
    }
    handleChange=(event)=>{
        this.setState({Name:event.target.value,id:this.state.id1+1})
        event.preventDefault();
    }
    handleChange1=(event)=>{
        this.setState({Restaurantname:event.target.value,id:this.state.id2+1})
        event.preventDefault();
    }
    handleChange2=(event)=>{
        this.setState({Rate:event.target.value,id:this.state.id3+1})
        event.preventDefault();
    }
    handleChange3=(event)=>{
        this.setState({Comments:event.target.value,id:this.state.id4+1})
        event.preventDefault();
    }

    render(){
        return(
            <>
                <div className="everything">
                    <div className="commentsbox">
                        <h1>Comments</h1>
                    </div>
                    <div className="comments">
                        <form onSubmit={this.handleSumit}>
                            <p>Your Name: <input type="text" placeholder="Enter Your name..." className="name1" onChange = {this.handleChange} value = {this.state.name}/></p>
                            <p>Restaurant Name: <input type="text" placeholder="Enter Restaurant Name..." className="name2" onChange = {this.handleChange1} value = {this.state.Restaurantname}/></p>
                            <p>Rate: <input type="text" placeholder="Enter Your Rate..." className="name3" onChange = {this.handleChange2} value = {this.state.Rate}/></p>
                            <p className="p1">Comments: <br/>
                                <input type="text" placeholder="Enter Your Comments ..." className="name4" onChange = {this.handleChange3}  value = {this.state.Comments}/></p>
                            <input type="submit" value="submit" className="submit"/>
                        </form>
                    </div>
                </div>

            </>
        )
    }

}
export default comments;