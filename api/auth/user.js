const User = require("../src/models/user/user");
const bcrypt = require("bcryptjs");
const { dateToString } = require("../src/resolvers/helpers/date");
const jwt = require("jsonwebtoken")

module.exports = {
   createUser: async (args) => {
      try {
         const isEmailExist = await User.findOne({ email: args.userInput.email });
         if (isEmailExist) {
            throw new Error("Email already exists!")
         }
         const password = await bcrypt.hash(args.userInput.password, 12);
         const user = new User({
            email: args.userInput.email,
            password: password,
            role: args.userInput.role,
         });
         const result = await user.save();
         return {
            ...result._doc,
            password: null,
            _id: result.id,
            createdAt: dateToString(result.createdAt),
            updatedAt: dateToString(result.updatedAt),
         };
      } catch (err) {
         throw err;
      }
   },

   login: async ({ email, password }) => {
      const user = await User.findOne({ email: email });
      if (!user) {
         throw new Error("User does not exist!");
      }
      const isEqual = await bcrypt.compare(password, user.password)
      if (!isEqual) {
         throw new Error("Password is incorrect!");
      }
      const token = jwt.sign({ userId: user.id, email: user.email }, 'somesupersecretkey', {
         expiresIn: '1h'
      });
      return { userId: user.id, token: token, tokenExpiration: 1 };
   }
};
