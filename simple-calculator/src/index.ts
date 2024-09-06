import readline from 'readline';

// readlineで入力を受け付けるインターフェースを定義する
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 入力を受け付ける変数を定義する
let firstNum: number;
let operator: string;
let secondNum: number;

// 計算を行う関数
function calculate(num1: number, op: string, num2: number): number | undefined {
  switch (op) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      if (num2 === 0) {
        console.log('Error: Division by zero is not allowed.');
        return undefined;
      }
      return num1 / num2;
    default:
      console.log('Invalid operator.');
      return undefined;
  }
}

// 入力を順番に受け付ける
rl.question(`1つ目の数値を入力してください:`, (firstNumber: string) => {
  firstNum = parseFloat(firstNumber);
  rl.question(`何算をしたいか入力してください: "+,-,*,/": `, (ope: string) => {
    operator = ope;
    rl.question(`2つ目の数値を入力してください:`, (secondNumber: string) => {
      secondNum = parseFloat(secondNumber);

      // 計算を実行
      const result = calculate(firstNum, operator, secondNum);

      if (result !== undefined) {
        console.log(`計算結果: ${firstNum} ${operator} ${secondNum} = ${result}`);
      }

      rl.close();
    });
  });
});