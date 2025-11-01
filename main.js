let counter = localStorage.getItem("counter");
if (counter == null) {
  counter = 0;
  localStorage.setItem("counter", counter);
};

function upCount() {
  counter++;
  localStorage.setItem("counter", counter);
}
