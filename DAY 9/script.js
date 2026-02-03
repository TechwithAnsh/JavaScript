const query = document.querySelectorAll("#content p");
console.log(query);
query.textContent="bhjcn cjn fejhkj efwjhkj"


// querySelectorAll
const query2 = document.querySelectorAll("p");
console.log(query2,"query");

for(let i=0; i<query.length; i++){
    query[i].textContent="bhjcn cjn fejhkj efwjhkj"
}

const ptag = document.getElementsByTagName("p");
console.log(ptag);
for (let i = 0; i < ptag.length; i++) {
    ptag[i].textContent = "hello my name is Ansh";
    if (i % 2 === 0) {
        ptag[i].style.color = "blue";
    } else {
        ptag[i].style.color = "green";
    }
}
ptag[ptag.length - 1].style.fontWeight = "bold";