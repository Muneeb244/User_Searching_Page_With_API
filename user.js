var input = document.getElementById("text");
var result = document.getElementById("result");
const listItem = [];


input.addEventListener('input', (e) => {

    listItem.forEach(element => {
        if(element.innerText.toLowerCase().includes(e.target.value.toLowerCase())){
                element.classList.remove('hide');
        }else{
            element.classList.add('hide');
        }
    });
    
})
// console.log(listItem);


getData();
async function getData() {
    var users = await fetch('https://randomuser.me/api?results=20');
    var data = await users.json();

    result.innerHTML = '';

    
    for(let i = 0; i<data.results.length; i++){
        
        const newLi = document.createElement('li');
        newLi.classList = "list";
        newLi.innerHTML = `
        <img src="${data.results[i].picture.medium}" alt="Picture">
            <div class="user-info">
            <h4>${data.results[i].name.first}</h4>
            <p>${data.results[i].location.city}, ${data.results[i].location.country}</p>
            </div>
            `;
        listItem.push(newLi);
        result.appendChild(newLi);
    }
}
