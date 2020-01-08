
	window.memoryStorage = {};

  var setToStore = function(key,value){
    window.memoryStorage[key] = value;
    localStorage.setItem(key,JSON.stringify(value));

}

var getFromStore = function(key){
    return window.memoryStorage[key];
}

//if data stor in localstorage then the data store in memory
var initializeMemoryStore =  function(key){
     var stringData = localStorage.getItem(key);
     if(stringData){
          window.memoryStorage[key]  =JSON.parse(stringData);
     }
}

// for data initialize
if(localStorage.getItem('hasData')){
    initializeMemoryStore('questions');
}else{

setToStore("questions",jsonResponse);
localStorage.setItem("hasData","true");
}

   
      function startQuestion() {

        //time restart
        

          var questionText='';
          var optionsArray='';
          var arrayLength='';

          for (i in memoryStorage.questions) {
            if (i==0) {
              optionsArray=memoryStorage.questions[i].options;
              answerType=memoryStorage.questions[i].answerType;
              answersArray=memoryStorage.questions[i].answers;
              subjectId=memoryStorage.questions[i].subjectId;
              questionId=memoryStorage.questions[i].id;
 //alert(answerType);
              questionText +='<form name="question_form">';
              questionText +='<input class="display_none" type="text" name="questionNumber" value="'+questionId+'">';
              questionText +='</form>';
              questionText +='<button class="btn btn-info btn-sm question_button" ><span>';
              //questionText +=parseInt(i) + 1;
              questionSerial=parseInt(i) + 1;
              questionSerial=questionSerial <10 ? '0'+questionSerial:questionSerial;
              questionText +=questionSerial;

              questionText +='</span></button>';
              questionText +=memoryStorage.questions[i].questionText;
             
             arrayLength+=i;
            }
             
          }

          var optionText='';
          var optionValue='';
          for (var j = 0; j < optionsArray.length; j++) {
            var letter=questionId+'_'+String.fromCharCode(97+j);
            var upperLetter=String.fromCharCode(65+j);
           optionText += '<div  class="row row_margin_bottom_20">';
           optionText += '<div  class="col-12">';
           optionText +='<div onclick="individualSelfChoice(\'' + letter +'\',\'' + answerType +'\')" id="'+letter+'" '+' class="for_chacked col_padding_10 before_select">';
           optionText +='<div class="container">';
           optionText +='<div class="row">';
           optionText +='<div class="col-10 col_padding_right_left_0">';
           optionText +='<div>';
           optionText +='<a  style="color:white;" class=" btn btn-secondary btn-sm question_answers">';

           optionText +='<span>'+upperLetter+'</span>';
            optionText +='</a>';
            optionText+= optionsArray[j].text;
            optionValue=optionsArray[j].value;
            optionText +='</div>';
            optionText +='</div>';
            optionText +='<div class="multiAns col-2 col_padding_right_left_0">';
            optionText +='<input class="answer_select" type="'+answerType+'" '+' name="inputData" value="'+optionValue+'">';
            optionText +='</div>'; //col-2 closs   
            optionText +='</div>'; //row closs
            optionText +='</div>'; //container closs
            optionText +='</div>';
            optionText +='</div>'; //collumn-12 closs
            optionText +='</div>'; //row closs

          }

         
            $("#0").removeClass("btn btn-light");
            $("#0").addClass("btn btn-primary");
            $("#PreviousQuestionButton").addClass("display_none");
            $("#nextQuestionButton").removeClass("display_none");

          document.getElementById("questionHead").innerHTML ='<p>'+questionText+'</p>';
          document.getElementById("multipleChoice").innerHTML = optionText+'<br>';
          document.getElementById("questionNumberSet").innerHTML = arrayLength;
          
   }


