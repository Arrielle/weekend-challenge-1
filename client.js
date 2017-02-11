
$(document).ready(function() {
  //Store my inputs into a variable for later use


//Creating the on.click for the submit button.

$('#formButton').on('click', function(){
  var firstName = $('#firstName').val();
  var lastName = $('#lastName').val();
  var idNumber = $('#idNumber').val();
  var jobTitle = $('#jobTitle').val();
  var annualSalary = $('#annualSalary').val();
//Adds new employee data to the table.
  $('#employeeTable').append('<tr><th>' + firstName + '</th><th>' +
  lastName + '</th><th>' + idNumber + '</th><th>' + jobTitle + '</th><th>' +
  annualSalary + '</th><th><button type="button" class = "deleteButton" name="button">Delete</button></th></tr>');
  });
//Removes employee data from the table
  $('#employeeTable').on('click', '.deleteButton', function(){
    $(this).parent().parent().remove();
  });
});


//
//
//   //Store input into an object
//   //var employeeObject = {}; //creating an empty object to store data in
//   //how to push input to this object?
//
//
//
//
//   function formsToObj(){
//       var forms = [];
//       $('employeeForm').each(function(i){
//           forms[i] = {};
//           $(this).children('input,textarea,select').each(function(){
//               forms[i][$(this).attr('name')] = $(this).val();
//           });
//       });
//       return forms;
//   }
//   //
//   // var employeeObject {
//   //   firstName: firstName,
//   //   lastName: lastName,
//   //   idNumber: idNumber,
//   //   jobTitle: jobTitle,
//   //   annualSalary: annualSalary,
//   // }
//   //
//   //   var employeeArray = []; //creating an empty Array
//   //
//
//
// $()
//
// });
//
//
// Get data from input,
// Store input in an object,
// Store object in an array,
// Push object to Employee List,
//
// write a for loop to go through the array and add
// annualSalary/12.
//
// //create a function that passes an array index
//
