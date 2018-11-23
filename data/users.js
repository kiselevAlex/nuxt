import fake from 'faker';

let users = [];

function getUsers(){
    if (users.length == 0)
        for(let i = 0; i < 100; i++){
            users.push({
                fname: fake.name.findName,
                sname: fake.name.lastName,
                age: fake.age,
                email: fake.email,
                phone: fake.phone,
                avatar: fake.avatar,
            })
        }

    return users;
}

export default getUsers();