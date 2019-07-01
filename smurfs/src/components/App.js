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

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`

const FORM = styled.form`
  width: 300px;
  height: 250px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  align-items: center;
  background-color: lightgray;
`

const BUTTON = styled.button`
  height: 3rem;
  width: 8rem;
  margin-top: 30px;
`

const INPUT = styled.input`
  margin:3px;
  align-items: flex-end;
`

const LABEL = styled.label`
  margin:3px;
  align-items: flex-end;
`

const UL = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 0;
`

const LI = styled.li`
  list-style: none;
  background-color: lightskyblue;
  width: 15rem;
  border-radius: 5px;
  margin: 5px;
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
      <DIV className="App">
        <FORM onSubmit={this.submitHandler}>
          <LABEL>
            Name:{' '}
            <INPUT
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.changeHandler}
            />
          </LABEL>{' '}
          <LABEL>
            Age:{' '}
            <INPUT
              type="number"
              name="age"
              value={this.state.age}
              onChange={this.changeHandler}
            />
          </LABEL>{' '}
          <LABEL>
            Height:{' '}
            <INPUT
              type="text"
              name="height"
              value={this.state.height}
              onChange={this.changeHandler}
            />
          </LABEL>{' '}
          <BUTTON type="submit">Add a Smurf</BUTTON>
        </FORM>
        <UL>
          {this.props.smurfs.map(smurf => (
            <LI key={smurf.id}>
              <h3>Name: {smurf.name}</h3>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
            </LI>
          ))}
        </UL>
      </DIV>
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
