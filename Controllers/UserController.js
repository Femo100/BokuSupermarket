const user = require('../Models/User');
const bcrypt = require('bcryptjs');

//create a user
exports.createUser = async (req, res) => {
    try {

        //request body validation to ensure all required fields are provided
        const { name, email, password, gender, phoneNumber, Address, hasadminAccess, role } = req.body;

        //check if all the required fields are provided
        if (!req.body.name || !req.body.email || !req.body.password || !req.body.gender || !req.body.phoneNumber || !req.body.Address) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }

        //email check if the email already exists
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).json({ message: "User with this email already exists" });
        }

        //check phone number if it already exists
        const existingPhoneNumber = await User.findOne({ phoneNumber: req.body.phoneNumber });
        if (existingPhoneNumber) {
            return res.status(400).json({ message: "User with this phone number already exists" });
        }

        //encrypt the password before saving it to the database
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        //create a new user
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            gender: req.body.gender,
            phoneNumber: req.body.phoneNumber,
            Address: req.body.Address,
            hasadminAccess: req.body.hasadminAccess,
            role: req.body.role // Set the role based on the request body
        });

        await user.save();
        res.status(201).json({ message: 'User created successfully', user });
    } catch (error) {
        res.status(400).json({ message: "Error creating user", error: error.message });
    }       

};

//login user
exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        //check if all required fields are provided
        if (!email || !password) {
            return res.status(400).json({ message: "Please provide all required fields" });
        }

        //check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        //check if the password is correct
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        //generate a token for the user (you can use JWT or any other method)
        //const token = generateToken(user); // Implement your token generation logic here

        const jwt = require('jsonwebtoken');
        const token = jwt.sign({ id: user._id, }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: "Login successful", token, user });
    } catch (error) {
        res.status(400).json({ message: "Error logging in", error: error.message });
    }
};

