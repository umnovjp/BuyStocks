// var scheduleContent = document.getElementById('schedule'); var gameId; var startValue = '2021';
// var formattedStart; var formattedEnd
var startYear; var endYear
// lines below will

function getStartValue() {  
var endValue = document.getElementById('datepickerStart').value;
var startValue = document.getElementById('datepickerStart').value; 
  console.log(startValue, endValue)
  startValueArray = startValue.split('-');
  endValueArray = endValue.split('-');
  console.log(startValueArray, endValueArray)
  var requestURL = 'https://data.sec.gov/submissions/CIK0001517228.json'// + formatted;
  fetch(requestURL, {"method": "GET", "headers": {}
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
     console.log(data.filings); var dates = data.filings.recent.filingDate; const filings = [];
     for (i = 0; i < dates.length; i++) {startDateArray = startValue.split('-'); endDateArray = endValue.split('-')
     startYear = startDateArray[0]; endYear = endDateArray[0]; startMonth = startDateArray[1]; endMonth = endDateArray[1]; startDate = startDateArray[2]; endDate = endDateArray[2]
     // if loop will be here     
     if ((startYear >= startValueArray[0])&&(startMonth >=startValueArray[1])&&(startDate >=startValueArray[2])&&(endYear <=endValueArray[0])&&(endMonth<=endValueArray[1])&&(endDate<=endValueArray[2]))
     {filings.push(i)}
     }
     console.log(filings)
    } // end second .then from getinputvalue
    );
} // end getStartValue function
