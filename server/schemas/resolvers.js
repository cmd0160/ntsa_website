const { User } = require("../models");
const { signToken } = require("../utils/auth");

const { AuthenticationError } = require("apollo-server-express");
const bcrypt = require('bcrypt');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
          if (context.user) {
            const userData = await User.findOne({ _id: context.user._id }).select(
              "-__v -password"
            );
    
            return userData;
          }
    
          throw new AuthenticationError("Not logged in");
        },
        //return all users
        users: async () => {
          return await User.find().select("-__v -password");
        },
        //return single user by email???
        user: async (parent, { email }) => {
          return User.findOne({ email }).select("-__v -password");
        },
    },

    Mutation: {

        // create a user with whatever is passed in as the args. Signs a token returning an object which combines user data and token
    addUser: async (parent, args) => {
        const user = await User.create(args);
        const token = signToken(user);
  
        return { token, user };
      },
  
      // handle login functionality
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError("Incorrect credentials");
        }
  
        const correctPw = await user.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError("Incorrect credentials");
        }
  
        const token = signToken(user);
        return { token, user };
      },
  
      updateUser: async (parent, args) => {
        return await User.findByIdAndUpdate(args._id, args, {
          new: true,
        });
      },

      updatePassword: async (parent, args) => {
        const saltRounds = 15; 
        args.password = await bcrypt.hash(args.password, saltRounds); 
        // console.log(args.password)

        return await User.findByIdAndUpdate(args._id, args, {
          new: true,
        });
          
      },
  
      // HAD TO BE UPDATED TYPEDEFS TOO
      deleteUser: async (parent, { _id }) => {
        return await User.findByIdAndDelete(_id);
      },
    }
}

module.exports = resolvers;