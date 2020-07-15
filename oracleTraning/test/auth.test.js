const { testEnvironment } = require("../jest.config");

const UserModel = require('../models/userModel').User;
const UserModelFunctions = require('../models/userModel');
const mongoose = require('mongoose');


test('should be true',()=>{
    expect(true).toBe(true)
})

describe('User Model tests',()=>{

    beforeAll(async ()=>{
        await mongoose.connect('mongodb+srv://demo:demo@cluster0.nvhvm.mongodb.net/jest?retryWrites=true&w=majority', {useNewUrlParser: true,useCreateIndex: true,},(err)=>{
            if(err){
                console.log(err);
                process.exit(1);
            }
        });
    });

    test('user is inserted in the database successfully', async ()=>{
        const user = {
            email:'test_'+new Date().getTime()+'@test.com',
            firstName: 'test user',
            lastName:'test last name',
            hashed_password:'kjsskjhdkas'
        }
        const validUser = new UserModel(user);
        let insertedUser = await validUser.save();

        expect(insertedUser._id).toBeDefined();
        expect(insertedUser.dateAdded).toBeDefined();
        expect(insertedUser.firstName).toBe(user.firstName);
        expect(insertedUser.lastName).toBe(user.lastName);
        expect(insertedUser.email).toBe(user.email);
        expect(insertedUser.hashed_password).toBe(user.hashed_password);
    })

    test('register invalid email error', async()=>{
        const user = {
            email:'',
            firstName: 'test user',
            lastName:'test last name',
            hashed_password:'kjsskjhdkas'
        }
        const invalidUser = new UserModel(user);
        let err;
        try{
            await  invalidUser.save();
        }catch(error){
            err = error;
        }

        expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
        expect(err.errors.email).toBeDefined();
    });

    test('register function should work', async () => {
        const validUser = {
            email:'test_'+new Date().getTime()+'@test.com',
            firstName: 'test user',
            lastName:'test last name',
            password:'kjsskjhdkas'
        }
        let insertedUser = await UserModelFunctions.register(validUser);

        expect(insertedUser.success).toBe('User Inserted');
        expect(insertedUser.user._id).toBeDefined();
        expect(insertedUser.user.dateAdded).toBeDefined();
        expect(insertedUser.user.firstName).toBe(validUser.firstName);
        expect(insertedUser.user.lastName).toBe(validUser.lastName);
        expect(insertedUser.user.hashed_password).toBeDefined();
        expect(insertedUser.user.email).toBe(validUser.email);
    })

})