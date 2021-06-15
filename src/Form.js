import React from "react";
import container from "@material-ui/core/Container"

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: " ",
      age: " ",
      gender: "",
      city: " "
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="Login" >
        <div className="FormHead" ><h1>Online registration</h1></div>
        <form className="FormUser">
          <label >
          <div className="Ft">
            Name 
            <input className="FormUserBox"
              
              type="text"
              value={this.state.name}
              name="name"
              onChange={this.handleChange}
            />
           </div>
            <br />
          </label>
          <br />

          <label>
            <div className="Ft">Age
            <input className="FormUserBox"
              
              type="text"
              value={this.state.age}
              name="age"
              onChange={this.handleChange}
            />
            </div>
          </label>
          <br />
          <br />

          <label>
            <div className="Ft">city
            <input className="FormUserBox"
              
              type="text"
              value={this.state.city}
              name="city"
              onChange={this.handleChange}
            />
            </div>
          </label>
          <br />
          <br />

          <label className="Ft"> Gender</label>
          <select className="FormUserBoxDrop"
            
            value={this.state.gender}
            onChange={this.handleChange}
            name="gender"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <br />
          <br />
          <button className="LoginButtonForm">Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
