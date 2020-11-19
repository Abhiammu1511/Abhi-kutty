var tasks = [{
    "title": "காகிதம் தயாரிக்க பயன்படும் மரம் ?",
    "answer1": "தேக்கு",
    "answer2": "தென்னை",
    "answer3": "சந்தனம்",
    "answer4": "யூகலிப்டஸ்",
    "timer" : "start"
},
{
    "title": "காகிதம் தயாரிக்க பயன்படும் மரம் ?",
    "answer1": "தேக்கு",
    "answer2": "தென்னை",
    "answer3": "சந்தனம்",
    "answer4": "யூகலிப்டஸ்",
    "timer" : "start"
},
{
    "title": "காகிதம் தயாரிக்க பயன்படும் மரம் ?",
    "answer1": "தேக்கு",
    "answer2": "தென்னை",
    "answer3": "சந்தனம்",
    "answer4": "யூகலிப்டஸ்",
    "timer" : "start"
},
{
    "title": "காகிதம் தயாரிக்க பயன்படும் மரம் ?",
    "answer1": "தேக்கு",
    "answer2": "தென்னை",
    "answer3": "சந்தனம்",
    "answer4": "யூகலிப்டஸ்",
    "timer" : "start"
},
{
    "title": "காகிதம் தயாரிக்க பயன்படும் மரம் ?",
    "answer1": "தேக்கு",
    "answer2": "தென்னை",
    "answer3": "சந்தனம்",
    "answer4": "யூகலிப்டஸ்",
    "timer" : "start"
}
];

let cardContainer;

let createTaskCard = (task) => {


    let column = document.createElement('div');
    column.className = 'col-lg-8 col-md-8 col-sm-10 col-11 mt-5 '

    let card = document.createElement('div');
    card.className = 'card shadow-lg rounded p-4';
    

  

    let title = document.createElement('h4');
    title.innerText = task.title;
    title.className = 'card-title text-capitalize text-center';
    let timer = document.createElement('div');
    timer.id = 'countdown';
    timer.className = 'btn btn-light';
    timer.innerText = task.timer;

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body ';

    let answerFirstTwo = document.createElement('div');
    answerFirstTwo.className = 'answerFirstTwo d-flex justify-content-around';
    let button1 = document.createElement('a');
    button1.className = 'btn btn-outline-success m-4';
    button1.innerText = task.answer1;
    let button2 = document.createElement('a');
    button2.className = 'btn btn-outline-danger m-4';
    button2.innerText = task.answer2;

    let lastTwo = document.createElement('div');
    lastTwo.className = 'lastTwo d-flex justify-content-around';

    let button3 = document.createElement('a');
    button3.className = 'btn btn-outline-success m-4';
    button3.innerText = task.answer3;
    let button4 = document.createElement('a');
    button4.className = 'btn btn-outline-success m-4';
    button4.innerText = task.answer4;

    card.appendChild(title);
    cardBody.appendChild(timer);
    answerFirstTwo.appendChild(button1);
    answerFirstTwo.appendChild(button2);
    lastTwo.appendChild(button3);
    lastTwo.appendChild(button4);
    cardBody.appendChild(lastTwo);
    cardBody.appendChild(answerFirstTwo);
    card.appendChild(cardBody);
    
    column.appendChild(card);
    cardContainer.appendChild(column);

}

let initListOfTasks = () => {
    if (cardContainer) {
        document.getElementById('card-container').replaceWith(cardContainer);
        return;
    }

    cardContainer = document.getElementById('card-container');
    tasks.forEach((task) => {
        createTaskCard(task);
    });
};
initListOfTasks();


var timeleft = 10;
var downloadTimer;
document.getElementById("countdown").addEventListener('click', function() {
     downloadTimer = setInterval(function(){
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "0";
      } else {
        document.getElementById("countdown").innerHTML = timeleft;
      }
      timeleft -= 1;
    }, 1000);
});

