// const firebase = require('firebase/app');
// require('firebase/database');

const fs = require('fs');
const path = require('path');
const homedir = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
console.log(homedir);

module.exports = {
  enroll: () => {
    console.log("enroll");
  },
  verify: () => {
    console.log("verify");
  },
  checkin: () => {
    const status = {};
    let checkInData = [];
    console.log("checkin");
    const workshops = {
      "javascripting": 19,
      "git-it": 11,
      "scope-chains-closures": 5,
      "elementary-electron": 5,
      "learnyounode": 13,
      "how-to-npm": 17,
      "streamadventure": 15,
      "how-to-markdown": 12,
      "functional-javascript": 18,
      "levelmeup": 12,
      "expressworks": 9,
      "makemehapi": 13,
      "promise-it-wont-hurt": 13,
      "async-you": 7,
      "nodebot-workshop": 10,
      "goingnative": 13,
      "planetproto": 10,
      "webgl-workshop": 27,
      "esnext-generation": 5,
      "test-anything": 5,
      "tower-of-babel": 13,
      "learnyoumongo": 9,
      "regex-adventure": 14,
      "learn-sass": 13,
      "pattern-lab-workshop": 9,
      "learnyoubash": 11,
      "currying-workshopper": 6,
      "bacon-love": 16,
      "innersourceadventure": 4,
      "shader-school": 31,
      "bytewiser": 7,
      "bug-clinic": 13,
      "browserify-adventure": 10,
      "introtowebgl": 7,
      "count-to-6": 10,
      "kick-off-koa": 11,
      "lololodash": 9,
      "learnyoucouchdb": 4,
      "learnuv": 9,
      "learn-generators": 6,
      "learnyoureact": 11,
      "perfschool": 10,
      "web-audio-school": 3,
      "torrential": 6,
      "thinking-in-react": 7,
      "node-debug-school": 9,
      "seneca-in-practice": 12,
      "less-is-more": 10, 
      "js-best-practices": 8
    };

    const configDir = path.join(homedir, '.config');
    const files = fs.readdirSync(configDir);
    for (file of files) {
      if (Object.keys(workshops).includes(file)){
        const filePath = path.join(configDir, file, 'completed.json');
        if (fs.existsSync(filePath)) {
          const fileContents = fs.readFileSync(filePath);
          if (workshops[file] === JSON.parse(fileContents.toString()).length) {
            checkInData.push({ name: file, completed: true, percent: 100});
          } else {
            checkInData.push({ name: file, completed: false, percent: ((JSON.parse(fileContents.toString()).length / workshops[file]) * 100.00).toFixed(2)});
          }
        }
      }
      
    }
    console.log(checkInData);
  },
  reportCard: () => {
    console.log("report-card");
  }
}