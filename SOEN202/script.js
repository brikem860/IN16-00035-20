const fname = document.getElementById('fname')
const lname = document.getElementById('lname')
const password = document.getElementById('password')

const form = document.getElementById('formr')
const errorm = document.getElementById('errork')

form.addEventListener('submit', (e) => {
    let messages = []
    if(fname.value === '' || fname.value == null){
        messages.push('please enter the first name')
    }
    if(lname.value === '' || lname.value == null){
        messages.push('please enter the last name')
    }
    if(password.value.length < 6 || password.value.length >20){
        messages.push('password lengt should be 6-20 char')
    }
    if(messages.length > 0){
        e.preventDefault()
        errorm.innerText = messages.join(',')
    }
})



