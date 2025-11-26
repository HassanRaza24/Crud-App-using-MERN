import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: String,
        phone: {
            type: Number,
            unique: true,
        },
        email: {
            type: String,
            unique: true,
        },
    }
);

export default mongoose.model('User', userSchema);