import React from 'react';

export default class Question extends React.Component {
    
    constructor(props) {
        super(props);
        this.data = require('./resources/questions.json')
        console.log("******** READING DATA ********")
        //     fetch("https://raw.githubusercontent.com/onlydevelop/questions/master/questions.json")
        //     .then(res => res.json())
        //     .then((data) => {
        //         this.setState({data: data})
        //         console.log(data)
        //     })
        //     .catch(console.log)
        this.state = {
            data: this.data,
            subject: "",
            topic: "",
            question: "",
            options: [],
            correct: "",
            response: "",
            feedback: "",
            visible: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.validateAnswer = this.validateAnswer.bind(this);
    }

    static getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    static getDerivedStateFromProps(props, state) {
        console.log("state.subject = " + JSON.stringify(state.subject))
        console.log("value = " + JSON.stringify(props.value))
        if(state.subject !== props.value) {
            var subject = state.data.find(o => o.subject === props.value);
            if(subject) {

                var topics = subject["topics"][Question.getRandomInt(subject["topics"].length)]
                var questions = topics["questions"][Question.getRandomInt(topics["questions"].length)]
                var options = questions["answer"]["options"]
                var correct = questions["answer"]["correct"]

                console.log("subject = " + subject["subject"])
                console.log("topic = " + topics["topic"])
                console.log("question = " + questions["question"])
                console.log("options = " + options)
                console.log("correct = " + correct)

                return {
                    subject: subject["subject"],
                    topic: topics["topic"],
                    question: questions["question"],
                    options: options,
                    correct: correct,
                    response: "",
                    feedback: "",
                    visible: true
                }
            } else {
                return {
                    subject: "",
                    visible: false
                }
            }
        }
        return null;
    }
    
    handleChange(event) {
        this.setState({response: event.target.value});
    }

    validateAnswer() {
        let feedback = "";
        if(this.state.response === this.state.correct) {
            feedback = "You are correct!";
        } else {
            feedback = "Correct answer: " + this.state.correct;
        }

        this.setState({feedback: feedback});
    }

    render() {
        if (!this.state.visible) {
            return null;
        }
        return (
            <div class="card">
              <h4 class="card-header">{this.state.topic}</h4>
              <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">{this.state.question}</h6>
                <div class="card-text">
                    <ol>
                        {this.state.options.map(option => <li>{option}</li>)}
                    </ol>
                </div>
                <div class="form-inline">
                    <input type="text" class="form-control mb-2 mr-sm-2" value={this.state.response} onChange={this.handleChange}/>
                    <button type="submit" class="btn btn-secondary mb-2" onClick={this.validateAnswer}>Check</button>
                </div>
                 <div class="card-footer">{this.state.feedback}</div>
              </div>
            </div>
        )
    }
}