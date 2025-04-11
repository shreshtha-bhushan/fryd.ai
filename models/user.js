import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    clerkId: {type: String, required: true, unique: true},
   name: {type: String, required: true, unique: true},
    email: {type: String, required: true},
    image: {type: String, required: false},   
    },
    {timestamps: true}
);

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
