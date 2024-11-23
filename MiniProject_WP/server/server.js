const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
const DB_URI = 'mongodb+srv://jash87191:RestProj123@cluster0.ss4bv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'; // Replace with your MongoDB URI
mongoose.connect(DB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Define a Schema and Model
const userSchema = new mongoose.Schema({
   name: String,
    phone: Number,
    persons: Number,
    time: String
});

const User = mongoose.model('User', userSchema);
// Add a new user
app.post('/users', async (req, res) => {
   const { name, phone, persons, time } = req.body;
   try {
       const newCustomer = new User({ name, phone, persons, time });
       await newCustomer.save();
       console.log(newCustomer);
       res.status(200).send('Customer information saved successfully');
   } catch (err) {
       res.status(500).send('Error saving customer information');
   }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
