import Users from './userModel.js'

// const Users = [
//     {
//         id: 2,
//         name: 'Hassan',
//         age: 22
//     }
// ]

//   TAKE DATA FROM DATABASE


export const getUsers = async (req, res) => {
    try {
        const users = await Users.find();
        res.status(200).json({ success: true, users })
    } catch (err) {
        res.status(500).json({ success: false, message: "Internal Server Error" })
    }
}


//  CREATE DATABASE



export const createUsers = async (req, res) => {
    try {
        let { email } = req.body
        const existingUser = await Users.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ success: false, message: 'User Already Exists.' });
        }
        const user = await Users.create(req.body);
        res.json({ success: true, user });
    }
    catch (err) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}


// UPDATE DATABASE DATA



export const updateUser = async (req, res) => {
    try {
        const id = req.params.userId; // GET USER ID FROM URL PARAMETERS
        const user = await Users.findByIdAndUpdate(id, req.body, { new: true })
        res.json({ success: true, user });
    }
    catch (err) {
        console.log('Error --->', err)
        res.status(500).json({ success: false, message: "Internal server Error" })
    }
};


//   DELETE DATABASE DATA


export const deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;  // GET USER ID FROM URL PARAMETERS
        const user = await Users.findByIdAndDelete(userId);
        res.json({ success: true, user })
    }
    catch (err) {
        console.log('Error ---->', err);
        res.status(500).json({ success: false, message: 'Internal server error' })
    }
}