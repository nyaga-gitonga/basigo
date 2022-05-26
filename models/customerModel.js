const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    middlename: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    phonenumber: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },

    createdby: {
        type: String,
        trim: true
    },
    isCustomer:{
        type:Boolean,
        default:false
    },
    photo:{
        type:String
    },
    earning:{
        type:Number
    },
    conversiondate: {
        type:Date
    },
    products:{
        type:Array,
        default:[]
    },
    convertedby:{
        type:String
    }


}, {
    timestamps: true
})

module.exports = mongoose.model('customer', customerSchema)