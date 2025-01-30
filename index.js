

document.addEventListener("DOMContentLoaded", () => {
    console.log("Hello World");
    let fruits = ["Apple", "Banana"];
    console.log(fruits.length);

    fruits.push("Orange");
    fruits.pop();
    fruits.shift();
    fruits.unshift("Apple");
    fruits.splice(1, 0, "Lemon", "Kiwi");
    fruits.splice(0, 1);
    console.log(fruits);

    let slicedFruits = fruits.slice(1, 3);
    console.log(slicedFruits);

    let result = fruits.indexOf("Banana");
    console.log(result);

    fruits.forEach((item, index) => {
        console.log(item, index);
    });

    console.log(fruits.map(value => value.toUpperCase()));
    let filteredFruits = fruits.filter(value => value === "apple");
    console.log(filteredFruits);

    let htmllist = fruits.map(value => `<li>${value}</li>`).join('');
    document.body.innerHTML += `<ul>${htmllist}</ul>`;
});
    