//start next Question
   function nextQuestion() {
          //collect answers by condition
          if (true) {
              var questioNumberToform=document.question_form.questionNumber.value;
              selectedAnswers(questioNumberToform);
             
          }
    
    //next question select        
          var questionNumberGetToSet = document.getElementById("questionNumberSet").innerText;
          var questionText='';
          var optionsArray='';
          var arrayLength=parseInt(questionNumberGetToSet) + 1 ;
          
          for (i in memoryStorage.questions) {
            if (i== arrayLength && i<memoryStorage.questions.length) {
              optionsArray=memoryStorage.questions[i].options;
              answerType=memoryStorage.questions[i].answerType;
              answersArray=memoryStorage.questions[i].answers;
              subjectId=memoryStorage.questions[i].subjectId;
              questionId=memoryStorage.questions[i].id;
              answerStatus=memoryStorage.questions[i].answerStatus;
              questionText +='<form name="question_form">';
              questionText +='<input class="display_none" type="text" name="questionNumber" value="'+questionId+'">';
              questionText +='</form>';
              questionText +='<button class="btn btn-info btn-sm question_button" ><span>';
              //questionText +=parseInt(i) + 1;
              questionSerial=parseInt(i) + 1;
              questionSerial=questionSerial <10 ? '0'+questionSerial:questionSerial;
              questionText +=questionSerial;

              questionText +='</span></button>';
              questionText +=memoryStorage.questions[i].questionText;
             //optionsArray=memoryStorage.questions[i].options;
             
            }
             
          }
          var optionText='';
          var optionValue='';

          for (var j = 0; j < optionsArray.length; j++) {
            var letter=questionId+'_'+String.fromCharCode(97+j);
            var upperLetter=String.fromCharCode(65+j);
           optionText += '<div class="row row_margin_bottom_20">';
           optionText += '<div class="col-12">';
           optionText +='<div onclick="individualSelfChoice(\'' + letter +'\',\'' + answerType +'\')" id="'+letter+'" '+' class="for_chacked col_padding_10 before_select">';
           optionText +='<div class="container">';
           optionText +='<div class="row">';
           optionText +='<div class="col-10 col_padding_right_left_0">';
           optionText +='<div>';
           optionText +='<a  style="color:white;" class=" btn btn-secondary btn-sm question_answers" >';
           
          optionText +='<span>'+upperLetter+'</span>';
          optionText +='</a>';
          optionText+= optionsArray[j].text;
          optionValue=optionsArray[j].value;
          optionText +='</div>';
          optionText +='</div>';
          optionText +='<div class="multiAns col-2 col_padding_right_left_0">';
          optionText +='<input class="answer_select" type="'+answerType+'" '+' name="inputData" value="'+optionValue+'">';
          optionText +='</div>'; //col-2 closs
          optionText +='</div>'; //row closs
          optionText +='</div>'; //container closs
          optionText +='</div>';
          optionText +='</div>'; //collumn-12 closs
          optionText +='</div>'; //row closs

          }


          //for active use jquery
            if (arrayLength==1) {
            $("#0,#2,#3,#4,#5,#6,#7,#8,#9").removeClass("btn btn-primary");
            $("#1").removeClass("btn btn-light");
            $("#1").addClass("btn btn-primary");
            $("#0,#2,#3,#4,#5,#6,#7,#8,#9").addClass("btn btn-light");
            $("#PreviousQuestionButton").removeClass("display_none");
            }
            else if (arrayLength==2) {
            $("#0,#1,#3,#4,#5,#6,#7,#8,#9").removeClass("btn btn-primary");
            $("#2").removeClass("btn btn-light");
            $("#2").addClass("btn btn-primary");
            $("#0,#1,#3,#4,#5,#6,#7,#8,#9").addClass("btn btn-light");
            }
            else if (arrayLength==3) {
            $("#0,#2,#1,#4,#5,#6,#7,#8,#9").removeClass("btn btn-primary");
            $("#3").removeClass("btn btn-light");
            $("#3").addClass("btn btn-primary");
            $("#0,#2,#1,#4,#5,#6,#7,#8,#9").addClass("btn btn-light");
            }
            else if (arrayLength==4) {
            $("#0,#2,#3,#1,#5,#6,#7,#8,#9").removeClass("btn btn-primary");
            $("#4").removeClass("btn btn-light");
            $("#4").addClass("btn btn-primary");
            $("#0,#2,#3,#1,#5,#6,#7,#8,#9").addClass("btn btn-light");
            }
            else if (arrayLength==5) {
            $("#0,#2,#3,#4,#1,#6,#7,#8,#9").removeClass("btn btn-primary");
            $("#5").removeClass("btn btn-light");
            $("#5").addClass("btn btn-primary");
            $("#0,#2,#3,#4,#1,#6,#7,#8,#9").addClass("btn btn-light");
            }
            else if (arrayLength==6) {
            $("#0,#2,#3,#4,#5,#1,#7,#8,#9").removeClass("btn btn-primary");
            $("#6").removeClass("btn btn-light");
            $("#6").addClass("btn btn-primary");
            $("#0,#2,#3,#4,#5,#1,#7,#8,#9").addClass("btn btn-light");
            }
            else if (arrayLength==7) {
            $("#0,#2,#3,#4,#5,#6,#1,#8,#9").removeClass("btn btn-primary");
            $("#7").removeClass("btn btn-light");
            $("#7").addClass("btn btn-primary");
            $("#0,#2,#3,#4,#5,#6,#1,#8,#9").addClass("btn btn-light");
            }
            else if (arrayLength==8) {
            $("#0,#2,#3,#4,#5,#6,#7,#1,#9").removeClass("btn btn-primary");
            $("#8").removeClass("btn btn-light");
            $("#8").addClass("btn btn-primary");
            $("#0,#2,#3,#4,#5,#6,#7,#1,#9").addClass("btn btn-light");
            }
            else if (arrayLength==9) {
            $("#0,#2,#3,#4,#5,#6,#7,#8,#1").removeClass("btn btn-primary");
            $("#9").removeClass("btn btn-light");
            $("#9").addClass("btn btn-primary");
            $("#0,#2,#3,#4,#5,#6,#7,#8,#1").addClass("btn btn-light");
            $("#nextQuestionButton").addClass("display_none");
            }
            
          //for active use jquery closs
          if (arrayLength<10) {
            document.getElementById("questionHead").innerHTML ='<p>'+questionText+'</p>';
           document.getElementById("multipleChoice").innerHTML = optionText+'<br>';
           document.getElementById("questionNumberSet").innerHTML = arrayLength;
          }

           //time restart
            resetTimerSingle();
            startTimerSingle();
            // for remark question
            var nextstring= "next";
           remarkQuestionExit(arrayLength , nextstring);
           updateQuestion();

   }

    //strt previus Question
   function previusQuestion() {
          //collect answers by condition
          if (true) {
              var questioNumberToform=document.question_form.questionNumber.value;
              selectedAnswers(questioNumberToform);
              //remarkQuestionExit(questioNumberToform);
          }
          //previus Question start
          var questionNumberGetToSet = document.getElementById("questionNumberSet").innerText;
          var questionText='';
          var optionsArray='';
          var arrayLength=parseInt(questionNumberGetToSet) - 1 ;
          for (i in memoryStorage.questions) {
            if (i== arrayLength && i>=0) {
              optionsArray=memoryStorage.questions[i].options;
              answerType=memoryStorage.questions[i].answerType;
              answersArray=memoryStorage.questions[i].answers;
              subjectId=memoryStorage.questions[i].subjectId;
              questionId=memoryStorage.questions[i].id;

              questionText +='<form name="question_form">';
              questionText +='<input class="display_none" type="text" name="questionNumber" value="'+questionId+'">';
              questionText +='</form>';
              questionText +='<button class="btn btn-info btn-sm question_button" ><span>';
              //questionText +=parseInt(i) + 1;
              questionSerial=parseInt(i) + 1;
              questionSerial=questionSerial <10 ? '0'+questionSerial:questionSerial;
              questionText +=questionSerial;

              questionText +='</span></button>';
              questionText +=memoryStorage.questions[i].questionText;
            
            }
             
          }

          //dinamic option start

          var optionText='';
          var optionValue='';

          for (var j = 0; j < optionsArray.length; j++) {
            var letter=questionId+'_'+String.fromCharCode(97+j);
            var upperLetter=String.fromCharCode(65+j);
            optionText += '<div class="row row_margin_bottom_20">';
            optionText += '<div class="col-12">';
            optionText +='<div onclick="individualSelfChoice(\'' + letter +'\',\'' + answerType +'\')" id="'+letter+'" '+' class="for_chacked col_padding_10 before_select">';
            optionText +='<div class="container">';
            optionText +='<div class="row">';
            optionText +='<div class="col-10 col_padding_right_left_0">';
            optionText +='<div>';
            optionText +='<a  style="color:white;" class=" btn btn-secondary btn-sm question_answers">';
            optionText +='<span>'+upperLetter+'</span>';
            optionText +='</a>';
            optionText+= optionsArray[j].text;
            optionValue=optionsArray[j].value;
            optionText +='</div>';
            optionText +='</div>';
            optionText +='<div class="multiAns col-2 col_padding_right_left_0">';
            optionText +='<input class="answer_select" type="'+answerType+'" '+' name="inputData" value="'+optionValue+'">';
            optionText +='</div>'; //col-2 closs
            optionText +='</div>'; //row closs
            optionText +='</div>'; //container closs
            optionText +='</div>';
            optionText +='</div>'; //collumn-12 closs
            optionText +='</div>'; //row closs

          }
          //dinamic option closs

          //for active use jquer
            if (arrayLength==0) {
            $("#1,#2,#3,#4,#5,#6,#7,#8,#9").removeClass("btn btn-primary");
            $("#0").removeClass("btn btn-light");
            $("#0").addClass("btn btn-primary");
            $("#1,#2,#3,#4,#5,#6,#7,#8,#9").addClass("btn btn-light");
            $("#PreviousQuestionButton").addClass("display_none");
            }
            else if (arrayLength==1) {
            $("#0,#2,#3,#4,#5,#6,#7,#8,#9").removeClass("btn btn-primary");
            $("#1").removeClass("btn btn-light");
            $("#1").addClass("btn btn-primary");
            $("#0,#2,#3,#4,#5,#6,#7,#8,#9").addClass("btn btn-light");
            $("#PreviousQuestionButton").removeClass("display_none");
            }
            else if (arrayLength==2) {
            $("#0,#1,#3,#4,#5,#6,#7,#8,#9").removeClass("btn btn-primary");
            $("#2").removeClass("btn btn-light");
            $("#2").addClass("btn btn-primary");
            $("#0,#1,#3,#4,#5,#6,#7,#8,#9").addClass("btn btn-light");
            }
            else if (arrayLength==3) {
            $("#0,#2,#1,#4,#5,#6,#7,#8,#9").removeClass("btn btn-primary");
            $("#3").removeClass("btn btn-light");
            $("#3").addClass("btn btn-primary");
            $("#0,#2,#1,#4,#5,#6,#7,#8,#9").addClass("btn btn-light");
            }
            else if (arrayLength==4) {
            $("#0,#2,#3,#1,#5,#6,#7,#8,#9").removeClass("btn btn-primary");
            $("#4").removeClass("btn btn-light");
            $("#4").addClass("btn btn-primary");
            $("#0,#2,#3,#1,#5,#6,#7,#8,#9").addClass("btn btn-light");
            }
            else if (arrayLength==5) {
            $("#0,#2,#3,#4,#1,#6,#7,#8,#9").removeClass("btn btn-primary");
            $("#5").removeClass("btn btn-light");
            $("#5").addClass("btn btn-primary");
            $("#0,#2,#3,#4,#1,#6,#7,#8,#9").addClass("btn btn-light");
            }
            else if (arrayLength==6) {
            $("#0,#2,#3,#4,#5,#1,#7,#8,#9").removeClass("btn btn-primary");
            $("#6").removeClass("btn btn-light");
            $("#6").addClass("btn btn-primary");
            $("#0,#2,#3,#4,#5,#1,#7,#8,#9").addClass("btn btn-light");
            }
            else if (arrayLength==7) {
            $("#0,#2,#3,#4,#5,#6,#1,#8,#9").removeClass("btn btn-primary");
            $("#7").removeClass("btn btn-light");
            $("#7").addClass("btn btn-primary");
            $("#0,#2,#3,#4,#5,#6,#1,#8,#9").addClass("btn btn-light");
            }
            else if (arrayLength==8) {
            $("#0,#2,#3,#4,#5,#6,#7,#1,#9").removeClass("btn btn-primary");
            $("#8").removeClass("btn btn-light");
            $("#8").addClass("btn btn-primary");
            $("#0,#2,#3,#4,#5,#6,#7,#1,#9").addClass("btn btn-light");
            $("#nextQuestionButton").removeClass("display_none");
            }
            else if (arrayLength==9) {
            $("#0,#2,#3,#4,#5,#6,#7,#8,#1").removeClass("btn btn-primary");
            $("#9").removeClass("btn btn-light");
            $("#9").addClass("btn btn-primary");
            $("#0,#2,#3,#4,#5,#6,#7,#8,#1").addClass("btn btn-light");
            $("#nextQuestionButton").addClass("display_none");
            }

          //for active use jquery closs
          if (arrayLength>=0) {
            document.getElementById("questionHead").innerHTML ='<p>'+questionText+'</p>';
            document.getElementById("multipleChoice").innerHTML = optionText+'<br>';
            document.getElementById("questionNumberSet").innerHTML = arrayLength;
          }
          //time restart
          resetTimerSingle();
          startTimerSingle();
          var questionString="previus";
          remarkQuestionExit(arrayLength , questionString);
          //console.log(arrayLength);
          updateQuestion();
          
   }

   //strt individual Question
   function individualQuestion(single) {

          //collect answers by condition
          if (true) {
            var questioNumberToform=document.question_form.questionNumber.value;
            selectedAnswers(questioNumberToform);
            
          }
          var questionText='';
          var optionsArray='';
          var arrayLength=parseInt(single);
          for (i in memoryStorage.questions) {
            if (i== arrayLength) {
              optionsArray=memoryStorage.questions[i].options;
              answerType=memoryStorage.questions[i].answerType;
              answersArray=memoryStorage.questions[i].answers;
              subjectId=memoryStorage.questions[i].subjectId;
              questionId=memoryStorage.questions[i].id;
              questionText +='<form name="question_form">';
              questionText +='<input class="display_none" type="text" name="questionNumber" value="'+questionId+'">';
              questionText +='</form>';
              questionText +='<button class="btn btn-info btn-sm question_button" ><span>';
              questionSerial=parseInt(i) + 1;
              questionSerial=questionSerial <10 ? '0'+questionSerial:questionSerial;
              questionText +=questionSerial;
              questionText +='</span></button>';
              questionText +=memoryStorage.questions[i].questionText;
            }
             
          }

          //dinamic option start
          var optionText='';
          var optionValue='';
          for (var j = 0; j < optionsArray.length; j++) {
            var letter=questionId+'_'+String.fromCharCode(97+j);
            var upperLetter=String.fromCharCode(65+j);
            optionValue=optionsArray[j].value;
            optionText += '<div class="row row_margin_bottom_20">';
            optionText += '<div class="col-12">';
            optionText +='<div onclick="individualSelfChoice(\'' + letter +'\',\'' + answerType +'\')" id="'+letter+'" '+' class="for_chacked col_padding_10 before_select">';
            optionText +='<div class="container">';
            optionText +='<div class="row">';
            optionText +='<div class="col-10 col_padding_right_left_0">';
            optionText +='<div>';
            optionText +='<a  style="color:white;" class=" btn btn-secondary btn-sm question_answers">';
            optionText +='<span>'+upperLetter+'</span>';
            optionText +='</a>';
            optionText+= optionsArray[j].text;
            optionText +='</div>';
            optionText +='</div>';
            optionText +='<div class="multiAns col-2 col_padding_right_left_0">';
            optionText +='<input class="answer_select" type="'+answerType+'" '+' name="inputData" value="'+optionValue+'">';
            optionText +='</div>'; //col-2 closs
            optionText +='</div>'; //row closs
            optionText +='</div>'; //container closs
            optionText +='</div>';
            optionText +='</div>'; //collumn-12 closs
            optionText +='</div>'; //row closs

          }
            //for active use jquer
            if (arrayLength==0) {
            $("#1,#2,#3,#4,#5,#6,#7,#8,#9").removeClass("btn btn-primary");
            $("#0").removeClass("btn btn-light");
            $("#0").addClass("btn btn-primary");
            $("#1,#2,#3,#4,#5,#6,#7,#8,#9").addClass("btn btn-light");
            $("#PreviousQuestionButton").addClass("display_none");
            $("#nextQuestionButton").removeClass("display_none");
            }
            else if (arrayLength==1) {
            $("#0,#2,#3,#4,#5,#6,#7,#8,#9").removeClass("btn btn-primary");
            $("#1").removeClass("btn btn-light");
            $("#1").addClass("btn btn-primary");
            $("#0,#2,#3,#4,#5,#6,#7,#8,#9").addClass("btn btn-light");
            $("#PreviousQuestionButton,#nextQuestionButton").removeClass("display_none");
            }
            else if (arrayLength==2) {
            $("#0,#1,#3,#4,#5,#6,#7,#8,#9").removeClass("btn btn-primary");
            $("#2").removeClass("btn btn-light");
            $("#2").addClass("btn btn-primary");
            $("#0,#1,#3,#4,#5,#6,#7,#8,#9").addClass("btn btn-light");
            //$("#PreviousQuestionButton").addClass("display_none");
            $("#nextQuestionButton ,#PreviousQuestionButton").removeClass("display_none");
            }
            else if (arrayLength==3) {
            $("#0,#2,#1,#4,#5,#6,#7,#8,#9").removeClass("btn btn-primary");
            $("#3").removeClass("btn btn-light");
            $("#3").addClass("btn btn-primary");
            $("#0,#2,#1,#4,#5,#6,#7,#8,#9").addClass("btn btn-light");
            $("#PreviousQuestionButton,#nextQuestionButton").removeClass("display_none");
            }
            else if (arrayLength==4) {
            $("#0,#2,#3,#1,#5,#6,#7,#8,#9").removeClass("btn btn-primary");
            $("#4").removeClass("btn btn-light");
            $("#4").addClass("btn btn-primary");
            $("#0,#2,#3,#1,#5,#6,#7,#8,#9").addClass("btn btn-light");
            $("#PreviousQuestionButton,#nextQuestionButton").removeClass("display_none");
            }
            else if (arrayLength==5) {
            $("#0,#2,#3,#4,#1,#6,#7,#8,#9").removeClass("btn btn-primary");
            $("#5").removeClass("btn btn-light");
            $("#5").addClass("btn btn-primary");
            $("#0,#2,#3,#4,#1,#6,#7,#8,#9").addClass("btn btn-light");
            $("#PreviousQuestionButton,#nextQuestionButton").removeClass("display_none");
            }
            else if (arrayLength==6) {
            $("#0,#2,#3,#4,#5,#1,#7,#8,#9").removeClass("btn btn-primary");
            $("#6").removeClass("btn btn-light");
            $("#6").addClass("btn btn-primary");
            $("#0,#2,#3,#4,#5,#1,#7,#8,#9").addClass("btn btn-light");
            $("#PreviousQuestionButton,#nextQuestionButton").removeClass("display_none");
            }
            else if (arrayLength==7) {
            $("#0,#2,#3,#4,#5,#6,#1,#8,#9").removeClass("btn btn-primary");
            $("#7").removeClass("btn btn-light");
            $("#7").addClass("btn btn-primary");
            $("#0,#2,#3,#4,#5,#6,#1,#8,#9").addClass("btn btn-light");
            $("#PreviousQuestionButton,#nextQuestionButton").removeClass("display_none");
            }
            else if (arrayLength==8) {
            $("#0,#2,#3,#4,#5,#6,#7,#1,#9").removeClass("btn btn-primary");
            $("#8").removeClass("btn btn-light");
            $("#8").addClass("btn btn-primary");
            $("#0,#2,#3,#4,#5,#6,#7,#1,#9").addClass("btn btn-light");
            $("#PreviousQuestionButton,#nextQuestionButton").removeClass("display_none");
            }
            else if (arrayLength==9) {
            $("#0,#2,#3,#4,#5,#6,#7,#8,#1").removeClass("btn btn-primary");
            $("#9").removeClass("btn btn-light");
            $("#9").addClass("btn btn-primary");
            $("#0,#2,#3,#4,#5,#6,#7,#8,#1").addClass("btn btn-light");
            $("#nextQuestionButton").addClass("display_none");
            $("#PreviousQuestionButton").removeClass("display_none");
            }

          //for active use jquery closs
          if (arrayLength>=0) {
            document.getElementById("questionHead").innerHTML ='<p>'+questionText+'</p>';
            document.getElementById("multipleChoice").innerHTML = optionText+'<br>';
            document.getElementById("questionNumberSet").innerHTML = arrayLength;
          }
          //time restart
          resetTimerSingle();
          startTimerSingle();
          var individual="individual";
          remarkQuestionExit(arrayLength, individual);
          //console.log(arrayLength);
          updateQuestion();
   }



 //review question
  function remarkQuestion() {
    var questioNumberToform=document.question_form.questionNumber.value;
    var questionNumberGetToSet = document.getElementById("questionNumberSet").innerText;
    var AllQuestions=localStorage.getItem("questions");
    var dataParse=JSON.parse(AllQuestions);
    var currentQuestion = _.find(dataParse,{id:questioNumberToform});
        currentQuestion.review=true;
    localStorage.setItem("questions",JSON.stringify(dataParse));

    var questionSelectorId=questionNumberGetToSet - 1;
   // $("#0").removeClass("btn btn-outline-primary");
    $("#"+ questionNumberGetToSet).addClass("text_color_red");
    nextQuestion();
  }

  function remarkQuestionExit(questionNumberGetToSet, questionString){
    var questioNumberToform=document.question_form.questionNumber.value;
    var questionNumberGetToSet = document.getElementById("questionNumberSet").innerText;
    var AllQuestions=localStorage.getItem("questions");
    var dataParse=JSON.parse(AllQuestions);
    //var currentQuestion = _.find(dataParse,{id:'2',id:'2'});
    var currentQuestion = _.find(dataParse,{id:questioNumberToform});
    var reviewValue=currentQuestion.review;
    var reviewTest=reviewValue==true ? reviewValue:false;
    var SelectorIdNext=questionNumberGetToSet;
     if (reviewTest) {
      if (questionString=="next") {
        $("#" + SelectorIdNext).removeClass("text_color_red");
          //console.log(reviewTest);
      } else if(questionString=="previus" || questionString=="individual"){
        $("#" + questionNumberGetToSet).removeClass("text_color_red");
      }
      
     }
     // console.log(reviewTest);
     // console.log(questionNumber);

     currentQuestion.review=false;
    localStorage.setItem("questions",JSON.stringify(dataParse));
  }

    //submit fuction
    function submitAnswers() {
            //collect answers by condition

            if (true) {
                var questioNumberToform=document.question_form.questionNumber.value;
                selectedAnswers(questioNumberToform);
              //window.location.replace("final/third?userId="+response.authResponse.userID);
              //window.location.replace("scorecard.html");
              dataStoreIntoHistory()
            }

            
    }



    //this function is to js multiple  choice loop
   function individualSelfChoice(optionId,answerType){
          if (answerType=='Radio') {
            $("#"+optionId).toggleClass("before_select");
            $("#"+optionId).toggleClass("after_select");
            $(".after_select").not("#"+optionId).removeClass("after_select").addClass("before_select");
 
            if (! $("#"+optionId).find("input").prop("checked")) {
                  $(".multiAns").find("input").removeAttr("checked","checked");
                  $("#"+optionId).find("input").attr("checked","checked");
            }else if ($("#"+optionId).find("input").prop("checked")){
                  $(".multiAns").find("input").removeAttr("checked","checked");
                  $("#"+optionId).find("input").removeAttr("checked","checked");
            }
        }
        else if (answerType=='Checkbox') {
            $("#"+optionId).addClass("after_select");
            $("#"+optionId).toggleClass("before_select");

            if ($("#"+optionId).find("input").prop("checked")) {
              $("#"+optionId).find("input").removeAttr("checked","checked");
            }else{
              $("#"+optionId).find("input").attr("checked","checked");
            }
          }
    }

    //select test when previus queston again update answres
    function updateQuestion() {
      //for privius selected question
          var questioNumberToform=document.question_form.questionNumber.value;
          var AllQuestions=localStorage.getItem("questions");
          var dataParse=JSON.parse(AllQuestions);
          var currentQuestion = _.find(dataParse,{id:questioNumberToform});
          var selectedAns=currentQuestion.selected;
          if (currentQuestion.selected) {
            if (selectedAns.length>0) {
              for (var i = 0; i < selectedAns.length; i++) {
                $("#"+selectedAns[i]).addClass("after_select");
                $("#"+selectedAns[i]).removeClass("before_select");
                $("#"+selectedAns[i]).find("input").attr("checked","checked");
                //$("#"+selectedAns[i]).find("input").attr("value","checked");
              }

            }
              
          }
    }

