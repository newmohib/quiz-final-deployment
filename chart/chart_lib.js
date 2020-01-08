
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
// For a pie chart
// var myPieChart = new Chart(ctx,{
//     type: 'pie',
//     data: data,
//     options: options
// });

// For a pie chart
// this variable use to scorecard.js file

// var chartData=scoreArray;
// var myPieChart = new Chart(ctx,{
//     type: 'bar',
//        data: {
//         //These labels appear in the legend and in the tooltips when hovering different arcs
//         labels: ["1", "2", "3", "4", "5", "6","7", "8", "9", "10"],
//         datasets: [{
//             label: 'Individual Question',
//             data: chartData,
//             backgroundColor: [
//                 'rgba(75, 192, 192, 0.4)',
//                 'rgba(153, 102, 255, 0.4)',
//                 'rgba(255, 159, 64, 0.4)',
//                 'rgba(255, 99, 132, 0.4)',
//                 'rgba(54, 162, 235, 0.4)',
//                 'rgba(255, 206, 86, 0.4)',
//                 'rgba(255, 159, 64, 0.4)',
//                 'rgba(75, 192, 192, 0.4)',
//                 'rgba(255, 99, 132, 0.4)',
//                 'rgba(255, 206, 86, 0.4)',
//             ],
//             borderColor: [
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)',
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(255, 159, 64, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(255, 159, 64, 1)',
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//     }
// });



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
//var ctx = document.getElementById("indivitufal_score").getContext('2d');



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



// new Chart(document.getElementById("doughnut-chart"), {
//     type: 'doughnut',
//     data: {
//       labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
//       datasets: [
//         {
//           label: "Population (millions)",
//           backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
//           data: [2478,5267,734,784,433]
//         }
//       ]
//     },
//     options: {
//       title: {
//         display: true,
//         text: 'Predicted world population (millions) in 2050'
//       }
//     }
// });


// new Chart(document.getElementById("indivitufal_score"), {
//     type: 'doughnut',
//     data: {
//       labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
//       datasets: [
//         {
//           label: "Population (millions)",
//           backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
//           data: [2478,5267,734,784,433]
//         }
//       ]
//     },
//     options: {
//       title: {
//         display: true,
//         text: 'Predicted world population (millions) in 2050'
//       }
//     }
// });