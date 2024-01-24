import readlineSync from 'readline-sync';

export const welcomeUser = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

// Вызов функции, если модуль используется как исполняемый файл
if (require.main === module) {
  welcomeUser();
}
