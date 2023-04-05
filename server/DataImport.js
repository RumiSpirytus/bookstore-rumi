import express from 'express';
import User from './models/UserModels';
import users from './data/Users';

const ImportData = express.Router()


ImportData.post("/user", async (req, res) => {
    await User.Remove({})
    const imporUser = await User.insertMany(users)
    res.send({imporUser});
});

export default ImportData;