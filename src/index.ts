import { read } from 'fs';
import { title } from 'process';
import { stringify } from 'querystring';
import * as readline from 'readline';
import * as reader from 'readline-sync';
import { map, tap } from 'rxjs';
import { TodoItem } from './app/utils/TodoItem';
import { generateMenuWelcome } from './console/utils';
import { TodosService } from './services';

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question: string) {
  return new Promise((resolve, reject) => {
      rl.question(question, (input) => resolve(input) );
  });
}

const askQuestion = () => {
  rl.question(generateMenuWelcome(), async answer => {
    switch (answer) {
      case '1':
        console.log('\n Creating new task')
        
        let todo: TodoItem = {
          name: '',
          deadline: '',
          description: '',
          tags: ''
        }
        
        todo.name = await ask('Title: ') as string;
        todo.description = await ask('Description: ') as string;
        todo.deadline = await ask('Deadline: ') as string;
        todo.tags = await ask('Tags: ') as string;

        await TodosService.postTodo(todo).toPromise();
        console.log('Created successfuly');
        askQuestion();
        break;
      case '2':
        const tags = await ask("Type tags: ") as string;    
        let byTagsData = await TodosService.getTodosByTags(tags).toPromise();
        let byTagsCtr = 1;
        byTagsData.forEach(item => {
          console.log(byTagsCtr + '. Title: ' + item.name);
          console.log('   Description: ' + item.description);
          console.log('   Deadline: ' + item.deadline);
          console.log('   Tags: ' + item.tags);
          console.log()
          byTagsCtr++;
        })
        byTagsCtr = 1;
        askQuestion();
        break;
      case '3':
        console.log('Third task choosed');
        let ctr = 1;
        let data = await TodosService.getLastTodos().toPromise()
        data.forEach(item => {
          console.log(ctr + '. Title: ' + item.name);
          console.log('   Description: ' + item.description);
          console.log('   Deadline: ' + item.deadline);
          console.log('   Tags: ' + item.tags);
          console.log()
          ctr++;
        })
        ctr = 1;
        askQuestion();
        break;
      default:
        process.exit();
    }
  })
}

askQuestion();