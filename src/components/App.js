import React from 'react';
import '../App.css';
import axios from 'axios';
import Quizzes from './Quizzes';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quizzes: []
    }
  }

  componentDidMount() {
    axios.get('/quizzes', {})
    .then((response) =>
      this.setState({ quizzes: response.data.quizzes }))
    .catch(() => {
      console.log('nope')
    })
  }


  render(){
    return(
      <div>
        <button id="add-btn">Add a Quiz!</button>
        <Quizzes quizzes={this.state.quizzes}/>
      </div>
    )
  }
}
