const Customer = require('../models/customer')

const customerLookups = async (customerId) => {
   try {
      const customer = await Customer.findById(customerId);
      return {
         ...customer._doc,
         _id: customer.id
      }
   } catch (err) {
      throw err;
   }
}
exports.customerLookups = customerLookups;