import express from 'express';
import User from './models/UserModels.js';
import users from './data/users.js';

const ImportData = express.Router()


ImportData.post("/user", async (req, res) => {
    await User.Remove({})
    const importUser = await User.insertMany(users)
    res.send({importUser});
});

export default ImportData;