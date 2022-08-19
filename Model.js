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
}
module.exports = Model;