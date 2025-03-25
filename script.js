function Login(){
    const name=document.getElementById('name').value;
    const pass=document.getElementById('pass').value;
    if(name==='user'&&pass==='user'){
        alert('login success');
        window.location.href='user.html';
    }
    else{
        alert('Enter valid username/password');
    }
}
function Register(){
    const name=document.getElementById('name').value;
    const age=document.getElementById('age').value;
    const mail=document.getElementById('mail').value;
    const add=document.getElementById('add').value;
    const dob=document.getElementById('dob').value;
    const occ=document.getElementById('occ').value;
    const income=document.getElementById('income').value;
    const pass=document.getElementById('pass').value;
    const ph=document.getElementById('ph').value;
    var len=ph.length;
    if(!name){
        alert('enter valid name');
    }
    else if(age>=0 && age>=120){
        alert('enter the valid age');
    }
    else if(len!=10){
        alert('enter phone valid number');
    }
    else if(!add){
        alert('enter valid address');
    }
    else if(!dob){
        alert('enter valid DoB');
    }
    else if(!occ){
        alert('enter a occupation');
    }
    else if(income<0){
        alert('enter a positive income');
    }
    else if(!pass){
        alert('enter the valid password');
    }
    else{
        saveCookie();
        //window.location.href='index.html'
       
    }
}
function saveCookie(){
    let name=document.getElementById('name').value;
    let pass=document.getElementById('pass').value;
    document.cookie=`name=${name};path=/;max-age=36000`;
    document.cookie=`pass=${pass};path=/;max-age=36000`;
    alert('details saved as cookie');
    let cookies=document.cookie.split("; ");
    let cookiesData={};
    cookies.forEach(cookie=>{
        let [name,value]=cookie.split('=');
        cookiesData[name]=value;
    });
    if(cookiesData.name){
        console.log(cookiesData.name);
        alert(`Welcome ${cookiesData.name}!`);
        window.location.href='index.html';
    }
}
function logout(){
    
    window.location.href='index.html';
}