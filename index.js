const title = document.getElementById("title");
const description = document.getElementById("description");
const btnSubmit = document.getElementById("btnSubmit");
const modal = document.querySelector("modal");
const board = document.querySelector(".board");
const documentWindowSub = document.querySelector("documentWindowSub");
const secondTitle = document.querySelector(".secondTitle");
const secondDescription = document.querySelector(".secondDescription");
const btnEdit = document.querySelector("#btnEdit");
const btnClose = document.querySelector("#btnClose");
const modalWrapper = document.querySelector(".modalWrapper");

let arr = [];

btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  board.innerHTML = "";
  const elemNew = elemGet(title.value, description.value);
  title.value = "";
  description.value = "";
  arr.push(elemNew);
  arr.forEach((elem) => {
    board.innerHTML += elemGetInTheBoard(elem.title, elem.description);
  });
  console.log(title, description);
});

const elemGet = (title, description) => {
  let elemArr = {
    title: title,
    description: description,
  };
  return elemArr;
};
const elemGetInTheBoard = (titleGet, descriptionGet) => {
  return (board.innerHTML = `<div class = "card">
  <p class = "titleCard">${titleGet}</p>
  <p class = "descriptionCard">${descriptionGet}</p>
  <button id="btnEdit">Edit</button>
  <button id="btnDelete">Close</button>`);
};

board.addEventListener("click", (event) => {
  if (event.target.closest("#btnDelete")) {
    const card = event.target.closest(".card");
    const titleGet = card.querySelector(".titleCard");
    const descriptionGet = card.querySelector(".descriptionCard");
    arr.forEach((elem, index) => {
      if (
        elem.title === titleGet.innerHTML &&
        descriptionGet.innerHTML === elem.description
      ) {
        arr.splice(index, 1);
        card.innerHTML = "";
        console.log(arr);
      }
    });
  } else if (event.target.closest("#btnEdit")) {
    const cardSecond = event.target.closest(".card");
    const titleGetSecond = cardSecond.querySelector(".titleCard");
    const descriptionGetSecond = cardSecond.querySelector(".descriptionCard");

    arr.forEach((elem, index) => {
      if (
        elem.title === titleGetSecond.innerHTML &&
        descriptionGetSecond.innerHTML === elem.description
      ) {
        arr.splice(index, 1);
        modalWrapper.style.visibility = "visible";
        cardSecond.remove();
      }
    });
  }
});