//for start function default
    // var startExam=confirm("Are You Start Test ?");
    // if (startExam) {
       startQuestion();
    // }else{
    //   window.location.replace("index.html");
    // }





    ///============== answers ============


//toQestionAnswersArray come from every function when go next/previus/serial question

  function selectedAnswers(questioNumberToform) {
      var increaseLetter=0;
      var rightAnswerTest=0;
      var pushSuccess=false;
      var questioNumber= questioNumberToform;
      //var questions=memoryStorage.questions
      var AllQuestions=localStorage.getItem("questions");
      var dataParse=JSON.parse(AllQuestions);
      //var currentQuestion = _.find(dataParse,{id:'2',id:'2'});
      var currentQuestion = _.find(dataParse,{id:questioNumber});
         currentQuestion.answerStatus = false;
         currentQuestion.selected = [];

      document.quiz_answer_form.inputData.forEach(function(inputData){

//for option uniqu id create,whene update question answers then  it use
        var checkedTest=inputData.checked;
        if (checkedTest) {
          var createUniqueOptionId=questioNumberToform+'_'+String.fromCharCode(97+increaseLetter);
           pushSuccess=currentQuestion.selected.push(createUniqueOptionId);
        }
            increaseLetter+=1;


// finally answer test right or wrong
        var selectedAnswerFromUser=inputData.value;
        for (var j = 0; j < answersArray.length; j++) {
            var rightAnswerFromDatabase=answersArray[j];
            if(checkedTest && rightAnswerFromDatabase==selectedAnswerFromUser){
              rightAnswerTest+=1;
              
            }

        }
    });

// if answer is wright  or wrong then whats the work
      if (answersArray.length==rightAnswerTest) {
        currentQuestion.answerStatus = true;
      }
        localStorage.setItem("questions",JSON.stringify(dataParse));
        //this fuction call to time.js file
        getShowTimeSingle();


  }



  //after solution database create

    // var questions = [{
    //     "answerStatus": false
    //     "answerType": "Radio"
    //     "answers": ["1"]
    //     "id": "1"
    //     "options": [
    //     {"text": "console.log('Hello...')", "value": "1"}, {"text":"console.log('Hello...'", value: "2"},…]
    //     "questionText": "Which is valid javascript statement?"
    //     "review": true
    //     "reviewTime": 113000
    //     "score": 5
    //     "selected": []
    //     "subjectId": "1"
    //     "viewTime": "01:53"
    // }];





//question insert function to database

    // function questionsInsert() {

    //     var jsonResponse = {
    //             "subjectId":"1",
    //             "id":"1",
    //             "questionText": "Which is valid javascript statement?",
    //             "options":[
    //                 {"text":"mohib","value":"rahman"},
    //                 {"text":"rony","value":"ahmed"},
    //                 {"text":"akash","value":"khan"},
    //                 {"text":"kiron","value":"ahmed"}
    //             ],
    //             "answers":["Your"],
    //             "answerType":"my"
            
    //     };


    // var questionsFormLocalstorage=localStorage.getItem("questions");
    // var dataParse=JSON.parse(questionsFormLocalstorage);
    // var newData=dataParse.push(jsonResponse);
    // localStorage.setItem("questions",JSON.stringify(dataParse));
    // }




