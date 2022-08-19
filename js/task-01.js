const categoryList = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach(category => {
  console.log(``);
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});
