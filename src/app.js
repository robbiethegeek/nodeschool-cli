#!/usr/bin/env node
const program = require('commander');
const version = require('../package.json').version;
const commands = require('./commands')
const user = require('./user');
const firebase = require('./database');
const credentials = require('../config/firebase-service.json');



program
  .version(version)
  .option('enroll', 'enroll in nodeschool')
  .option('verify', 'Verify you are enrolled in nodeschool')
  .option('report-card', 'Get your report card for nodeschool')
  .option('checkin', 'Check in your current state into nodeschool')
  .parse(process.argv);
console.log(user);
if (!user.npm.verified) {
  console.log("Please create a user account on npm or login");
  console.log("run: npm login and rerun nodeschool.")
} else {
  let students = firebase.database().ref('/students/');
  students.child(user.npm.username).once('value').then((student) => {
    console.log(student.exists());
    firebase.database().ref().off();
  });
  
  // students.off();
  

  if (program.enroll) {
    commands.enroll();
  }

  if (program.verify) {
    commands.verify();
  }

  if (program.reportCard) {
    commands.reportCard();
  }

  if (program.checkin) {
    commands.checkin();
  }
}



