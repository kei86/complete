import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し初期化する
  const inputText = document.getElementById("add-text").value;
  createIncompleteList(inputText);
};

// mi
const createIncompleteList = (text) => {
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // li
  const li = document.createElement("li");
  li.innerText = text;

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const completeTarget = completeButton.parentNode;
    document.getElementById("incomplete-list").removeChild(completeTarget);

    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;
    alert("完了");
    const li = document.createElement("li");
    li.innerText = text;
    console.log(li);
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    document.getElementById("complete-list").appendChild(addTarget);
    backButton.addEventListener("click", () => {
      alert("good");
      const backTarget = backButton.parentNode;
      const backText = backTarget.firstElementChild.innerText;
      document.getElementById("complete-list").removeChild(backTarget);
      createIncompleteList(backText);
    });
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  // divの子要素
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了のりすとに追加
  document.getElementById("incomplete-list").appendChild(div);
  console.log(completeButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
