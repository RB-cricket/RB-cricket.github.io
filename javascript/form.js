function namef()
{
var checkname = /^[a-z]+$/;
var cn = checkname.test(ff.Name.value);
if(cn==false){
document.getElementById("namett").innerHTML=" Please type in text only";
return false;
}
else{
document.getElementById("namett").innerHTML="Correct";
return true;
}
}

function emailf()
{
var checkemail = /[a-z]+@[a-z]+.com/;
var ce = checkemail.test(ff.Email.value);

if(ce==false){
document.getElementById("emailt").innerHTML=" Please provide your email in format of abc@xyz.com";
return false;
}
else{
document.getElementById("emailt").innerHTML="Correct";
return true;
}
}

function mobilef()
{
var checkmobile = /^[0-9]+$/;
var cm = checkmobile.test(ff.MobileNumber.value);

if(cm==false){
document.getElementById("mobilet").innerHTML="Please type only numbers";
return false;
}
else{
document.getElementById("mobilet").innerHTML="Correct";
return true;
}
}

function addf()
{
var checkadd = /^[0-9 a-z]+$/;
var ca = checkadd.test(ff.Address.value);
if(ca==false){
document.getElementById("addt").innerHTML="Please write only numbers and text";
return false;
}
else{
document.getElementById("addt").innerHTML="Correct";
return true;
}
}

function possf()
{
var checkposs = /^[a-z]+$/;
var cp = checkposs.test(ff.Position.value);
if(cp==false){
document.getElementById("posst").innerHTML="Please write only in text";
return false;
}
else{
document.getElementById("posst").innerHTML="Correct";
return true;
}
}

function passf()
{
var checkpass = /^[a-z]+$/;
var cp = checkpass.test(ff.Passport.value);
if(cp==false){
document.getElementById("passt").innerHTML="Please write only in text";
return false;
}
else{
document.getElementById("passt").innerHTML="Correct";
return true;
}
}
