var inquirer = require('inquirer');


function calculateRecieved(str, probability, q){
    var str = str.split("");
    return str.map(function(item){
        var random = Math.random();
        console.log(random);
        if(random < probability) {
            return item;
        } else {
            return Math.abs((parseInt(item)-1)%q);
        }
    });
}

var questions = [
    {
      type: 'list',
      name: 'cType',
      message: 'What type of code?',
      choices: ['Binary Hamming Code'],
      filter: function(val) {
        return val.toLowerCase();
      }
    },
    {
      type: 'input',
      name: 'probability',
      message: 'Error probability?',
      validate: function(value) {
        var valid = !isNaN(parseFloat(value));
        return valid || 'Please enter a number';
      },
      filter: Number
    },
    {
      type: 'list',
      name: 'scheme',
      message: 'Correction Scheme?',
      choices: ['Nearest Neighbor'],
      filter: function(val) {
        return val.toLowerCase();
      }
    },
    {
        type: 'input',
        name: 'message',
        message: 'Message to send?',
        filter: function(val) {
          return val.toLowerCase();
        }
    }
];

inquirer.prompt(questions).then(answers => {
    console.log(JSON.stringify(answers, null, '  '));
    switch(answers.cType) {
        case 'binary hamming code':
            console.log("Vector sent: " + answers.message);
            console.log("Vector recieved: " + calculateRecieved(answers.message,answers.probability,2));
            break;
    }
});