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

  // button
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("complete");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("delete");
  });

  // liタグの小要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のリストに追加
  document.querySelector("#incomplete-list").appendChild(li);
};

const addButton = document.querySelector("#addButton");
addButton.addEventListener("click", () => onClickAdd());
