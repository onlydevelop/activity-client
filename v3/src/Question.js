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
            options: []
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("value = " + JSON.stringify(props.value))
        if(state.subject !== props.value) {
            var subject = state.data.find(o => o.subject === props.value);
            if(subject) {
                var topics = subject["topics"][0]
                var questions = topics["questions"][0]
                var options = questions["answer"]["options"]

                console.log("subject = " + subject["subject"])
                console.log("topic = " + topics["topic"])
                console.log("question = " + questions["question"])
                console.log("options = " + options)

                return {
                    subject: subject["subject"],
                    topic: topics["topic"],
                    question: questions["question"],
                    options: options
                }
            }
        }
        return null;
    }
    

    // componentDidMount() {
    //     fetch("https://raw.githubusercontent.com/onlydevelop/questions/master/questions.json")
    //     .then(res => res.json())
    //     .then((data) => {
    //         this.setState({questions: data})
    //         console.log(data)
    //     })
    //     .catch(console.log)
    // }

    render() {
        return (
            <div class="container-fluid">
                <div class="row"><h2>{this.state.subject}</h2></div>

                <div class="row">
                    <div id="subtopic" class="col"><h3>{this.state.topic}</h3></div>
                </div>
        
                <div class="row">
                    <div id="question" class="col"><h5>{this.state.question}</h5></div>
                </div>
        
                <div id="options">
                    <ol>
        {this.state.options.map(option => <li>{option}</li>)}
                    </ol>
                </div>
        
            </div>
        )
    }
}