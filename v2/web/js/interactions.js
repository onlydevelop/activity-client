// Variables
var subtopic = 'Maths-Basic';
var image = '../img/birds.jpg';
var question = 'How many birds are there?'
var options = [
  { text: '3' },
  { text: '4' },
  { text: '5' },
  { text: '6' }
];
var correctChoice = "4";

// Functions
function onSubmit() {
  var response = this.$refs.txtResponse.value;
  var correct = response == correctChoice ? 'correct!' : 'not correct.';
  var correctMsg = 'Your answer is ' + correct;
  this.$refs.txtFeedback.innerText = correctMsg;
}

// Components
Vue.component('option-item', {
  props: ['option'],
  template: '<li>{{ option.text }}</li>'
});

// Bindings
var v_subtopic = new Vue({
  el: '#subtopic',
  data: {
    subtopic: subtopic
  }
});

var v_image = new Vue({
  el: '#image',
  data: {
    image: image
  }
});

var v_question = new Vue({
  el: '#question',
  data: {
    question: question
  }
});

var v_options = new Vue({
  el: '#options',
  data: {
    options: options
  }
});


var v_response = new Vue({
  el: '#response',
  methods: {
    onSubmit: onSubmit
  }
});
