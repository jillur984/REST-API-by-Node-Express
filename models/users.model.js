const { v4: uuidv4 } = require('uuid');
const users=[

    {
        id:uuidv4(),
        username:"Md. Jillur Rahman",
        email:"jillur.cse.bd@gmail.com"
    },
    {
        id:uuidv4(),
        username:"Md. Abdul Muhith",
        email:"muhit.mern@gmail.com"
    }
]

module.exports=users