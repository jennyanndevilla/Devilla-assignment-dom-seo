document.getElementById("btn").addEventListener("click", function () {
  document.getElementById("msg").textContent = "Every Behind the story there was a painful reality!";
  document.getElementById("msg").style.color = "Red";
});

document.getElementById("addItemBtn").addEventListener("click", function () {
  const newItem = document.createElement("li");
  newItem.textContent = "Horror";
  document.getElementById("myList").appendChild(newItem);
});

document.getElementById("removeItemBtn").addEventListener("click", function () {
  const list = document.getElementById("myList");
  if (list.lastElementChild) {
    list.removeChild(list.lastElementChild);
  }
});

document.getElementById("removeParagraphBtn").addEventListener("click", function () {
  const paragraph = document.getElementById("myParagraph");
  paragraph.remove();
});
