
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

  async getQuestions(choice) {
    const theme = await fs.readFile(`${__dirname}/topics/${choice}`);
    const result = [];
    const questions = theme.split('\n');
    questions.forEach ((el, line) => {
      if (!(line % 5)) result.push(el);
      return;
    });
    return result;
  }
}

module.exports = Model;
