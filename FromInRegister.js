// This function is gmail 
function gmail(){
    let raja=document.getElementById('inputgmail').value
if(raja.includes('@')){
    console.log("yes");
}else{
    window.alert("Please Enter Valid mail");
}
}
// This function is final alert
function sub(){
    window.alert("success fully updated");
}
// This function is select methods
function selectgender(){
    let gender=document.getElementById("seGender").value
    console.log(gender);
}
function selectcountry(){
    let country=document.getElementById("selectCountry").value
    console.log(country);
}
//This function is limit of litters
function faname(){
    let name=document.getElementById('fName')
    name.value=name.value.toUpperCase();
}
function laname(){
    let lastname=document.getElementById('lName')
    lastname.value=lastname.value.toUpperCase();
}

// This function is checking Password rules

function Npassword(){
    let Npass=document.getElementById('Newp').value;
    if((Npass.includes('123')) && (Npass.length>7)){
        console.log("correct");
    }else{
        window.alert("Please Enter Valid Password")
    }
}

function Lpassword(){
    let Lpass=document.getElementById('Lewp').value;
    if((Lpass.includes('123')) && (Lpass.length>7)){
        console.log("correct");
    }else{
        window.alert("Your Password is Not correct")
    }
}


// login function for gmail
function Logingmail(){
    let raja=document.getElementById('inputLogingmail').value
if(raja.includes('@')){
    console.log("yes");
}else{
    window.alert("Please Enter Valid mail");
}
}

// login function for Password
function Loginpassword(){
    let Loginpass=document.getElementById('Loginpos').value;
    if((Loginpass.includes('123')) && (Loginpass.length>7)){
        console.log("correct");
    }else{
        window.alert("invalid Password Please Enter Correct Password")
    }
}