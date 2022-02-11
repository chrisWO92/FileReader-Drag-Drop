const dropZone = document.querySelector(".drop-zone");
const result = document.querySelector(".result");
const text = document.querySelector(".text");

dropZone.addEventListener("dragstart",(e) => {
    e.dataTransfer.setData("text-plain",e.target.className);
    text.textContent = "Circle being dragged";
});

result.addEventListener("dragleave",() => {
    text.textContent = "In body";
});

result.addEventListener("dragover",(e) => {
    e.preventDefault();
    text.textContent = "Over result";
});

result.addEventListener("drop",() => {
    text.textContent = "Dropped in result";
});
