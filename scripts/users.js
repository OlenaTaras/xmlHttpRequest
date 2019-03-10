request('http://localhost:3000/echo').then(getUserData.bind(this)).then(console.log);


function getUserData(users) {
return users.map((user) => user['name'])
}