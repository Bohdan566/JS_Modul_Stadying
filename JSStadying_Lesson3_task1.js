
// -- змінює колір тексту елемнту з ід main_header на будь-який інший

let main_header = document.getElementById("main_header");

main_header.style.color = "blue";

// -- робить шириниу елементу ul 400 пікселів

let list_items = document.getElementsByTagName("ul");

console.log(list_items);

for(let index_1 of list_items){
    index_1.style.width = "400px"
    index_1.style.backgroundColor = "green";
    
};

// -- робить шириниу всіх елементів з класом linkList шириною 50%

let linkList = document.getElementsByClassName("linkList");

console.log(linkList);

for( let index_2 of linkList){
    index_2.style.width = "50%";
    index_2.style.backgroundColor = "lightblue";
    
    
};

// -- отримує текст який зберігається в елементі з класом listElement2

let listElement2 = document.getElementsByClassName("listElement2");

console.log(listElement2);

//-- отримує всі елементи li та змінює ім колір фону на сірий

// отримує всі елементи 'a' та додає їм клас anchor

let a = document.getElementsByTagName("a");

for(let index_3 of a){

    index_3.classList.add("anchor");
    index_3.style.color = "red";
};

console.log(a);

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів

for(let index_4 of a){
    if(index_4.innerText == "link3"){
        index_4.style.fontSize = "40px";
    };
};

// -- отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a

for(let index_5 of a){
    index_5.classList.add("element_XXX");
    index_5.innerText = index_5.innerText + " XXX";
};

console.log(a);

// -- отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()

// let sub_header = document.getElementsByTagName("h3");

// let color = prompt("Введіть колір");

// for(let index_6 of sub_header){
    
//     index_6.style.color = color;
// };

// console.log(sub_header);

// -- отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()

// for(index_7 of sub_header){
//     if(index_7.innerText == "content 2 segment"){
//         index_7.style.color = color;
//     };
// };

// -- отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()

// let content_1 = document.getElementsByClassName("content_1");

// let text = prompt("Введіть текст");

// for(index_8 of content_1){
//     index_8.innerText = text;
// };

// -- отримати елементи p та змінити їм paddin на довільне значення

// let paragraph = document.getElementsByTagName("p");


// for(index_9 of paragraph){
//     index_9.style.padding = "30px";
// };


// -- отримати елементи з класом text2 та змінити їм текст на довільне значення

let text_2 = document.getElementsByClassName("text2");

for(let index_10 of text_2){
    index_10.innerText = "Mission completed";
};



