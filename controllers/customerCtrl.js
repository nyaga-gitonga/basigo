const Customers = require('../models/customerModel')

// Filter, sorting and paginating

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }
    filtering(){
       const queryObj = {...this.queryString} //queryString = req.query

       const excludedFields = ['page', 'sort', 'limit']
       excludedFields.forEach(el => delete(queryObj[el]))
       
       let queryStr = JSON.stringify(queryObj)
       queryStr = queryStr.replace(/\b(gte|gt|lt|lte|regex)\b/g, match => '$' + match)

    //    gte = greater than or equal
    //    lte = lesser than or equal
    //    lt = lesser than
    //    gt = greater than
       this.query.find(JSON.parse(queryStr))
         
       return this;
    }

    sorting(){
        if(this.queryString.sort){
            const sortBy = this.queryString.sort.split(',').join(' ')
            this.query = this.query.sort(sortBy)
        }else{
            this.query = this.query.sort('-createdAt')
        }

        return this;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit;
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const custCtrl = {
    fetchLeads: async (req, res) =>{
        try{
         const features = new APIfeatures(Customers.find(), req.query)
         .filtering().sorting().paginating()

         const leads = await features.query

         res.json({
             status: 'success',
             result: leads.length,
             leads: leads
         })
        }catch(err){
            return res.status(500).json({msg: err.message})
        }

    },

    registerLead: async (req, res) =>{
       try {
       const {firstname,middlename,lastname,phonenumber,email,location,gender,createdby} =req.body;


       const lead = await Customers.findOne({email})

       if(lead)
         return res.status(400).json({msg: "Lead already exists"})

       const newLead = new Customers({
        firstname,middlename,lastname,phonenumber,email,location,gender,createdby 
       })  

       await newLead.save()
       res.json({msg: "Lead added successfully"})

       } catch(err){
           return res.status(500).json({msg: err.message})
       }
    },

    convertToCustomer: async (req, res) =>{
       try {
           const {photo,earning,products}= req.body
           if(!photo || !earning || !products)
           return res.status(400).json({msg: "Missing required parameter"})

           await Customers.findOneAndUpdate({_id:req.params.id},{
               isCustomer:true,photo,earning,conversiondate:new Date(),products
           })

           res.json({msg:"Lead has been converted to customer"})
       }
       catch (err){
           return res.status(500).json({msg:err.message})
       }
    },

    fetchCustomers: async (req, res) =>{
        try{
         const features = new APIfeatures(Customers.find({isCustomer: true}), req.query)
         .filtering().sorting().paginating()

         const customers = await features.query

         res.json({
             status: 'success',
             result: customers.length,
             customers: customers
         })
        }catch(err){
            return res.status(500).json({msg: err.message})
        }

    },
}


module.exports= custCtrl