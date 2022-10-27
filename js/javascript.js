function getName(){
    let n = prompt("Давайте знакомиться! Как Вас зовут?");
    return n;
}

function helloToUser(n){
    alert(`Привет, ${n}!`);
}


let name = getName();
helloToUser(name);
