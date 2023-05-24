$(document).ready(function() {
    // Event listener for the registration form submission
    $("#registrationForm").submit(function(event) {
      event.preventDefault();
  
      // Get form values
      var name = $("#name").val();
      var email = $("#email").val();
      var password = $("#password").val();
  
      // Create an object with the form data
      var userData = {
        name: name,
        email: email,
        password: password
      };
  
      // Store the data in local storage
      var userList = JSON.parse(localStorage.getItem("userList")) || [];
      userList.push(userData);
      localStorage.setItem("userList", JSON.stringify(userList));
  
      // Redirect to the data list page
      window.location.href = "data_list.html";
    });
  });
   
