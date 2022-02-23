import React from 'react';
import './reservation.css'

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = { items: [], items1: [], nextID: 0, editIndex: 0, input: "", mode: "Add" }
  }
  submit() {
    if (this.state.mode == "Add") {

      this.setState({
        nextID: this.state.nextID + 1,
        input: "",
        items: [...this.state.items,
          { item: this.state.input, id: this.state.nextID + 1 }]
      })
    }

    else {

      var newItems = this.state.items;
      newItems[this.state.editIndex].item = this.state.input;

      this.setState({
        mode: "Add",
        input: "",
        items: newItems

      })
    }
  }



  delete(delID) {
    if (this.state.mode != "Edit") {
      this.setState({
        items: this.state.items.filter(({ item, id }) => id != delID)
      })
    }
  }

  edit(editID) {
    var editItem = this.state.items.find(({ item, id }) => id == editID);

    this.setState({
      input: editItem.item,
      mode: "Edit",
      editIndex: this.state.items.indexOf(editItem)
    })
  }


  up(upID) {
    var editItem = this.state.items.find(({ item, id }) => id == upID);

    this.setState({
      input: editItem.item,
      mode: "Add",
      editIndex: this.state.items.indexOf(editItem)
    })

    this.setState({
      items: this.state.items.filter(({ item, id }) => id != upID)
    })
  }

  render() {
    return (
        <>

          <div>
            <p> Add Date and Time  </p>
            <p> Example: 2020/11/21-11:59 </p>
            <input type="text"
                   onChange={(event) => this.setState({ input: event.target.value })}
                   value={this.state.input} />
            <button onClick={this.submit.bind(this)}>{this.state.mode}</button>

            <table id="l">
              <tbody>
              {this.state.items.map(
                  ({ item, id }) =>
                      <tr key={id}>
                        {item} -
                        <span id="d1" onClick={this.delete.bind(this, id)}> Delete </span>
                        <span id="e1" onClick={this.edit.bind(this, id)}>Edit </span>
                        <span id="e1" onClick={this.up.bind(this, id)}>Down </span>
                      </tr>)}
              </tbody>
            </table>
          </div>
        </>
    )
  }

}




class reservation extends React.Component {

  constructor(props) {
    super(props);
    this.state = { items: [], items1: [], nextID: 0, editIndex: 0, input: "", mode: "Add" }
  }

  submit() {
    if (this.state.mode == "Add") {

      this.setState({
        nextID: this.state.nextID + 1,
        input: "",
        items: [...this.state.items,
          { item: this.state.input, id: this.state.nextID + 1 }]
      })
    }

    else {

      var newItems = this.state.items;
      newItems[this.state.editIndex].item = this.state.input;

      this.setState({
        mode: "Add",
        input: "",
        items: newItems
      })
    }
  }



  delete(delID) {
    if (this.state.mode != "Edit") {
      this.setState({
        items: this.state.items.filter(({ item, id }) => id != delID)
      })
    }
  }

  edit(editID) {
    var editItem = this.state.items.find(({ item, id }) => id == editID);

    this.setState({
      input: editItem.item,
      mode: "Edit",
      editIndex: this.state.items.indexOf(editItem)
    })
  }


  render() {
    return (
        <>
          <div className="home1">
            <h1>Reservation Service</h1>
          </div>
          <div id="bg">
            <p id="p1"> Which Restaurant do you want to book? </p>
            <input type="text" placeholder="Enter The Name here..."
                   onChange={(event) => this.setState({ input: event.target.value })}
                   value={this.state.input} />
            <button onClick={this.submit.bind(this)}>{this.state.mode}</button>


            <table id="t">
              <thead id="th">
              <tr id="r" >
                {this.state.items.map(
                    ({ item, id }) =>
                        <th key={id} >
                          {item} -
                          <span id="d1" onClick={this.delete.bind(this, id)}> Delete </span>
                          <span id="e1" onClick={this.edit.bind(this, id)}>Edit </span>

                        </th>)}
              </tr>
              </thead>
              <tbody>
              <tr>
                {this.state.items.map(
                    ({ item, id }) =>
                        <td key={id} >
                          <Item />
                        </td>)}
              </tr>
              </tbody>
            </table>
          </div>
          </>


    )
  }

};

export default reservation;
