let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}
//no 4 bagian A
const profile = {
    name: 'Rayhan ilham Sukmawan',
    email: 'Rayhangt89@gmail.com',
    hobby: 'Gaming, Reading and Singing'
}

const result = { ...data, ...profile }

console.log(result);

//no 4 bagian B
const streetAndCity = `${data.address.street} ${data.address.city}`

console.log(streetAndCity);