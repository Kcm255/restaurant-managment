// Show the appropriate form based on the selected user type
function showForm(userType) {
   if (userType === 'employee') {
       document.getElementById('employee-form').style.display = 'block';
       document.getElementById('customer-form').style.display = 'none';
   } else if (userType === 'customer') {
       document.getElementById('employee-form').style.display = 'none';
       document.getElementById('customer-form').style.display = 'block';
   }
}

// Validate Employee Login
function validateEmployee() {
   const employeeID = document.getElementById('employee-id').value;
   const password = document.getElementById('employee-password').value;

   if (employeeID === '1234' && password === '1234') {
       alert('Employee Login Successful');
       window.location.href = 'employee.html'; // Redirect to Employee Page
   } 
   else {
       alert('Invalid Employee ID or Password');
   }
}

// Validate Customer Login
function validateCustomer() {
   const customerName = document.getElementById('customer-name').value.trim();
   const numberOfCustomers = document.getElementById('customer-number').value;

   if (customerName === '' || numberOfCustomers === '') {
       alert('Please fill in all fields');
   } else if (numberOfCustomers <= 0) {
       alert('Number of Customers must be greater than 0');
   } else {
       alert(`Welcome ${customerName}, booking for ${numberOfCustomers} confirmed.`);
       window.location.href = 'customer_information.html'; // Redirect to Customer Page
   }
}

function flipCard() {
    const container = document.getElementById('flip-container');
    container.classList.toggle('flipped'); // Toggle the 'flipped' class
}
