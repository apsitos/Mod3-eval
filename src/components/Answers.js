import React from 'react';
import '../App.css'

export default class Answers extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0
    }
  }

  handleChange(score){
    const { updateScores, questionId } = this.props
    this.setState({ score }, () => {
      updateScores(questionId, score)
    })
  }

  loadAnswers(e) {
    return this.props.answers.map((answers, i) => {
      return (
        <div key={i} className="answer-choice">
          <h3>{answers.title}
            <input type="radio"
                  name="answer"
                  value={this.state.value}
                  onChange={(e) => this.handleChange(answers.score)}/>
          </h3>

          {/* <h4>{answers.score}</h4> */}
        </div>
      )

    })
  }

  render(e) {
    return(
      <div id="answers">
          {this.loadAnswers(e)}
      </div>
    );
  }
}

 // onChange={this.selectedOption.bind(this)}
