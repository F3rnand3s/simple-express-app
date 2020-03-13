const monk = require('monk');
const connectionString = process.env.MONGODB_URI || 'mongodb+srv://newUsername:newPassword@cluster0-g2wfg.mongodb.net/test?retryWrites=true&w=majority';
const db = monk(connectionString);
 
module.exports = db;