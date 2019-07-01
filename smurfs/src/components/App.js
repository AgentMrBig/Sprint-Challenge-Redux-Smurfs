import React, { Component } from 'react';
import './App.css';

import { getSmurfs, addSmurf } from '../actions';
import { connect } from 'react-redux';
import styled from 'styled-components';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */

const LI = styled.li`
  list-style: none;
 `

class App extends Component {
  state = {
    name: '',
    age: '',
    height: ''
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  changeHandler = e => {
    this.setState({

      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault();
    this.setState({
      name: '',
      age: '',
      height: ''
    });
    this.props.addSmurf({
      ...this.state
    });
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.submitHandler}>
          <label>
            Name:{' '}
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.changeHandler}
            />
          </label>{' '}
          <label>
            Age:{' '}
            <input
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.changeHandler}
            />
          </label>{' '}
          <label>
            Height:{' '}
            <input
              type="text"
              name="height"
              value={this.state.height}
              onChange={this.changeHandler}
            />
          </label>{' '}
          <button type="submit">Add a Smurf</button>
        </form>
        <ul>
          {this.props.smurfs.map(smurf => (
            <LI key={smurf.id}>
              <h3>Name: {smurf.name}</h3>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
            </LI>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    smurfs: state.smurfs,
    fetchingData: state.fetchingData
  };
};

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(App);
