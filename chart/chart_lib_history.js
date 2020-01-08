

  function historyChart() {
      
   
var ctx = document.getElementById("acuracy").getContext('2d');

// this variable use to scorecard.js file
var dataArray=[totalCorrects, totalIncorrect, totalUnanswered]
var myPieChart = new Chart(ctx,{
    type: 'doughnut',
       data: {
        //These labels appear in the legend and in the tooltips when hovering different arcs
        labels: ["Total Correct", "Total Incorrect", "Total Unanswered"],
        datasets: [{
            label: ' Votes',
            data: dataArray,
            backgroundColor: [
                'rgba(255, 99, 132, 0.4)',
                'rgba(54, 162, 235, 0.4)',
                'rgba(255, 206, 86, 0.4)'
                
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
                
            ],
            borderWidth: .10
        }]
    },
    options: {
    }
});




var ctx = document.getElementById("indivitufal_score").getContext('2d');


//verticle
var headLineLabelData="Individual Question";
var labelsData=["1","2","3","4","5","6","7","8","9","10"];
var dataValue= scoreArray;
var backgroundColorData= ["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)","rgba(255, 205, 86, 0.2)","rgba(201, 203, 207, 0.2)","rgba(75, 192, 192, 0.2)"];
var borderColorData= ["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)","rgba(255, 205, 86, 0.2)","rgb(201, 203, 207)","rgb(75, 192, 192)"];
var borderWidthData=1;
var hoverBorderWidthData=1.25;
var hoverBackgroundColorData= ["rgba(255, 99, 132, 0.3)","rgba(255, 159, 64, 0.3)","rgba(255, 205, 86, 0.3)","rgba(75, 192, 192, 0.3)","rgba(54, 162, 235, 0.3)","rgba(153, 102, 255, 0.3)","rgba(201, 203, 207, 0.3)","rgba(255, 159, 64, 0.3)","rgba(255, 205, 86, 0.3)","rgba(201, 203, 207, 0.3)"];
var hoverBorderColorData= ["rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)","rgb(255, 255, 255)"];




new Chart(document.getElementById("indivitufal_score"),{
  type:"bar",
  data:{
    labels:labelsData,
    datasets:[{
      label:headLineLabelData,
      data:dataValue,
      fill:false,
      backgroundColor:backgroundColorData,
      borderColor:borderColorData,
      borderWidth:1,
      hoverBorderWidth:borderWidthData,
      //name:[],
      hoverBackgroundColor:hoverBackgroundColorData,
      hoverBorderColor:hoverBorderColorData,
    }]
    },
  options:{
    scales:{
      yAxes:[{
        ticks:{
          beginAtZero:true

        }
      }]
    }
  }});



}