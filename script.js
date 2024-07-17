let addbtn = document.getElementById("add");
let input = document.getElementById("input");
let todolist = document.getElementById("todolist");

addbtn.addEventListener("click", () => {
  add();
});
const add = () => {
  todolist.innerHTML += `
<li>
<div class="mainvalue">
${input.value}
</div>
 <button class="trash">x</button>
</li>

`;
  input.value = "";
  const savedata = () => {
    let data = [];
    data.push(todolist.innerHTML);
    localStorage.setItem("mylists", JSON.stringify(data));
  };
  savedata();

  let lists = document.querySelectorAll(".trash");

  lists.forEach((list) => {
    list.addEventListener("click", () => {
      list.parentElement.remove();
      console.log("trash is pressed");

      savedata();
    });
  });
};

const load = () => {
  data = localStorage.getItem("mylists");
  if (data) {
    data = JSON.parse(data);

    todolist.innerHTML = data;
  }
};

load();
let lists = document.querySelectorAll(".trash");

lists.forEach((list) => {
  list.addEventListener("click", () => {
    list.parentElement.remove();
    savedata();
  });
});
const savedata = () => {
  let data = [];
  data.push(todolist.innerHTML);
  localStorage.setItem("mylists", JSON.stringify(data));
};
