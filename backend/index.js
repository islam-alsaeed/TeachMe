import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Student } from './models/studentModel.js';

const app = express();

app.get('/', (request, response) => {
    console.log(request)
    // response.send('Hello World!')
    return response.status(234).send('Welcome to MERN stack toturial')
})

// route to save new student
app.post('/students', async (request, response) => {
    try {
        if (!request.body.name||!request.body.email){
            return response.status(400).send({message: 'Please provide name and email'})
        }
        const newStudent={
            name:request.body.name,
            email:request.body.email
        }
        const student= await Student.create(newStudent);
        return response.status(201).send(student);
    } catch (error) {
        console.log(error.message)
        response.status(500).send({ message: error.message });
    }
})

mongoose.connect(mongoDBURL).then(() => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => {
        console.log(`App is listening to port: ${PORT}`)
    });
}).catch((error) => {
    console.log(error)
});