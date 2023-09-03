// var val1 ="var変数";
// console.log(val1);
// /**var1変数は上書き可能 */
// val1 = "var変数を上書き"
// console.log(val1);

// var val1 = "var変数を再設定";
// console.log(val1);

// const name = "じゃけえ";
// const age = 28;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);
// //バックスラッシュないで変数を${}で記述できる
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// /** function func1(str){
//   return str;
// }*/

// // const func1 = function(str){
// //     return str;
// // }

// const func1 = str => str;
// console.log(func1("func1です"));

// const func2 = (num1,num2) => num1 + num2;
// console.log(func2(1,2));

// const myProfile ={
//   name : "じゃけえ",
//   age : 28
// }
// // const message3 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// // console.log(message3);

// const { name, age }= myProfile;
// const message4 =`私の名前は${name}です。年齢は${age}才です。`;
// console.log(message4);

// const myProfile = ["じゃけえ",28];
// const message1 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です！`;
// console.log(message1);

// const [name,age] = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}になります。`;
// console.log(message2);

// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん！`);
// sayHello("尚子");

//スプレッド構文
// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1,num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);

// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
const arr4 = [10,20];
const arr5 = [30,40];

const arr6 = [...arr4];
console.log(arr6);
const arr7 =[...arr5,...arr6];
console.log(arr7);










