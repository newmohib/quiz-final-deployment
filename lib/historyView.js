
	 var stringData = localStorage.getItem("oldSolution");
	 var parseData=JSON.parse(stringData);
	 var stringUserId = localStorage.getItem("userId");
	 var userId=JSON.parse(stringUserId);
	 var currentHistory = _.find(parseData,{"userId":userId});

	 //data store from localStorage
	 var averageScore,date,questionId,subjectId,totalScore,totalTime,totalMilliseconds,totalCorrects,totalIncorrect ,totalUnanswered ,scoreArray;

	function startHistary() {
		var arrayLength=(currentHistory.oldData.length-1);
	 	if (currentHistory !=undefined) {
	 		var avgScore=0; var maxScore=0; var examId;
	 		var totalMillisecondsTest;var minMillisecondsTest=0; minTotalTime=0
		 for (var i = (currentHistory.oldData.length-1); i>=0; i--){

		 	    totalMillisecondsTest=currentHistory.oldData[i].totalMilliseconds;
		 	    avgScore=currentHistory.oldData[i].averageScore;
		 	    var ScoreTest=(avgScore * currentHistory.oldData[i].questionId.length);
		 	    if (ScoreTest>=maxScore) {
		 	    	maxScore=ScoreTest;
		 	    	
		 	    	//console.log(maxScore);
		 	    	//console.log(ScoreTest);
		 	    }
		 	    if (totalMillisecondsTest<=minMillisecondsTest ||minMillisecondsTest==0) {
		 	    	minMillisecondsTest=currentHistory.oldData[i].totalMilliseconds;
		 	    	minTotalTime=currentHistory.oldData[i].totalTime;
		 	    	//console.log(totalMillisecondsTest);
		 	    	//console.log(minMillisecondsTest);
		 	    }
			if (i==arrayLength) {
			  examId=i +1;
			  var singleData=currentHistory.oldData[i];
			  averageScore=singleData.averageScore;
			  questionId=singleData.questionId;
			  subjectId=singleData.subjectId;
			  totalScore=singleData.totalScore;
			  totalTime=singleData.totalTime;
			  totalMilliseconds=singleData.totalMilliseconds;
			  totalCorrects=singleData.correct; 
			  totalIncorrect=singleData.incorrect; 
			  totalUnanswered=singleData.unanswered;
			  scoreArray=singleData.score;
			  date=singleData.date;

			  document.getElementById("historyLength").innerHTML = i;

			  var hours = Math.floor(((totalMilliseconds / questionId.length) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			  var minutes = Math.floor(((totalMilliseconds / questionId.length) % (1000 * 60 * 60)) / (1000 * 60));
			  var seconds = Math.floor(((totalMilliseconds / questionId.length) % (1000 * 60)) / 1000);

			  hours = (hours < 10) ? "0" + hours : hours;
			  minutes = (minutes < 10) ? "0" + minutes : minutes;
			  seconds = (seconds < 10) ? "0" + seconds : seconds;

			  var averageTime = minutes + ':' + seconds;
			  var averageTime2= hours + minutes + seconds;
			  var averageScore= totalScore / questionId.length;


			    var correctPercentage= (totalCorrects / questionId.length) * 100 + '%';
				var correctValue= (totalCorrects / questionId.length) * 100;
			    var correctSelector= document.querySelector('#correctValue');
			    	correctSelector.innerHTML=correctPercentage;
			    var correctForChart= '--value:' + ' ' + correctPercentage;
			    $("#correctForChart").attr({"style" : correctForChart});

			    var incorrectPercentage= (totalIncorrect / questionId.length) * 100 + '%';
				var incorrectValue= (totalIncorrect / questionId.length) * 100;
			    var incorrectSelector= document.querySelector('#incorrectValue');
			    	incorrectSelector.innerHTML=incorrectPercentage;
			    var incorrectForChart= '--value:' + ' ' + incorrectPercentage;
			    $("#incorrectForChart").attr({"style" : incorrectForChart});

			    var unansweredPercentage= (totalUnanswered / questionId.length) * 100 + '%';
				var unansweredValue= (totalUnanswered / questionId.length) * 100;
			    var unansweredSelector= document.querySelector('#unansweredValue');
			    	unansweredSelector.innerHTML=unansweredPercentage;
			    var unansweredForChart= '--value:' + ' ' + unansweredPercentage;
			    $("#unansweredForChart").attr({"style" : unansweredForChart});

			    var subjectSelector= document.querySelector('#subject');
			    	subjectSelector.innerHTML=subjectId;
			    //up new
			    var totalCorrectSelector= document.querySelector('#correctNumbers');
			    	totalCorrectSelector.innerHTML=totalCorrects + ' ' + '  Correct';
			    var totalIncorrectsSelector= document.querySelector('#IncorrectNumbers');
			    	totalIncorrectsSelector.innerHTML=totalIncorrect + '  Incorrect';
			    var totalunansweredSelector= document.querySelector('#unansweredNumbers');
			    	totalunansweredSelector.innerHTML=totalUnanswered + '  Unanswered';

			    var avgScoreSelector= document.querySelector('#averageScoreValue');
				    	avgScoreSelector.innerHTML=averageScore;
				var scoreForChart= '--value:' + ' ' + (averageScore * 10) +'%';
				    $("#averageScore").attr({"style" : scoreForChart});

				var avgTimeSelector= document.querySelector('#averageTimeValue');
				    	avgTimeSelector.innerHTML=averageTime;
				var timeForChart= '--value:' + ' ' + averageTime2 +'%';
				    $("#averageTime").attr({"style" : timeForChart});
				var dateViewSelector= document.querySelector('#dateView');
			    	dateViewSelector.innerHTML=date;

			    

		       
			}
		 }
		 //loop closs
			 var maxScoreSelector= document.querySelector('#maxScore');
		  		 maxScoreSelector.innerHTML=maxScore;
		   var examSelector= document.querySelector('#examId');
		  		 examSelector.innerHTML=examId;
		  var minTimeSelector= document.querySelector('#minTime');
		  		 minTimeSelector.innerHTML=minTotalTime;
	    }else{
	    console.log('userId not found');
	   }
	 document.getElementById("historyLength").innerHTML = arrayLength;
	 

	 //console.log(arrayLength);
	}


	//defautl function
	startHistary();


	function nextHistary() {
		var examId;
		var historyArrayLength=document.getElementById("historyLength").innerHTML;
		var arrayLength=parseInt(historyArrayLength) - 1;
	 	if (currentHistory !=undefined) {
		 for (var i = (currentHistory.oldData.length-1); i>=0; i--) {
			if (i==arrayLength && currentHistory.oldData.length>=0) {
				examId=i+1;
				
			  var singleData=currentHistory.oldData[i];
			  //console.log(singleData.score);
			  averageScore=singleData.averageScore;
			  questionId=singleData.questionId;
			  subjectId=singleData.subjectId;
			  totalScore=singleData.totalScore;
			  totalTime=singleData.totalTime;
			  totalMilliseconds=singleData.totalMilliseconds;
			  totalCorrects=singleData.correct; 
			  totalIncorrect=singleData.incorrect; 
			  totalUnanswered=singleData.unanswered;
			  scoreArray=singleData.score;
			  date=singleData.date;

			  document.getElementById("historyLength").innerHTML = i;

			  var hours = Math.floor(((totalMilliseconds / questionId.length) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			  var minutes = Math.floor(((totalMilliseconds / questionId.length) % (1000 * 60 * 60)) / (1000 * 60));
			  var seconds = Math.floor(((totalMilliseconds / questionId.length) % (1000 * 60)) / 1000);

			  hours = (hours < 10) ? "0" + hours : hours;
			  minutes = (minutes < 10) ? "0" + minutes : minutes;
			  seconds = (seconds < 10) ? "0" + seconds : seconds;

			  var averageTime = minutes + ':' + seconds;
			  var averageTime2= hours + minutes + seconds;
			  var averageScore= totalScore / questionId.length;

			     var correctPercentage= (totalCorrects / questionId.length) * 100 + '%';
				var correctValue= (totalCorrects / questionId.length) * 100;
			    var correctSelector= document.querySelector('#correctValue');
			    	correctSelector.innerHTML=correctPercentage;
			    var correctForChart= '--value:' + ' ' + correctPercentage;
			    $("#correctForChart").attr({"style" : correctForChart});

			    var incorrectPercentage= (totalIncorrect / questionId.length) * 100 + '%';
				var incorrectValue= (totalIncorrect / questionId.length) * 100;
			    var incorrectSelector= document.querySelector('#incorrectValue');
			    	incorrectSelector.innerHTML=incorrectPercentage;
			    var incorrectForChart= '--value:' + ' ' + incorrectPercentage;
			    $("#incorrectForChart").attr({"style" : incorrectForChart});

			    var unansweredPercentage= (totalUnanswered / questionId.length) * 100 + '%';
				var unansweredValue= (totalUnanswered / questionId.length) * 100;
			    var unansweredSelector= document.querySelector('#unansweredValue');
			    	unansweredSelector.innerHTML=unansweredPercentage;
			    var unansweredForChart= '--value:' + ' ' + unansweredPercentage;
			    $("#unansweredForChart").attr({"style" : unansweredForChart});

			    var subjectSelector= document.querySelector('#subject');
			    	subjectSelector.innerHTML=subjectId;
			    //up new

			    var totalCorrectSelector= document.querySelector('#correctNumbers');
			    	totalCorrectSelector.innerHTML=totalCorrects + ' ' + '  Correct';
			    var totalIncorrectsSelector= document.querySelector('#IncorrectNumbers');
			    	totalIncorrectsSelector.innerHTML=totalIncorrect + '  Incorrect';
			    var totalunansweredSelector= document.querySelector('#unansweredNumbers');
			    	totalunansweredSelector.innerHTML=totalUnanswered + '  Unanswered';

			    var avgScoreSelector= document.querySelector('#averageScoreValue');
				    	avgScoreSelector.innerHTML=averageScore;
				var scoreForChart= '--value:' + ' ' + (averageScore * 10) +'%';
				    $("#averageScore").attr({"style" : scoreForChart});

				var avgTimeSelector= document.querySelector('#averageTimeValue');
				    	avgTimeSelector.innerHTML=averageTime;
				var timeForChart= '--value:' + ' ' + averageTime2 +'%';
				    $("#averageTime").attr({"style" : timeForChart});
				var dateViewSelector= document.querySelector('#dateView');
			    	dateViewSelector.innerHTML=date;
		       
			}
		 }
				var examSelector= document.querySelector('#examId');
		  		examSelector.innerHTML=examId;
	    }else{
	    console.log('userId not found');
	   }
	    if (arrayLength>=0) {
	    	document.getElementById("historyLength").innerHTML = arrayLength;
	    	console.log(arrayLength);
	    }
	 

	
	}


		function previusHistary() {
			var examId;
		var historyArrayLength=document.getElementById("historyLength").innerHTML;
		var arrayLength=parseInt(historyArrayLength) + 1;
	 	if (currentHistory !=undefined) {
		 for (var i = (currentHistory.oldData.length-1); i>=0; i--) {
			if (i==arrayLength) {
				examId=i + 1;

			  var singleData=currentHistory.oldData[i];
			  //console.log(singleData.score);
			  averageScore=singleData.averageScore;
			  
			  
			  
			  questionId=singleData.questionId;
			  
			  subjectId=singleData.subjectId;
			  totalScore=singleData.totalScore;
			  totalTime=singleData.totalTime;
			  totalMilliseconds=singleData.totalMilliseconds;

			  totalCorrects=singleData.correct; 
			  totalIncorrect=singleData.incorrect; 
			  totalUnanswered=singleData.unanswered;
			  scoreArray=singleData.score;
			  date=singleData.date;

			  document.getElementById("historyLength").innerHTML = i;

			  var hours = Math.floor(((totalMilliseconds / questionId.length) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			  var minutes = Math.floor(((totalMilliseconds / questionId.length) % (1000 * 60 * 60)) / (1000 * 60));
			  var seconds = Math.floor(((totalMilliseconds / questionId.length) % (1000 * 60)) / 1000);

			  hours = (hours < 10) ? "0" + hours : hours;
			  minutes = (minutes < 10) ? "0" + minutes : minutes;
			  seconds = (seconds < 10) ? "0" + seconds : seconds;

			  var averageTime = minutes + ':' + seconds;
			  var averageTime2= hours + minutes + seconds;
			  var averageScore= totalScore / questionId.length;

			     var correctPercentage= (totalCorrects / questionId.length) * 100 + '%';
				var correctValue= (totalCorrects / questionId.length) * 100;
			    var correctSelector= document.querySelector('#correctValue');
			    	correctSelector.innerHTML=correctPercentage;
			    var correctForChart= '--value:' + ' ' + correctPercentage;
			    $("#correctForChart").attr({"style" : correctForChart});

			    var incorrectPercentage= (totalIncorrect / questionId.length) * 100 + '%';
				var incorrectValue= (totalIncorrect / questionId.length) * 100;
			    var incorrectSelector= document.querySelector('#incorrectValue');
			    	incorrectSelector.innerHTML=incorrectPercentage;
			    var incorrectForChart= '--value:' + ' ' + incorrectPercentage;
			    $("#incorrectForChart").attr({"style" : incorrectForChart});

			    var unansweredPercentage= (totalUnanswered / questionId.length) * 100 + '%';
				var unansweredValue= (totalUnanswered / questionId.length) * 100;
			    var unansweredSelector= document.querySelector('#unansweredValue');
			    	unansweredSelector.innerHTML=unansweredPercentage;
			    var unansweredForChart= '--value:' + ' ' + unansweredPercentage;
			    $("#unansweredForChart").attr({"style" : unansweredForChart});

			    var subjectSelector= document.querySelector('#subject');
			    	subjectSelector.innerHTML=subjectId;
			    //up new

			    var totalCorrectSelector= document.querySelector('#correctNumbers');
			    	totalCorrectSelector.innerHTML=totalCorrects + ' ' + '  Correct';
			    var totalIncorrectsSelector= document.querySelector('#IncorrectNumbers');
			    	totalIncorrectsSelector.innerHTML=totalIncorrect + '  Incorrect';
			    var totalunansweredSelector= document.querySelector('#unansweredNumbers');
			    	totalunansweredSelector.innerHTML=totalUnanswered + '  Unanswered';

			    var avgScoreSelector= document.querySelector('#averageScoreValue');
				    	avgScoreSelector.innerHTML=averageScore;
				var scoreForChart= '--value:' + ' ' + (averageScore * 10) +'%';
				    $("#averageScore").attr({"style" : scoreForChart});

				var avgTimeSelector= document.querySelector('#averageTimeValue');
				    	avgTimeSelector.innerHTML=averageTime;
				var timeForChart= '--value:' + ' ' + averageTime2 +'%';
				    $("#averageTime").attr({"style" : timeForChart});
				var dateViewSelector= document.querySelector('#dateView');
			    	dateViewSelector.innerHTML=date;
		       
			}
		 }
				 var examSelector= document.querySelector('#examId');
		  		 examSelector.innerHTML=examId;
	    }else{
	    console.log('userId not found');
	   }

	 
	 if (arrayLength<currentHistory.oldData.length) {
	    	document.getElementById("historyLength").innerHTML = arrayLength;
	    	console.log(arrayLength);
	    }

	

	}