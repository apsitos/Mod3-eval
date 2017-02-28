import React from 'react';
import '../App.css'
import Answers from './Answers'

export default class Questions extends React.Component {
  loadQuestions() {
    return this.props.questions.map(question => {
      return(
        <form>
          <div key={question.id}>
            <h2>{question.title}</h2>
            <Answers
              setSelectedAnswer={this.props.setSelectedAnswer}
              questionId={question.id}
              answers={question.answers}
            />
          </div>
        </form>
      )
    })
  }

  render() {
    return(
      <div className="questions">
        {this.loadQuestions()}

      </div>
    )
  }
}
