      //setup variable need

var stTimer = document.querySelector('.startTimer');
var psTimer = document.querySelector('.pauseTimer');
var timerDisplay = document.querySelector('.timer');
var startTime;
var updatedTime;
var difference;
var tInterval;
var savedTime;
var paused = 0;
var running = 0;
var remainingTime=60000 * 5;



function startTimer(){
  if(!running){
        if (paused==1) {
          startTime = new Date().getTime();
          //startTime +=60000;
          tInterval = setInterval(getShowTime, 1000);
          paused = 0;
          running = 1;
          timerDisplay.style.background = "white";
          timerDisplay.style.cursor = "auto";
          timerDisplay.style.color = "black";
          stTimer.classList.add('lighter');
          stTimer.style.cursor = "auto";
          psTimer.style.cursor = "pointer";
          psTimer.classList.remove('lighter');
          $("#timePause").toggleClass("fas fa-play");
          $("#timePause").toggleClass("fas fa-pause");
          $("#timeEvent").attr({"onclick" : "pauseTimer()"});
          enableButton()
          startTimerSingle()
        }else{
          startTime = new Date().getTime();
          startTime +=remainingTime;
          tInterval = setInterval(getShowTime, 1000);
          paused = 0;
          running = 1;
          timerDisplay.style.background = "white";
          timerDisplay.style.cursor = "auto";
          timerDisplay.style.color = "black";
          stTimer.classList.add('lighter');
          stTimer.style.cursor = "auto";
          psTimer.style.cursor = "pointer";
          psTimer.classList.remove('lighter');
          //$("#timePause").toggleClass("fas fa-pause");
          //$("#timePause").toggleClass("fas fa-play");
          $("#timeEvent").attr({"onclick" : "pauseTimer()"});
          //startTimerSingle()
          enableButton();
        }
    

  }
}



function pauseTimer(){
  if (!difference){
    // if timer never started, don't allow pause button to do anything
    if(!running){

     if (paused==1) {
          startTime = new Date().getTime();
          //startTime +=60000;
          tInterval = setInterval(getShowTime, 1000);
          paused = 0;
          running = 1;
          timerDisplay.style.background = "white";
          timerDisplay.style.cursor = "auto";
          timerDisplay.style.color = "black";
          stTimer.classList.add('lighter');
          stTimer.style.cursor = "auto";
          psTimer.style.cursor = "pointer";
          psTimer.classList.remove('lighter');
    //jquery fuction for class change
        $("#timePause").toggleClass("fas fa-pause");
        $("#timePause").toggleClass("fas fa-play");
        //$("#nextQuestionButton").removeClass("display_none");
        $("#timeEvent").attr({"onclick" : "startTimer()"});
        pauseTimerSingle();
        }else{
          startTime = new Date().getTime();
          startTime +=remainingTime;
          tInterval = setInterval(getShowTime, 1000);
          paused = 0;
          running = 1;
          timerDisplay.style.background = "white";
          timerDisplay.style.cursor = "auto";
          timerDisplay.style.color = "black";
          stTimer.classList.add('lighter');
          stTimer.style.cursor = "auto";
          psTimer.style.cursor = "pointer";
          psTimer.classList.remove('lighter');

        $("#timePause").toggleClass("fas fa-pause");
        $("#timePause").toggleClass("fas fa-play");
        $("#timeEvent").attr({"onclick" : "startTimer()"});
        pauseTimerSingle()
        }
  }
  } else if (!paused) {
    clearInterval(tInterval);
    savedTime = difference;
    paused = 1;
    running = 0;
    timerDisplay.style.background = "white";
    timerDisplay.style.color = "black";
    timerDisplay.style.cursor = "pointer";
    stTimer.style.cursor = "pointer";
    psTimer.style.cursor = "auto";
    stTimer.classList.remove('lighter');
    psTimer.classList.add('lighter');
    $("#timePause").toggleClass("fas fa-pause");
    $("#timePause").toggleClass("fas fa-play");
    $("#timeEvent").attr({"onclick" : "startTimer()"});
    console.log(savedTime);
    pauseTimerSingle();
    disabledButton();
  } 
  else {
    //startTimer();
    //alert('i am else');
  }
}



