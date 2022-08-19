
const fs = require('fs').promises;
class Model {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  async getThemes() {
    let dirF =  await fs.readdir('./topics');
    return dirF;
  }

  async getQuestion(answer) {
    let question = await fs.readFile(`./topics/${answer}`, 'utf-8');
    console.log(question);
  } 

}

module.exports = Model;
