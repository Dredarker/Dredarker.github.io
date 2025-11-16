i = 0;
setInterval(() => {
    i += 1;
    document.body.style["background-position-x"] = `${i}px`;
}, 1000);

function pressKeyToRun(runCode, key) {
    function runCode2() {
        if (event.key === key) {
            runCode();
            document.removeEventListener('keydown', runCode2);
        }
    };
    document.addEventListener('keydown', runCode2);
};

TMPcode = () => {
    
};

pressKeyToRun(() => {pressKeyToRun(() => {pressKeyToRun(() => {pressKeyToRun(() => {pressKeyToRun(() => {pressKeyToRun(() => {pressKeyToRun(() => {pressKeyToRun(() => {pressKeyToRun(() => {pressKeyToRun(() => {TMPcode()}, "a")}, "b")}, "ArrowRight")}, "ArrowLeft")}, "ArrowRight")}, "ArrowLeft")}, "ArrowDown")}, "ArrowDown")}, "ArrowUp")}, "ArrowUp");
