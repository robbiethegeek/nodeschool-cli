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
      "expressworks": 9}
      // "makemehapi": "", "promise-it-wont-hurt": "", "async-you": "", "nodebot-workshop": "", "goingnative": "", "planetproto": "",
      // "webgl-workshop": "", "esnext-generation": "", "test-anything": "", "tower-of-babel": "", "learnyoumongo": "", "regex-adventure": "",
      // "learn-sass": "", "pattern-lab-workshop": "", "learnyoubash": "", "currying-workshopper": "", "bacon-love": "", "innersourceadventure": "",
      // "shader-school": "", "bytewiser": "", "bug-clinic": "", "browserify-adventure": "", "introtowebgl": "", "count-to-6": "", "kick-off-koa": "",
      // "lololodash": "", "learnyoucouchdb": "", "learnuv": "", "learn-generators": "", "learnyoureact": "", "perfschool": "", "web-audio-school": "",
      // "torrential": "", "thinking-in-react": "", "node-debug-school": "", "seneca-in-practice": "", "less-is-more": "", "js-best-practices"];

    const configDir = path.join(homedir, '.config');
    const files = fs.readdirSync(configDir);
    for (file of files) {
      if (Object.keys(workshops).includes(file)){
        const filePath = path.join(configDir, file, 'completed.json');
        if (fs.existsSync(filePath)) {
          const fileContents = fs.readFileSync(filePath);
          if (workshops[file] === JSON.parse(fileContents.toString()).length) {
            checkInData.push(file);
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