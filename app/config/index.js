const config = {
    app: {
      port: process.env.PORT || 3000,
    },
    db: {
      uri: process.env.MONGODB_URI || "mongodb+srv://tranthaitoan999:29022004@ct449.m6vo3ck.mongodb.net/contactbook?retryWrites=true&w=majority&appName=CT449"
      }
  };
  
  module.exports = config;




  