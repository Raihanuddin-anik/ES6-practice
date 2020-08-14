// const person = {name: 'jack william', age: 17, job: 'facebooker', gfName:'Emma watson', address: "kochu khet", phone:'01748748947'}

// const {phone, gfName, salary, address} = person;

//   const gfName = person.gfName;
//  const phone = person.phone;

const complexObject = {
    name: 'abc',
    info: {
        adress:'kola bagan',
        leader: 'Tiger leader'
    }
}
const {leader} = complexObject.info;
// console.log(gfName, phone, salary, address);
// console.log(gfName, phone, salary, address);


const friend = ['Raihan uddin', 'Rasel bhuiyan', 'umme karima', 'mohammad ali']

const [chotofriend, nextFriend, ...restfriend] = friend
console.log(chotofriend)