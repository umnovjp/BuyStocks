// var scheduleContent = document.getElementById('schedule'); var gameId; var startValue = '2021';
// var formattedStart; var formattedEnd
var startYear; var endYear
// lines below will

function getStartValue() {  
var endValue = document.getElementById('datepickerStart').value; // var endDate = endValue.split('/');
var startValue = document.getElementById('datepickerStart').value; // var startDate =startValue.split('/');
// var formattedStart = startDate[2] + '-' + startDate[0] + '-' + startDate[1];
//   var formattedEnd = endDate[2] + '-' + endDate[0] + '-' + endDate[1]; 
  console.log(startValue, endValue)
  var requestURL = 'https://data.sec.gov/submissions/CIK0001517228.json'// + formatted;
  fetch(requestURL, {
    "method": "GET", "headers": {}
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
     console.log(data.filings); var dates = data.filings.recent.filingDate
     for (i = 0; i < dates.length/100; i++) {startDateArray = startValue.split('-'); endDateArray = endValue.split('-')
     startYear = startDateArray[0]; endYear = endDateArray[0]; startMonth = startDateArray[1]; endMonth = endDateArray[1]; startDate = startDateArray[2]; endDate = endDateArray[2]
     // if loop here
     console.log(startYear)}
    } // end second .then from getinputvalue
    );
} // end getStartValue function
