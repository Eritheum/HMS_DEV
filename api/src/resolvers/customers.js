const Customer = require("../models/customer");

module.exports = {
   customers: async () => {
      try {
         const customers = await Customer.find();
         return customers.map(customer => ({ ...customer._doc }));
      } catch (err) {
         throw err;
      }
   },

   createCustomer: async (args) => {

      const customer = new Customer({
         title: args.customerInput.title,
         firstName: args.customerInput.firstName,
         lastName: args.customerInput.lastName,
         middleName: args.customerInput.middleName,
         email: args.customerInput.email,
         password: args.customerInput.password,
         customerInfo: args.customerInput.customerInfo,
      });
      try {
         return (result = await customer.save());
      } catch (err) {
         console.log(err);
      }
   },
};
