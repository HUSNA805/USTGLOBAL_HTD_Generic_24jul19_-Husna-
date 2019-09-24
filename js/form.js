function validateForm(){
    let formData = document.forms[0];
    //console.log(formData);
    //console.log(formData.username.value);
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