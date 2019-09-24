
function showPasswrd(){
    if(type === passwrd){
        textContent.type('text');
    }else{
        textContent.type('password')
    }
}

function validateForm(){
    let formData = document.forms[0];
    let userName = formData.uName.value;
    let passwrd = formData.passwrd.value;
    if(userName.length > 4 && passwrd.length > 7){
        console.log('success');
        formData.uName.style.border = "2px solid green";
        formData.passwrd.style.border = "2px solid green";
    }else{
        formData.uName.style.border = "2px solid red";
        formData.passwrd.style.border = "2px solid red";
    }
}

// function submit(loginSubmit){
//     let createTable = document.getElementById('table');
//     let trData = document.getElementById('tr');
//     createTable.textContent = loginSubmit.value;
//     document.createElement.appendchild(trData);
// }


// let tableEle = document.createElement('table');
// let tr1 = document.createElement('tr');
// let td1 = document.createAttribute('td');
// let td2 = document.createAttribute('td');
// let tr2 = document.createElement('tr');


function addData() {
    var x =document.getElementById('uName').value;
    var y =document.getElementById('passwrd').value;
    var rows = '';
    rows += '<tr><td>'+ uName + '</td><td>' + passwrd + "</td></tr>";
    $(rows).appendTo('#tab tbody');
}