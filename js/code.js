let btn = document.querySelector("#btn");
let tbody = document.querySelector('#body');

const table = ()=>{
    const url = "https://jsonplaceholder.typicode.com/users";
fetch(url)
.then(data=>data.json())
.then(data=>{
    data.forEach(user=>{
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
      //  let td4 = document.createElement("td");
        td.innerHTML = user.id;
        td2.innerHTML = user.name;
        td3.innerHTML = user.email;
      //  td4.innerHTML = user.address.city;
        tr.appendChild(td);
        tr.appendChild(td2)
        tr.appendChild(td3);
      //  tr.appendChild(td4);
        tbody.appendChild(tr);
    })
})

}

btn.addEventListener("click", table);
