//object constructor
function Employee(inFirstName, inLastName, inIDNumber, inJobTitle, inAnnualSalary) {
  this.firstName = inFirstName,
  this.lastName = inLastName,
  this.idNumber = inIDNumber,
  this.jobTitle = inJobTitle,
  this.annualSalary = parseInt(inAnnualSalary)
};
//calculates all employee's salaries and divides by 12
function calculateMonthlyExpenditure(){
  var allEmployeeSalary = 0;
  for (var i = 0; i < employeeArray.length; i++) {
    allEmployeeSalary += employeeArray[i].annualSalary;
  }
  allEmployeeSalary = allEmployeeSalary / 12;
  return allEmployeeSalary;
};

$(document).ready(function() {
  //An empty array.
  employeeArray = [];
  //Creating the on.click function.
  $('#formButton').on('click', function(){
    //Store my inputs into a variable for later use
    var firstName = $('#firstName').val().toUpperCase();
    var lastName = $('#lastName').val().toUpperCase();
    var idNumber = $('#idNumber').val().toUpperCase();
    var jobTitle = $('#jobTitle').val().toUpperCase();
    var annualSalary = $('#annualSalary').val();
    //extra functionality
    if (!$.isNumeric(annualSalary)) {
      $('#alertMessage').text('The salary you entered was not a number. Please try again.')
    } else {
    //Adds new employee data to the table on submit.
    $('#employeeTable').append('<tr><td>' + firstName + '</td><td>' +
    lastName + '</td><td>' + idNumber + '</td><td>' + jobTitle + '</td><th>' +
    annualSalary + '</th><th><button type="button" class = "deleteButton" name="button">Delete</button></th></tr>');
    // //Creates an object from the input data and the object constructor
    var employeeData = new Employee(firstName, lastName, idNumber, jobTitle, annualSalary)
    //pushes object onto the array.
    employeeArray.push(employeeData);
    //call the function and store it in a variable
    var monthlyExpenditureOutput = calculateMonthlyExpenditure();
    //Adds the result of my salary function to the DOM
    $('#totalExpenditure').children().children().last().text('Total Monthly Expenditure: ' + monthlyExpenditureOutput);
    //resets form once it's been submitted
    document.forms['myForm'].reset();
    //resets the alert message if the submit button has been pressed and there is no error in the salary value
    $('#alertMessage').text('');
  };//ends the if else
  }); //ends onclick submit event listener
  //Removes employee data from the table if the delete button is pressed.
  $('#employeeTable').on('click', '.deleteButton', function(){
    //creating a row variable
    var row = $(this).parent().parent();
    //finding the row index # so I can find the array #
    var arrayIndex = $(this).parent().parent().index('tr') - 1;
    //removing the row from the DOM
    $(row).remove();
    //splicing the object from the arrayIndex
    employeeArray.splice(arrayIndex, 1);
    //making a function to recalculate the total salary amount paid by the company each month.
    var monthlyExpenditureOutput = calculateMonthlyExpenditure();
    $('#totalExpenditure').children().children().last().text('Total Monthly Expenditure: ' + monthlyExpenditureOutput);
  }); //ends onclick delete button event listener
}); //ends doc.ready event listener

// has submit been pressed?
// if yes
// Create new object based on input
// push object onto array
// determine the total amount spent by the company based on the employees still in the array
// take that number / 12
// add the final number to the DOM

// has delete been pressed
// if yes
// delete selected item from the DOM
//dom traversal
// delete selected item from array (splice)
//find out which array index you are on?!
//determine the total amount spent by the company based on the employees still in the array
// take that number / 12
// add the final number to the DOM



//need to make a function that adds all of the arrays annualSalary/12 onto the end of monthlySalaryExpenditure div.
//needs to be checked when a new employee is added
//needs to be checked when an employee is removed

//need to put the result from the last step into the DOM
//needs to happen on new employee addition
//needs to happen on employee removal



//extra functionality
//IF the annualSalary input is not a number,
//alert with an error and do not submit.
