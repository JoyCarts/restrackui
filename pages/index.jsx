import React, { Component } from 'react';
import axios from 'axios';

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ResID: '',
      ResPictureKey: '',
      ResFirstName: '',
    };
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { ResID, ResPictureKey, ResFirstName } = this.state;

    const profile = {
      ResID,
      ResPictureKey,
      ResFirstName,
    };

    axios
      .post('http://localhost:8090/api/profile', profile)
      .then(() => console.log('Profile Created'))
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <div>
        <br />
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div style={{ width: '30%' }} className="form-group">
              <label>Res ID - </label>
              <input
                type="text"
                className="form-control"
                name="ResID"
                placeholder="Res ID"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }} className="form-group">
            <label>Picture URL - </label>
              <input
                type="text"
                className="form-control"
                name="ResPictureKey"
                placeholder="URL"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }} className="form-group">
            <label>First Name - </label>
              <input
                type="text"
                className="form-control"
                name="ResFirstName"
                placeholder="First Name"
                onChange={this.handleInputChange}
              />
            </div>
            <br />
            <div style={{ width: '30%' }}>
              <button className="btn btn-success" type="submit">
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Create;