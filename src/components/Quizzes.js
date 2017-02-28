import React from 'react';
import Questions from './Questions';
import axios from 'axios';

export default class Quizzes extends React.Component {
  constructor() {
    super()
    this.state = {
      selectedScores: {}
    }
  }

  loadQuizzes() {
    return this.props.quizzes.map(quiz => {
      return (
        <div key={quiz.id}>
          <h1>{quiz.title}</h1>
          <Questions
            setSelectedAnswer={() => this.setSelectedAnswer.bind(this)}
            questions={quiz.questions}/>
        </div>
      )
    })
  }

  sumScore(){
    let totalScore = this.state.selectedScores.reduce((a, num) => a + num)
    console.log('totalScore:', totalScore);
    return totalScore;
  }

  setSelectedAnswer(questionId, scoreValue){
    console.log('setSelectedAnswer:', questionId, scoreValue);
    const updatedScores = Object.assign(this.state.selectedScores, {[questionId]: scoreValue})
    console.log('updatedScores:', updatedScores);
    this.setState({ selectedScores: updatedScores })
  }

  handleSubmit() {
    const total = this.sumScore();
    axios.post('/scores', {
      score: total
    })
  }

  render(){
    return(
      <div className="quiz">
        {this.loadQuizzes()}
        <button id="score-btn" onClick={() => this.handleSubmit()}>Score Me!</button>
      </div>
    )
  }
}
