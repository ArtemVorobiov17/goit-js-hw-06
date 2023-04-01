const listItem = document.querySelectorAll('#categories li.item');
const counter = listItem.length;
console.log(`Number of categories: ${counter}`);

listItem.forEach((item) => {
    console.log(`Category: ${item.querySelector(`h2`).textContent}`);
    console.log(`Elements: ${item.querySelectorAll(`li`).length}`);
});
