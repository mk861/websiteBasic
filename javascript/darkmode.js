const check =document.getElementById("check")

//If darkMode doesn’t exist in the LocalStorage, create it. False by default
if (localStorage.getItem('darkMode')===null){
    localStorage.setItem('darkMode', "false");
}

const link = document.createElement('link');
link.rel = 'stylesheet';
link.type = "text/css";
link.href =  "/coursework/css/navbar.css"
document.getElementsByTagName('HEAD')[0].appendChild(link);

checkStatus()

function checkStatus(){
    if (localStorage.getItem('darkMode')==="true"){
        check.checked = true;
        document.getElementsByTagName("p1")[0].style.color="#FFF";
        document.getElementsByTagName("p")[0].style.color="#FFF";
        document.getElementsByTagName("h1")[0].style.color="#FFF";
        document.getElementsByTagName("h2")[0].style.color="#FFF";
        document.body.style.backgroundColor = "gray";
    }else{
        check.checked = false;
        document.getElementsByTagName("p1")[0].style.color="black";
        document.getElementsByTagName("p")[0].style.color="black";
        document.getElementsByTagName("h1")[0].style.color="black";
        document.getElementsByTagName("h2")[0].style.color="black";
        document.body.style.backgroundColor = "#F9F9F9";
    }
}

function changeStatus(){
    if (localStorage.getItem('darkMode')==="true"){
        localStorage.setItem('darkMode', "false");
        document.getElementsByTagName("p1")[0].style.color="black";
        document.getElementsByTagName("p")[0].style.color="blacks";
        document.getElementsByTagName("h1")[0].style.color="black";
        document.getElementsByTagName("h2")[0].style.color="black";
        document.body.style.backgroundColor = "#F9F9F9";
    } else{
        localStorage.setItem('darkMode', "true");
        document.getElementsByTagName("p1")[0].style.color="#FFF";
        document.getElementsByTagName("p")[0].style.color="#FFF";
        document.getElementsByTagName("h1")[0].style.color="#FFF";
        document.getElementsByTagName("h2")[0].style.color="#FFF";
        document.body.style.backgroundColor = "gray";
    }
}