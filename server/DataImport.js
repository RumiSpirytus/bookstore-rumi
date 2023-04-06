import express from 'express';
import User from './models/UserModels.js';
import users from './data/users.js';

const ImportData = express.Router()


ImportData.post("/user", async (req, res) => {
    // if(User.remove().length !== 0)
    // User.deleteOne();
    // de {} thi filter k loc nen dung deleteMany, k co remove nen k dung duoc - rumi
    await User.deleteMany({})
    const importUser = await User.insertMany(users);
    res.send({importUser});
});

export default ImportData;