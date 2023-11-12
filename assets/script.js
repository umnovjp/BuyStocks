var scheduleContent = document.getElementById('schedule'); var gameId; var inputVal = '2021';

// lines below will allow user to search by year
function getInputValue() {
  var inputVal = document.getElementById('datepicker').value; var date = inputVal.split('/');
  var formatted = date[2] + '-' + date[0] + '-' + date[1]; console.log(formatted)
  var requestURL = 'https://data.sec.gov/submissions/CIK0001517228.json'// + formatted;
  fetch(requestURL, {
    "method": "GET", "headers": {}
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
     console.log(data.filings);
    } // end second .then from getinputvalue
    );
} // end getInput Value function $65k at 4.50% on 3/27
