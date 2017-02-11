
$(document).ready(function() {
  //An empty array.
  employeeArray = [];
  //Creating the on.click function.
  $('#formButton').on('click', function(){
    //Store my inputs into a variable for later use
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var idNumber = $('#idNumber').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();
    //Adds new employee data to the table on submit.
    $('#employeeTable').append('<tr><th>' + firstName + '</th><th>' +
    lastName + '</th><th>' + idNumber + '</th><th>' + jobTitle + '</th><th>' +
    annualSalary + '</th><th><button type="button" class = "deleteButton" name="button">Delete</button></th></tr>');
    //object constructor
    function Employee(inFirstName, inLastName, inIDNumber, inJobTitle, inAnnualSalary) {
      this.firstName = firstName,
      this.lastName = lastName,
      this.idNumber = idNumber,
      this.jobTitle = jobTitle,
      this.annualSalary = annualSalary
    }
    // //Creates an object from the input data
    var employeeData = new Employee(firstName, lastName, idNumber, jobTitle, annualSalary)
    //pushes object onto the array.
    employeeArray.push(employeeData);
  }); //ends onclick submit event listener

  //submit onclick listener end


  //Removes employee data from the table if the delete button is pressed.
  $('#employeeTable').on('click', '.deleteButton', function(){
    $(this).parent().parent().remove();

    //find out which index has been chosen for deletion
    //remove the item.
  }); //ends onclick delete button event listener
}); //ends doc.ready event listener





  //set and empty array?
//
//
//   //make an empty shell object
//   var employeeArray [];
//   var employeeShell {};
//
//   //Make the new object that is based on the employee shell. This new object takes in the information
//   //from a PARTICULAR INPUT and stores it.
//
//   function Employee(firstName, lastName, idNumber, jobTitle, annualSalary){
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.idNumber = idNumber,
//     this.jobTitle = jobTitle,
//     this.annualSalary = annualSalary,
//   });
//
//   var employeeShell = new Employee(this.firstName, this.lastName, this.idNumber, this.jobTitle, this.annualSalary);
//
//   for (var i = 0; i < array.length; i++) {
//     array[i]
//   }
//
// //pushing the array
// // employeeArray.push(Employee);
//
//
// //   //Store input into an object
// //   //var employeeObject = {}; //creating an empty object to store data in
// //   //how to push input to this object?
//
// //   function formsToObj(){
// //       var forms = [];
// //       $('employeeForm').each(function(i){
// //           forms[i] = {};
// //           $(this).children('input,textarea,select').each(function(){
// //               forms[i][$(this).attr('name')] = $(this).val();
// //           });
// //       });
// //       return forms;
// //   }
// //   //
//
// //   //
// //   //   var employeeArray = []; //creating an empty Array
// //   //
// //
// //
// // $()
// //
// // });
// //
// //
// // Get data from input,
// // Store input in an object,
// // Store object in an array,
// // Push object to Employee List,
// //
// // write a for loop to go through the array and add
// // annualSalary/12.
// //
// // //create a function that passes an array index
// //
// empty array
//
// has submit been pressed?
// if yes
// Create new object based on input
// push object onto array
// end function
//
// has delete been pressed
// if yes
// delete selected item from the DOM
// delete selected item from array