function resetTimer(){
  clearInterval(tInterval);
  savedTime = 0;
  difference = 0;
  paused = 0;
  running = 0;
  timerDisplay.innerHTML = '00:00';
  timerDisplay.style.background = "white";
  timerDisplay.style.color = "black";
  timerDisplay.style.cursor = "pointer";
  stTimer.style.cursor = "pointer";
  psTimer.style.cursor = "auto";
  stTimer.classList.remove('lighter');
  psTimer.classList.remove('lighter');
}



function getShowTime(){
  updatedTime = new Date().getTime();

 

if (savedTime){
    difference = (startTime - updatedTime) + savedTime;
  } else { 
    difference = startTime - updatedTime; 
  }


   if (difference<=0) {
    //redirect submit function
    alert('time out');
    clearInterval(tInterval);
    savedTime = 0;
    difference = 0;
    paused = 0;
    running = 0;

    //go to submit function from question.js
    pauseTimerSingle();
    submitAnswers()
  }

 //console.log(difference);

// var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

timerDisplay.innerHTML = minutes + ':' + seconds;
}

startTimer();



//=======closs total time



//====== start single time


//setup variable need for single
var stTimerSingle = document.querySelector('.startTimer');
var psTimerSingle = document.querySelector('.pauseTimer');
var timerDisplaySingle = document.querySelector('.timerSingle');
var startTimeSingle;
var updatedTimeSingle;
var differenceSingle;
var tIntervalSingle;
var savedTimeSingle;
var pausedSingle = 0;
var runningSingle = 0;




function startTimerSingle(){
  if(!runningSingle){
    startTimeSingle = new Date().getTime();
    tIntervalSingle = setInterval(getShowTimeSingle, 1000);
    pausedSingle = 0;
    runningSingle = 1;
    timerDisplaySingle.style.background = "white";
    timerDisplaySingle.style.cursor = "auto";
    timerDisplaySingle.style.color = "black";
    stTimerSingle.classList.add('lighter');
    stTimerSingle.style.cursor = "auto";
    psTimerSingle.style.cursor = "pointer";
    psTimerSingle.classList.remove('lighter');
  }
}



function pauseTimerSingle(){
  if (!differenceSingle){
    // if timer never started, don't allow pause button to do anything
  } else if (!pausedSingle) {
    clearInterval(tIntervalSingle);
    savedTimeSingle = differenceSingle;
    pausedSingle = 1;
    runningSingle = 0;
    timerDisplaySingle.style.background = "white";
    timerDisplaySingle.style.color = "black";
    timerDisplaySingle.style.cursor = "pointer";
    stTimerSingle.style.cursor = "pointer";
    psTimerSingle.style.cursor = "auto";
    stTimerSingle.classList.remove('lighter');
    psTimerSingle.classList.add('lighter');
  } else {
    startTimerSingle();
  }
}



function resetTimerSingle(){
  clearInterval(tIntervalSingle);
  savedTimeSingle = 0;
  differenceSingle = 0;
  pausedSingle = 0;
  runningSingle = 0;
  timerDisplaySingle.innerHTML = '00:00';
  timerDisplaySingle.style.background = "white";
  timerDisplaySingle.style.color = "black";
  timerDisplaySingle.style.cursor = "pointer";
  stTimerSingle.style.cursor = "pointer";
  psTimerSingle.style.cursor = "auto";
  stTimerSingle.classList.remove('lighter');
  psTimerSingle.classList.remove('lighter');
}



