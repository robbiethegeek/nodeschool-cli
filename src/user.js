const whoami = require('npm-whoami');
let npmUser = ''
let npmVerified = true;
try {
  npmUser = whoami.sync();
} catch (error) {
  npmVerified = false;
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
