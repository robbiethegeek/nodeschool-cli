const whoami = require('npm-whoami');
let npmUser = ''
let npmVerified = true;
try {
  npmUser = whoami.sync();
} catch (error) {
  npmVerified = false;
  console.log("Please create a user account on npm or login");
  console.log("run: npm login and rerun nodeschool.")
}

if (npmVerified) {
  console.log(`Your current npm user account is : ${npmUser}`);
}


module.exports = {
  npm: {
    username: npmUser,
    verified: npmVerified
  },
}
