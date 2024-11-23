const form = document.getElementById('customer-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevents the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const persons = document.getElementById('persons').value;
    const time = document.getElementById('time').value;

    // Create a customer object
    const customerData = {
        name,
        phone,
        persons,
        time
    };

    try {
        // Send data to the backend API
        const response = await fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(customerData),
        });

        const result = await response.text();
        alert(result); // Display response from the server
        form.reset(); // Reset the form fields
    } catch (err) {
        alert('Error submitting customer information');
        console.error(err);
    }
});
