const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

//Для создания DOM - узлов используй document.createElement()
//для каждого элемента массива ingredients создаст отдельный li,
//вставит все li за одну операцию в список ul.ingredients.

const listIngr = document.querySelector("#ingredients");

const addListIngr = (array) => {
  const list = array.map((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    return listItem;
  });

  listIngr.append(...list);
};

addListIngr(ingredients);
