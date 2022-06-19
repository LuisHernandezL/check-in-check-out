//Import models (DataBase)
const { Record } = require('../models/record.model');

//Define functions 

//1.- Get all records
const getAllRecord = async (req,res)=>{

    try {
        //await for server response 
        const records = await Record.findAll();

        res.status(200).json({
            status:'success',
            records
        });

    } catch (error) {
        console.log(error);
    }
};

//2.- Get record by ID
const getRecordById = async (req,res)=>{
    //received from client side
    const { id }=req.params

    //Finding the first coincidence 
    const record = await Record.findOne({where:{ id }});

    //Validating if the record exists in the database
    if (!record) {
        return res.status(404).json({
            status:'error',
            message:'Record not found, please check credentials'
        });
        
    };

    res.status(200).json({
        status:'success',
        record
    });
};

//3.- Check In
const checkIn = async (req,res)=>{
    try {
        const { entranceTime, exitTime,status } = req.body
        const newCheckIn = await Record.create({
            entranceTime,
            exitTime,
            status
        });

        res.status(200).json({
            status:'success',
            newCheckIn,
            message:'Welcome!'
            
        });

        
    } catch (error) {
        console.log(error);
    };
};

//4.- Check Out
const checkOut = async (req,res)=>{
    const { id } = req.params;
    const { exitTime } = req.body;

    const record = await Record.findOne({where : { id }});

    if (!record) {
        return res.status(404).json({
            status:'Error',
            message:'Record not found'
        });
    };

    await record.update({exitTime,status:'Out'});

    res.status(201).json({
        status:'success'
    });
};

//5.- Cancel a record
const cancelRecord = async (req,res)=>{
    const {id}=req.params;

    const record = await Record.findOne({where : {id}});

    if (!record) {
        return res.status(404).json({
            status:'Error',
            message:'Record not found'
        });
    };

    await record.update({status:'cancelled'});

    res.status(201).json({
        status:"success"
    });

};

module.exports = {
    getAllRecord,
    getRecordById,
    checkIn,
    checkOut,
    cancelRecord
};