function getShowTimeSingle(){
  updatedTimeSingle = new Date().getTime();

if (savedTimeSingle){ 
    differenceSingle = (updatedTimeSingle - startTimeSingle) + savedTimeSingle;
  } else { 
    differenceSingle =  updatedTimeSingle - startTimeSingle; 
  }

  // var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((differenceSingle % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((differenceSingle % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((differenceSingle % (1000 * 60)) / 1000);

  //console.log(hours + minutes + seconds);
  // this variable is used for Reviw time Update
  var reviewTimeStore=differenceSingle;

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  timerDisplaySingle.innerHTML = minutes + ':' + seconds;
  //console.log(minutes + ':' + seconds);


    //update time for every question
    var updateTimeForSingle= minutes + ':' + seconds;
    var questioNumberToform=document.question_form.questionNumber.value;
    var AllQuestions=localStorage.getItem("questions");
    var dataParse=JSON.parse(AllQuestions);
    //var currentQuestion = _.find(dataParse,{id:'2',id:'2'});
    var currentQuestion = _.find(dataParse,{id:questioNumberToform});
    // to localstorage data
    var previusTime=currentQuestion.reviewTime ? currentQuestion.reviewTime : 0;
    var answerStatus=currentQuestion.answerStatus ? currentQuestion.answerStatus : 0;
    
    // currentQuestion.reviewTime = reviewTimeStore + previusTime;
    // totalTimeSingleQuestion = reviewTimeStore + previusTime;

    currentQuestion.reviewTime = 1000 + previusTime;
    totalTimeSingleQuestion = 1000 + previusTime;
      var milliseconds=1000;
      if (answerStatus==true) {
          if (totalTimeSingleQuestion <= (milliseconds * 5)) {
              currentQuestion.score = 10;
          }else if(totalTimeSingleQuestion <= (milliseconds * 10)){
            currentQuestion.score = 9.50;
          }else if(totalTimeSingleQuestion <= (milliseconds * 15)){
            currentQuestion.score = 9;
          }else if(totalTimeSingleQuestion <= (milliseconds * 20)){
            currentQuestion.score = 8.50;
          }else if(totalTimeSingleQuestion <= (milliseconds * 25)){
            currentQuestion.score = 8;
          }else if(totalTimeSingleQuestion <= (milliseconds * 30)){
            currentQuestion.score = 7.50;
          }else if(totalTimeSingleQuestion <= (milliseconds * 35)){
            currentQuestion.score = 7;
          }else if(totalTimeSingleQuestion <= (milliseconds * 40)){
            currentQuestion.score = 6.50;
          }else if(totalTimeSingleQuestion <= (milliseconds * 45)){
            currentQuestion.score = 6;
          }else if(totalTimeSingleQuestion <= (milliseconds * 50)){
            currentQuestion.score = 5.50;
          }else if(totalTimeSingleQuestion > (milliseconds * 50)){
            currentQuestion.score = 5;
          }
          
        }else if(answerStatus==false){
          currentQuestion.score = 0;
          //console.log(currentQuestion.score)
        }
    //time convert for view

      // var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var totalHours = Math.floor((totalTimeSingleQuestion % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var totalMinutes = Math.floor((totalTimeSingleQuestion % (1000 * 60 * 60)) / (1000 * 60));
    var totalSeconds = Math.floor((totalTimeSingleQuestion % (1000 * 60)) / 1000);
    //console.log(totalSeconds);
        
    totalHours = (totalHours < 10) ? "0" + totalHours : totalHours;
    totalMinutes = (totalMinutes < 10) ? "0" + totalMinutes : totalMinutes;
    totalSeconds = (totalSeconds < 10) ? "0" + totalSeconds : totalSeconds;
  
    var sotreTimeForView=totalMinutes + ':' + totalSeconds;
    currentQuestion.viewTime = sotreTimeForView;
    localStorage.setItem("questions",JSON.stringify(dataParse));

}

//when pause time then this function execute
function disabledButton(){
    $("#nextQuestionButton ,#submitButton ,#PreviousQuestionButton ,#reviewButton ,#0,#1,#2,#3,#4,#5,#6,#7,#8,#9").attr({"disabled" : "disabled"});
}
//after pause  to play time then this function execute
function enableButton(){
    $("#nextQuestionButton ,#submitButton ,#PreviousQuestionButton ,#reviewButton ,#0,#1,#2,#3,#4,#5,#6,#7,#8,#9").removeAttr("disabled");
}

startTimerSingle();


