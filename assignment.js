const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
if (randomNumber > 0.7) {
  alert("Your random number is bigger than 0.7");
}

//2
let arr = [9, 5, 2, 3, 4, 0];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
let i = arr.length;
do {
  console.log(arr[i]);
  i--;
} while (i >= 0);

// 3
for (let i = arr.length; i >= 0; i++) {
  console.log(arr[i]);
}
//4
const anotherRandomNumber = Math.random();
if (
  (randomNumber > 0.7 && anotherRandomNumber > 0.7) ||
  randomNumber < 0.2 ||
  anotherRandomNumber < 0.2
) {
  alert("you did it");
}
