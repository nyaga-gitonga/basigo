const router=require('express').Router()
const custCtrl=require('../controllers/customerCtrl')

const auth=require('../middleware/auth')
const managerMiddleware=require('../middleware/managerMiddleware')



router.route('/lead')
 //.get(auth,custCtrl.fetchLeads)
 .get(custCtrl.fetchLeads)
 .get(custCtrl.fetchCustomers)
 .post(auth,custCtrl.registerLead)

 router.route('/customer/:id')
 //.put(auth,managerMiddleware,custCtrl.convertToCustomer)
 .put(custCtrl.convertToCustomer)

module.exports = router;