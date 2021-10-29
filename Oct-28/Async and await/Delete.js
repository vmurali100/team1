function deleteUser(i) {
    var deleteinfo = new XMLHttpRequest()
    deleteinfo.onreadystatechange = function () {
        if (deleteinfo.readyState == 4 && deleteinfo.status == 200) {
            console.log("user deleted successfully")
            getUsers()
        }
    }
    deleteinfo.open("DELETE", "http://localhost:3000/users/"+users[i].id)
    deleteinfo.send()
}