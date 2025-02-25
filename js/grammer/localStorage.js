const user = {
    name : 'jo',
    age : 27,
    email : ['yoonhoo@saysoft.co.kr', 'naver.com']
}

const test = {
    name : 'tytttjo',
    age : 27,
    email : ['yoonhoo@saysoft.co.kr', 'naver.com']
}

localStorage.setItem('user', JSON.stringify(user));
localStorage.setItem('test', JSON.stringify(test));
console.log(JSON.parse(localStorage.getItem('user')));

