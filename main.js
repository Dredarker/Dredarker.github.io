let counter = localStorage.getItem("counter");
if (counter == null) {
  counter = 0;
  localStorage.setItem("counter", counter);
};

function upCount(id) {
  id = document.getElementById(id);
  counter++;
  localStorage.setItem("counter", counter);
  id.textContext = `Count: ${counter}`;
}
