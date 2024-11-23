// Example customer data (this would be the output of the customer_information)
const customerInformation = [
   { name: 'John Doe', time: '7:00 PM' },
   { name: 'Jane Smith', time: '8:30 PM' },
   { name: 'Emily Clark', time: '9:15 PM' }
];

document.addEventListener('DOMContentLoaded', function() {
   // Render the table with customer data
   renderBookings();
});

function renderBookings() {
   const tableBody = document.getElementById('booking-table-body');
   tableBody.innerHTML = ''; // Clear existing rows

   customerInformation.forEach((booking, index) => {
       const row = document.createElement('tr');

       row.innerHTML = `
           <td>${booking.name}</td>
           <td>${booking.time}</td>
           <td>
               <button class="edit-btn" onclick="editBooking(${index})">Edit</button>
               <button class="delete-btn" onclick="deleteBooking(${index})">Delete</button>
           </td>
       `;
       
       tableBody.appendChild(row);
   });
}

function editBooking(index) {
   const booking = customerInformation[index];
   
   const newName = prompt('Edit Customer Name:', booking.name);
   const newTime = prompt('Edit Booking Time:', booking.time);

   if (newName && newTime) {
       customerInformation[index] = { name: newName, time: newTime };
       renderBookings();
   }
}

function deleteBooking(index) {
   if (confirm("Are you sure you want to delete this booking?")) {
       customerInformation.splice(index, 1); // Remove the booking
       renderBookings();
   }
}
