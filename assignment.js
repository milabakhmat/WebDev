// Create two new functions: One that takes no parameters and simply shows

function show() {
  alert("Good luck!");
}

function withName(name) {
  alert("Hi, " + name);
}
show();
withName("Mila");
const task3Element = document.getElementById("task-3");
task3Element.addEventListener("click", show);

function newOne(firstName, secondName, age) {
  return firstName + secondName + age;
}

alert(newOne("Mila ", "Bakhmat ,", 38));
