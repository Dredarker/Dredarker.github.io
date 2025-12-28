i = 0;
setInterval(() => {
    i += 1;
    document.body.style["background-position-x"] = `${i}px`;
}, 65);

fetch("https://raw.githubusercontent.com/Dredarker/Dredarker.github.io/refs/heads/main/news.txt")
.then(result => result.text())
.then(body => document.querySelector("body > div > div:nth-child(2) > p").outerHTML = body)



function pressKeyToRun(runCode, key) {
    function runCode2() {
        if (event.key === key) {
            runCode();
            document.removeEventListener('keydown', runCode2);
        }
    };
    document.addEventListener('keydown', runCode2);
};
pressKeyToRun(() => {pressKeyToRun(() => {pressKeyToRun(() => {pressKeyToRun(() => {pressKeyToRun(() => {pressKeyToRun(() => {pressKeyToRun(() => {pressKeyToRun(() => {pressKeyToRun(() => {pressKeyToRun(() => {TMPcode()}, "a")}, "b")}, "ArrowRight")}, "ArrowLeft")}, "ArrowRight")}, "ArrowLeft")}, "ArrowDown")}, "ArrowDown")}, "ArrowUp")}, "ArrowUp");
TMPcode = () => {
    alert("Нету посхалки :(")
};
