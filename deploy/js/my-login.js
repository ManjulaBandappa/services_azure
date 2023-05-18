$(document).ready(function() {
	$('#loginForm').submit(function(event) {
	  event.preventDefault(); // Prevent form submission
  
	  // Get the entered email and password
	  var email = $('#email').val();
	  var password = $('#password').val();
  
	  // Perform an AJAX request to validate the login credentials
	  $.ajax({
		url: 'login_valid.php', // Replace with the actual path to your server-side validation script
		method: 'POST',
		data: {
		  email: email,
		  password: password
		},
		success: function(response) {
		  if (response === 'success') {
			// Redirect to the dashboard or another page on successful login
			window.location.href = 'index1.html';
		  } else {
			// Display an error message
			$('#loginMessage').text('Invalid email or password. Please try again.');
		  }
		},
		error: function() {
		  // Display an error message
		  $('#loginMessage').text('An error occurred. Please try again later.');
		}
	  });
	});
  });
  