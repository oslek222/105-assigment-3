function displayUsers(users){
    //traval array
for(let i=0;i<users.length;i++){
    //get each 
let user = users[i];
    //display user
let sytax=`
<tr>
    <td> ${user.email}</td>
    <td> ${user.firstName}</td>
    <td> ${user.lastName}</td>
    <td> ${user.age}</td>
    <td> ${user.adress}</td>
    <td> ${user.phone}</td>
    <td> ${user.payment}</td>
    <td> ${user.color}</td>
    <td> ${user.user}</td>

</tr>
`
$("#tblUsers").append(sytax)
    //apppend user to dom
}
}
function init(){
    console.log("listing users");
    var users = readUsers(); //fnis on store manager
    displayUsers(users);
    $("#btnClear").click(function(){
        clearUsers();
        location.reload();
    })
}
window.onload=init;