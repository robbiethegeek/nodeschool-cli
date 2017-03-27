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
    console.log("checkin");
    const workshops = ["javascripting", "gitit", "scope-chains-closures", "elementary-electron", "learnyounode",
      "how-to-npm", "streamadventure", "how-to-markdown", "functionaljavascript", "levelmeup", "expressworks",
      "makemehapi", "promise-it-wont-hurt", "async-you", "nodebot-workshop", "goingnative", "planetproto",
      "webgl-workshop", "esnext-generation", "test-anything", "tower-of-babel", "learnyoumongo", "regex-adventure",
      "learn-sass", "pattern-lab-workshop", "learnyoubash", "currying-workshopper", "bacon-love", "innersourceadventure",
      "shader-school", "bytewiser", "bug-clinic", "browserify-adventure", "introtowebgl", "count-to-6", "kick-off-koa",
      "lololodash", "learnyoucouchdb", "learnuv", "learn-generators", "learnyoureact", "perfschool", "web-audio-school",
      "torrential", "thinking-in-react", "node-debug-school", "seneca-in-practice", "less-is-more", "js-best-practices"];

    const configDir = path.join(homedir, '.config');
    const files = fs.readdirSync(configDir);
    for (file of files) {
      if (workshops.includes(file)){
        status[file] = fs.readFileSync(path.join(configDir, file, 'current.json')).toString();
      }
      
    }
    console.log(status);
  },
  reportCard: () => {
    console.log("report-card");
  }
}