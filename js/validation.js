const username = document.getElementById('cname')
const email = document.getElementById('cemail')
const number= document.getElementById('cnumber')

const form=document.getElementById('submit-form')
const errorElement = document.getElementById('error')



form.addEventListener('submit' ,(e)=> {
   
    checkInputs();

if(isFormVaild==true){
    form.submit();
}else{
    e.preventDefault()
}
    

   
})

function checkInputs(){
    const usernameValue= username.value.trim();
    const emailValue=email.value.trim();
   const numberValue= number.value.trim();

   if(usernameValue===''){
       setErrorFor(username,'User name reqired');
      

   }else{
       setSuccessFor(username);
   }




   if(emailValue===''){
    setErrorFor(email,'Email id is reqired');
    

} else if(!isEmail(emailValue)){
    setErrorFor(email,'Email is not vaild');

}

else{
    setSuccessFor(email);
}



if(numberValue===''){
    setErrorFor(number,'Number is reqired');

} else if(!isNumber(numberValue)){
    setErrorFor(number,'enter numbers only');

}

else{
    setSuccessFor(number);
}



   function setErrorFor(input,message){
       const formControl =input.parentElement;
       const small = formControl.querySelector('small');

       small.innerText =message;

       formControl.className = 'form-group-error'


   }

   function setSuccessFor(input){
    const formControl =input.parentElement;
    formControl.className = 'form-group-success'

}


function isEmail(email){
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );

}


function isNumber(number){
    return number.match(
        /[0-9]/
        );

}





   }
   