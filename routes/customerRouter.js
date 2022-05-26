const router=require('express').Router()
const custCtrl=require('../controllers/customerCtrl')

const auth=require('../middleware/auth')
const managerMiddleware=require('../middleware/managerMiddleware')



router.route('/lead')
 //.get(auth,custCtrl.fetchLeads)
 .get(custCtrl.fetchLeads)
 .post(auth,custCtrl.registerLead)

 router.route('/customer')
 .get(auth,custCtrl.fetchCustomers)
 .post(auth,managerMiddleware,custCtrl.convertToCustomer)

module.exports = router;