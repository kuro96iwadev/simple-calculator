"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = __importDefault(require("readline"));
// readlineで入力を受け付けるインターフェースを定義する
const rl = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
// 入力を受け付ける変数を定義する
let firstNum;
let operator;
let secondNum;
// 計算を行う関数
function calculate(num1, op, num2) {
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
rl.question(`1つ目の数値を入力してください: `, (firstNumber) => {
    firstNum = parseFloat(firstNumber);
    rl.question(`何算をしたいか入力してください: "+,-,*,/": `, (ope) => {
        operator = ope;
        rl.question(`2つ目の数値を入力してください:`, (secondNumber) => {
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
