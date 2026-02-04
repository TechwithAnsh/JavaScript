const query = document.querySelectorAll("#content p");
console.log(query);
query.textContent="bhjcn cjn fejhkj efwjhkj"


// querySelectorAll
const query2 = document.querySelectorAll("p");
console.log(query2,"query");

for(let i=0; i<query.length; i++){
    query[i].textContent="bhjcn cjn fejhkj efwjhkj"
}

const para = document.getElementsByTagName("p");
console.log(para);
for (let i = 0; i < para.length; i++) {
    para[i].textContent = "My name is Ansh";
    if (i % 2 === 0) {
        para[i].style.color = "blue";
    } else {
        para[i].style.color = "green";
    }
}
para[para.length - 1].style.fontWeight = "bold";