import "./styles.css";

const onClickAdd = () => {
  // text boxを取得して初期化
  const addText = document.querySelector("#addText");
  const inputText = addText.value;
  addText.value = "";

  // div
  const div = document.createElement("div");
  div.className = "list-row";

  // p
  const p = document.createElement("p");
  p.innerText = inputText;

  // li
  const li = document.createElement("li");

  // liタグの小要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  console.log(li);

  // 未完了のリストに追加
  document.querySelector("#incomplete-list").appendChild(li);
};

const addButton = document.querySelector("#addButton");
addButton.addEventListener("click", () => onClickAdd());
