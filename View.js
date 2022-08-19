
const readline = require('readline');

class View {
  greeting(){
    return new Promise ((res, rej) =>{
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      rl.question(('\n\nКак тебя зовут, воин?\n\n'), (answer) => {
        res(answer);
        rl.close();
      });
    })
  }
  show(topicsArr, nom) {
    return new Promise((resolve, reject) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      rl.question((`\n\nПривет ${nom}, выбери тему:\n\n${topicsArr.map((el) => el.slice(0, -4)).join('\n')}\n\n`), (answer) => {
        resolve(answer);
        rl.close();
      });
    });
  }

  console.log('LAla123');

  showQuestions(quest, i){
    return new Promise((resolve, reject) => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      rl.question((`\n\nВнимание, вопрос:\n\n${quest[i].slice(0,4).join('\n')}\n\n`), (answer) => {
        resolve(answer);
        rl.close();
      });
    });
  }
}
module.exports = View
