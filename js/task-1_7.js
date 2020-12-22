//Посчитает и выведет в консоль количество категорий в ul#categories,
//то есть элементов li.item.Получится 'В списке 3 категории.'.
//Для каждого элемента li.item в списке ul#categories,
//найдет и выведет в консоль текст заголовка элемента(тега h2)
//и количество элементов в категории(всех вложенных в него элементов li).

const items = [...document.querySelectorAll("li.item")];
console.log(items);

console.log(`В списке ${items.length} категории.`);

items
  .map((item) => {
    const title = item.querySelector("h2");
    const list = item.querySelectorAll("ul li");
    return {
      title: title.textContent,
      count: list.length,
    };
  })
  .forEach((entry) => {
    console.log("Категория: ", entry.title);
    console.log("Количество элементов: ", entry.count);
  });
