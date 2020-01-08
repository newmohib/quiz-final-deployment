
	window.memoryStorage = {};

  // var setToStore = function(key,value){
  //   window.memoryStorage[key] = value;
  //   localStorage.setItem(key,JSON.stringify(value));
  // }

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

            optionValue=optionsArray[j].value;
            var letter=questionId+'_'+String.fromCharCode(97+j);
            var upperLetter=String.fromCharCode(65+j);
            var optionsButtonId=upperLetter+'_'+optionValue;
           optionText += '<div  class="row row_margin_bottom_20">';
           optionText += '<div  class="col-12">';
           optionText +='<div id="'+letter+'" '+' class="for_chacked col_padding_10 before_select">';
           optionText +='<div class="container">';
           optionText +='<div class="row">';
           optionText +='<div class="col-10 col_padding_right_left_0">';
           optionText +='<div>';
           optionText +='<a id="'+optionsButtonId+'" '+'  style="color:white;" class=" btn btn-danger btn-sm question_answers">';

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

         
            $("#0").removeClass("btn btn-light");
            $("#0").addClass("btn btn-primary");
            $("#PreviousQuestionButton").addClass("display_none");
            $("#nextQuestionButton").removeClass("display_none");

          document.getElementById("questionHead").innerHTML ='<p>'+questionText+'</p>';
          document.getElementById("multipleChoice").innerHTML = optionText+'<br>';
          document.getElementById("questionNumberSet").innerHTML = arrayLength;
          
          //selected answers here
          updateQuestion();
   }


//start next Question
   function nextQuestion() {
      
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
                optionValue=optionsArray[j].value;
            var letter=questionId+'_'+String.fromCharCode(97+j);
            var upperLetter=String.fromCharCode(65+j);
            var optionsButtonId=upperLetter+'_'+optionValue;
           optionText += '<div class="row row_margin_bottom_20">';
           optionText += '<div class="col-12">';
           optionText +='<div id="'+letter+'" '+' class="for_chacked col_padding_10 before_select">';
           optionText +='<div class="container">';
           optionText +='<div class="row">';
           optionText +='<div class="col-10 col_padding_right_left_0">';
           optionText +='<div>';
           optionText +='<a id="'+optionsButtonId+'" '+'  style="color:white;" class=" btn btn-danger btn-sm question_answers" >';
           
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

           // //time restart
           //  resetTimerSingle();
           //  startTimerSingle();
            // for remark question
            //var nextstring= "next";
           //remarkQuestionExit(arrayLength , nextstring);
           updateQuestion();

   }

    //strt previus Question
   function previusQuestion() {
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
                optionValue=optionsArray[j].value;
            var letter=questionId+'_'+String.fromCharCode(97+j);
            var upperLetter=String.fromCharCode(65+j);
            var optionsButtonId=upperLetter+'_'+optionValue;

            optionText += '<div class="row row_margin_bottom_20">';
            optionText += '<div class="col-12">';
            optionText +='<div id="'+letter+'" '+' class="for_chacked col_padding_10 before_select">';
            optionText +='<div class="container">';
            optionText +='<div class="row">';
            optionText +='<div class="col-10 col_padding_right_left_0">';
            optionText +='<div>';
            optionText +='<a id="'+optionsButtonId+'" '+'  style="color:white;" class=" btn btn-danger btn-sm question_answers">';
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
          // resetTimerSingle();
          // startTimerSingle();
          // var questionString="previus";
          // remarkQuestionExit(arrayLength , questionString);
          //console.log(arrayLength);
          updateQuestion();
          
        }

     //strt individual Question
     function individualQuestion(single) {

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
          // for (var k = 0; k < answersArray.length; k++) {
          //   answersArray[k]
          // }
          for (var j = 0; j < optionsArray.length; j++) {
               optionValue=optionsArray[j].value;
            var letter=questionId+'_'+String.fromCharCode(97+j);
            var upperLetter=String.fromCharCode(65+j);
            var optionsButtonId=upperLetter+'_'+optionValue;
            optionText += '<div class="row row_margin_bottom_20">';
            optionText += '<div class="col-12">';
            optionText +='<div id="'+letter+'" '+' class="for_chacked col_padding_10 before_select">';
            optionText +='<div class="container">';
            optionText +='<div class="row">';
            optionText +='<div class="col-10 col_padding_right_left_0">';
            optionText +='<div>';
            optionText +='<a id="'+optionsButtonId+'" '+' style="color:white;" class=" btn btn-danger btn-sm question_answers">';
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
          //selected answers here
          updateQuestion();
   }


    //select test when previus queston again update answres
    function updateQuestion() {
      //for privius selected question
          var questioNumberToform=document.question_form.questionNumber.value;
          var AllQuestions=localStorage.getItem("questions");
          var dataParse=JSON.parse(AllQuestions);
          var currentQuestion = _.find(dataParse,{id:questioNumberToform});
          var selectedAns=currentQuestion.selected;
          var status=currentQuestion.answerStatus;
          var totalTime=currentQuestion.viewTime;
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


            for (var k = 0; k < currentQuestion.options.length; k++) {
              var optionsVlaue=currentQuestion.options[k].value;
              var upperLetterOption=String.fromCharCode(65+k);
              var optionVlaueSelector=upperLetterOption+'_'+optionsVlaue;

                for (var j = 0; j < currentQuestion.answers.length; j++) {
                  currentQuestion[j];
                  var answers=currentQuestion.answers[j];
                  var optionButtonSelector=upperLetterOption+'_'+answers;

                    if (optionButtonSelector==optionVlaueSelector) {
                    $("#"+optionVlaueSelector).removeClass("btn btn-danger");
                    $("#"+optionVlaueSelector).addClass("btn btn-success");
                    }
                }
            }

            if (status==true) {
              $("#statusButton").addClass("status_color_green");
              $("#statusButton").removeClass("status_color_tomato");
            } else if (status==false) {
              $("#statusButton").addClass("status_color_tomato");
              $("#statusButton").removeClass("status_color_green");
            }
              document.querySelector('#viewTime').innerHTML= 'Times : '+ ' ' + totalTime ;
              document.querySelector('#statusValue').innerHTML=status;
    }

       //for start function default
       startQuestion();



