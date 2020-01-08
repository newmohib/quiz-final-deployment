
	function dataStoreIntoHistory() {
		
	
	//if totalQuestion =0 then count into localstorage question length
	var totalQuestions=10;
	window.memoryStorage = {};
	var initializeMemoryStore =  function(key){
    var stringData = localStorage.getItem(key);
	     if(stringData){
	          window.memoryStorage[key]  =JSON.parse(stringData);
	     }
	}

	if(localStorage.getItem('hasData')){
	    initializeMemoryStore('questions');
	}

	var questionsData=memoryStorage.questions;
	var correctAnswers=[];
	var incorrectAnswers=[];
	var unanswered=[];
	var scoreArray=[]
	var totalScore=0;
	var totalTime=0;
	for (i in questionsData) {
		scoreEveryOne=questionsData[i].score;
		scoreArray.push(scoreEveryOne);
		answerStatus=questionsData[i].answerStatus;
		selected=questionsData[i].selected;
		if (answerStatus==true) {
			pushSuccess=correctAnswers.push(answerStatus);
		}
		var selected=selected ? selected : '';
		if (selected.length==0) {
			pushSuccess=unanswered.push(selected);
			//console.log(pushSuccess)
		}
		if(selected.length>0 && answerStatus==false){
			pushSuccess=incorrectAnswers.push(selected);
		}
		
		totalScore +=questionsData[i].score;
		totalTime +=questionsData[i].reviewTime;
	}
//loop closs	
	var totalCorrects=correctAnswers.length;
	var totalIncorrect=incorrectAnswers.length;
	var totalUnanswered=unanswered.length;
	
	
	//total question
	//totalQuestions variable set to page top
	if (totalQuestions>1) {

	}else{
		totalQuestions=questionsData.length;
	}
	
	// var scorePercentage= (totalCorrects / totalQuestions) * 100 + '%';
	// var scoreNumbers= (totalCorrects / totalQuestions) * 100;
 //    var scorePercentageSelector= document.querySelector('#scorePercentage');
 //    	scorePercentageSelector.innerHTML=scorePercentage;
 //    var scoreNumbersForChart= '--value:' + ' ' + scorePercentage;
 //    $("#scoreNumbersForChart").attr({"style" : scoreNumbersForChart});

 //    var totalCorrectSelector= document.querySelector('#correctNumbers');
 //    	totalCorrectSelector.innerHTML=totalCorrects + ' ' + '  Correct';
 //    var totalIncorrectsSelector= document.querySelector('#IncorrectNumbers');
 //    	totalIncorrectsSelector.innerHTML=totalIncorrect + '  Incorrect';
 //    var totalunansweredSelector= document.querySelector('#unansweredNumbers');
 //    	totalunansweredSelector.innerHTML=totalUnanswered + '  Unanswered';

//calculate average score and time 
  var averageMilliseconds=totalTime / totalQuestions
  var totalMilliseconds=totalTime;
	// var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((averageMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((averageMilliseconds % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((averageMilliseconds % (1000 * 60)) / 1000);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  var averageTime = minutes + ':' + seconds;
  var averageTime2= hours + minutes + seconds;
  var averageScore= totalScore / totalQuestions;

  // var avgScoreSelector= document.querySelector('#averageScoreValue');
  //   	avgScoreSelector.innerHTML=averageScore;
  //   var scoreForChart= '--value:' + ' ' + averageScore +'%';
  //   $("#averageScore").attr({"style" : scoreForChart});

  //   var avgTimeSelector= document.querySelector('#averageTimeValue');
  //   	avgTimeSelector.innerHTML=averageTime;
  //   var timeForChart= '--value:' + ' ' + averageTime2 +'%';
  //   $("#averageTime").attr({"style" : timeForChart});

//for history


	// var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((totalTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((totalTime % (1000 * 60)) / 1000);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  var totalTime =hours + ':' + minutes + ':' + seconds;
  var averageScore= totalScore / totalQuestions;

  var currentQuestion=localStorage.getItem("questions");
  var currentQuestionParse=JSON.parse(currentQuestion);
  var questionIdArray=[];
  var subjectId='';
  //var totalTimeMilliseconds;
	for (i in currentQuestionParse) {
	  question=currentQuestionParse[i].id;
	  subjectId=currentQuestionParse[i].subjectId;
	  //totalTimeMilliseconds +=currentQuestionParse[i].reviewTime;
	  questionIdArray.push(question);
	}

	 var userIdToLocalStorage=localStorage.getItem("userId");
     var userIdParse=JSON.parse(userIdToLocalStorage);
     var currentDate= new Date();
     var currentDateToLocla = currentDate.toLocaleString();
     console.log(scoreArray);
	//if localStorage.oldSolution not defined
	 if (localStorage.oldSolution) {
	//if old id found then it 
		 var questionStatus ={"totalMilliseconds":totalMilliseconds,"date":currentDateToLocla,"score":scoreArray,"subjectId":subjectId,"questionId":questionIdArray,"averageScore":averageScore ,"totalScore":totalScore,"totalTime":totalTime,"correct":totalCorrects,"incorrect":totalIncorrect,"unanswered":totalUnanswered};
		 var historySolutionToStore=localStorage.getItem("oldSolution");
	     var historySolutionParse=JSON.parse(historySolutionToStore);
	     var currentSolution = _.find(historySolutionParse,{userId:userIdParse});
	     console.log(currentDateToLocla);
	     if (currentSolution==undefined) {
	     	//if oldSolution found but userId not found in localStorage then it statement exicute
	     	var questionSolution={
								  "userId":userIdParse,
							      "oldData":[
			       		          {"totalMilliseconds":totalMilliseconds,"date":currentDateToLocla,"score":scoreArray,"subjectId":subjectId,"questionId":questionIdArray,"averageScore":averageScore ,"totalScore":totalScore,"totalTime":totalTime,"correct":totalCorrects,"incorrect":totalIncorrect,"unanswered":totalUnanswered}
			        		     ]
					          };

	     	historySolutionParse.push(questionSolution);
	     }else{
	     	//if oldSolution and userId found in localStorage then it statement exicute
	     	 currentSolution.oldData.push(questionStatus);
	     } 
	     localStorage.setItem("oldSolution",JSON.stringify(historySolutionParse));
	}else{
		//if oldSolution not found in localStorage then it statement exicute
		var questionSolution=[{ 
		"userId":userIdParse,
		"oldData":[
        {"totalMilliseconds":totalMilliseconds,"date":currentDateToLocla,"score":scoreArray,"subjectId":subjectId,"questionId":questionIdArray,"averageScore":averageScore ,"totalScore":totalScore,"totalTime":totalTime,"correct":totalCorrects,"incorrect":totalIncorrect,"unanswered":totalUnanswered}
         ],
	}];

  		 localStorage.setItem("oldSolution",JSON.stringify(questionSolution));
	}
   

	window.location.replace("scorecard.html");
   }