const contactForm = document.getElementById("1c");
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let msg = document.getElementById('message');
let mno = document.getElementById('mno');

contactForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    
    let formdata = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        msg: msg.value,
        mno: mno.value

    }
    let xhr = new XMLHttpRequest();
    xhr.open('POST','/');
    xhr.setRequestHeader('content-type','application/json');
    xhr.onload = function(){
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent');
            name.value = '';
            email.value = '';
            subject.value = '';
            msg.value = '';
            mno.value = '';
        }
        else{
            alert("Something went wrong!");
        }
    }
    xhr.send(JSON.stringify(formdata));
});
