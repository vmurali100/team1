
var users =[];
async  function  getUsers(){
    let usersData = await fetch("http://localhost:3000/users")
    users = await usersData.json()
    users = JSON.parse(localStorage.getItem("users"))
    displaydata()
    console.log(users)
   
}

users = JSON.parse(localStorage.getItem("users"))
if(users == null){
   users = [] 
}
   
// var users = [];
        // function getUsers() {
        //     var getinfo = new XMLHttpRequest()
        //     getinfo.onreadystatechange = function () {
        //         if (getinfo.readyState == 4 && getinfo.status == 200) {
        //             users = JSON.parse(getinfo.response)
        //             console.log(users)
        //             displaydata()
        //             localStorage.setItem("users",JSON.stringify(users))
        //         }
        //     }
        //     getinfo.open("GET", "http://localhost:3000/users")
        //     getinfo.send()
        // }  
getUsers()

function displaydata(){
    for(i=0;i<users.length;i++){
    var mytr = document.createElement("tr")
    for(a in users[i]){
        var mytd = document.createElement("td")
        mytd.innerHTML = users[i][a]
        mytr.appendChild(mytd)
    }

    var edittd = document.createElement("td")
    var editbtn = document.createElement("button")
    // editbtn.innerHTML ="Edit"
    // editbtn.setAttribute("onclick","editUser("+i+")")
    editbtn.setAttribute("class", "btn btn-warning")
    var anchor = document.createElement("a")
    anchor.innerHTML ="Edit";
    anchor.setAttribute("href","edit.html?="+ i)
    editbtn.appendChild(anchor)
    edittd.appendChild(editbtn)
    mytr.appendChild(edittd)

    var deletetd = document.createElement("td")
    var deletebtn = document.createElement("button")
    deletebtn.innerHTML ="Delete"
    deletebtn.setAttribute("onclick","deleteUser("+i+")")
    deletebtn.setAttribute("class", "btn btn-danger")
    deletetd.appendChild(deletebtn)
    mytr.appendChild(deletetd)

    document.querySelector("tbody").appendChild(mytr)
    }
}
displaydata()