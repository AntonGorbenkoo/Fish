
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
    const theme = await fs.readFile(`${__dirname}/topics/${choice}`, 'utf-8');
    const result = [];
    const questions = theme.split('\n');
    questions.forEach ((el, line, arr) => {
      if (!(line % 5)) result.push([el, arr[line+1], arr[line+2], arr[line+3], arr[line+4]]);
      return;
    });
    return result;
  }
}

module.exports = Model;
