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

  const deleteFromIncompleteList = (target) => {
    document.querySelector("#incomplete-list").removeChild(target);
  };

  const removeChildListRow = (target, button) => {
    target.querySelector(".list-row").removeChild(button);
  };
  // button
  const deleteButton = document.createElement("button");
  const completeButton = document.createElement("button");
  const backButton = document.createElement("button");
  const completeList = document.querySelector("#complete-list");
  backButton.innerText = "戻す";
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode.parentNode;
    deleteFromIncompleteList(completeTarget);
    removeChildListRow(completeTarget, completeButton);
    removeChildListRow(completeTarget, deleteButton);
    completeTarget.querySelector(".list-row").appendChild(backButton);
    completeList.appendChild(completeTarget);
  });

  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ（div）を未完了リストから削除
    const deleteTarget = deleteButton.parentNode.parentNode;
    deleteFromIncompleteList(deleteTarget);
  });

  backButton.addEventListener("click", () => {
    const backTarget = backButton.parentNode.parentNode;
    const targetRow = backTarget.querySelector(".list-row");
    completeList.removeChild(backTarget);
    removeChildListRow(backTarget, backButton);
    targetRow.appendChild(completeButton);
    targetRow.appendChild(deleteButton);
    document.querySelector("#incomplete-list").appendChild(backTarget);
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
