import React from 'react';
import Questions from './Questions'

export default class Quizzes extends React.Component {
  constructor() {
    super()
    this.state = {
      scores: {},
      total: 0,
      submitted: false
    }
  }

  updateScores(questionId, score) {
    const scores = {...this.state.scores}
    Object.assign(scores, { [questionId]: score })
    const total = Object.keys(scores)
      .map(key => scores[key])
      .reduce((a,b) => a + b)

    this.setState({ scores, total, submitted: false })
  }

  loadQuizzes() {
    return this.props.quizzes.map(quiz => {
      return (
        <div key={quiz.id}>
          <h1>{quiz.title}</h1>
          <Questions
            updateScores={this.updateScores}
            questions={quiz.questions}/>
        </div>
      )
    })
  }

  showTotal(quizSubmitted) {
    if (quizSubmitted) return <h1>Total: {this.state.total}</h1>
  }

  handleSubmit() {
    this.setState({ submitted: true })
  }

  render(){
    return(
      <div className="quiz">
        {this.loadQuizzes()}
        <button id="score-btn" onClick={() => this.handleSubmit()}>Score Me!</button>
        {this.showTotal(this.state.submitted)}
      </div>
    )
  }
}
