/*
-if, else, else if,
-switch, case, default,
-for loop, break, continue,
-for objets loop,
-forEach loop,
-while loop,
-try, catch, finally, throw
*/ 

/*
function controlForm() {
    alert("ne oluyor?");
    var username=document.getElementById("username").value;
    var pass=document.getElementById("pass").value;
    var usernameLenght=username.length;
    var passLenght=pass.length;

    if(usernameLenght<5){
        alert("Hata: isminiz en az 5 karakter olmalıdır");
    }
    else if (passLenght<8) {
        alert("Hata: parolanız en az 8 karakter olmalıdır");
    }
}

function forLoop(){
    for(var i=0; i<10; i++){
        //if (i==5) continue;
        console.log("Merhaba "+i);
        //if (i==4) break;
    }
}

function for2Loop(){
    let uye = {'isim':'mehmet', 'yas':30, 'meslek':'matematik'}

    for(var k of Object.keys(uye)){
        console.log("Anahtar:"+ k +" | Değeri: "+uye[k]);
    }
}
function forEachLoop(){
    var skills= ["HTML", "Css", "JavaScript", "JQuery", "PHP", ".net", "MySQL"];

    var number=1;
    skills.forEach(element => {
        console.log("[" +number+ "] " +element);
        number++;
    });
}

function whlLoop(){
    var skills= ["HTML", "Css", "JavaScript", "JQuery", "PHP", ".net", "MySQL"];

    var i=0;

    while(i<skills.length){
        console.log(skills[i]);
        //  if (i==2) break;
        i++;
    }
}

function switchLoop(){

    switch(username.value){
        case "Alihan":
        console.log("Hoşgeldin Patron");
        break;
        case "Murat":
        console.log("Nasılsın?");
        break;
        default:
        console.log("Tanıyamadım");
        break;
    }
}

function tryAndCatch(){

    try {
        country="Malatya yaz";
        console.log(country);
    } catch (error) {
        console.log("Hata: " + error);
    }
    finally{
        console.log("İşlem Tamam");
    }
}
 
function controlErrors(){

    try {
        if(username.value=="Mufit") throw "Banlısınız.";
        else if(username.value=="Malik") throw "Bu alana erişim yetkiniz yok.";
        else if(username.value=="Buse") throw "Üye değilsiniz.";
        else if(username.value=="Ali") console.log("Hoşgeldiniz.");
        else if(username.value.length>0) throw "Tanıyamadım?";
        else throw "Formu doldurunuz.";
    } catch (error) {
        console.log("Hata: " + error);
    }
    finally{
        console.log("Kontrol yapıldı.");
    }
}
*/

'use strict'

function controlForm() {
    //alert("ne oluyor?");
    var username=document.getElementById("username").value;
    var pass=document.getElementById("pass").value;
    var usernameLenght=username.length;
    var passLenght=pass.length;

    if(usernameLenght<5){
        alert("Hata: isminiz en az 5 karakter olmalıdır");
    }
    else if (usernameLenght>18) {
        alert("Hata: parolanız en az 8 karakter olmalıdır");
    }
    else if(false){
        alert("Giriş Başarılı");
    }
    else{
        alert("Giriş Başarısız");
    }
}


function switchLoop(){

    switch(username.value){
        case "Alihan":
        alert("Hoşgeldin Patron");
        console.log("Hoşgeldin Patron");
        break;

        case "Murat":
        console.log("Nasılsın?");
        break;

        case "Aslı":
        alert("Naber?");
        break;
        
        default:
        console.log("Tanıyamadım");
        break;
    }
}


function forLoop(){



    for(var i=0; i<24; i++){
        //if (i==5 || i==8) continue;
        //if (i==14) break;
        console.log('<li> <img src="images/1.jpg"> <div> <a href="http://webchefs.club/news/">2018 LGS Değerlendirmesi</a> </div> </li> No:' +i);
    }
}

function for2Loop(){
    let uye = {'isim':'mehmet', 'yas':30, 'meslek':'matematik'}

    for(var k of Object.keys(uye)){
        console.log("Anahtar:"+ k+" | Değeri: "+uye[k]);
    }
}

function forEachLoop(){
    var skills= ["HTML", "Css", "JavaScript", "JQuery", "PHP", ".net", "MySQL"];

    skills.forEach(deger => {
        console.log(deger);
    });
}

function whlLoop(){
    var skills= ["HTML", "Css", "JavaScript", "JQuery", "PHP", ".net", "MySQL"];
    var i=0;

    while(i<skills.length){
        //if (i==4) break;
        console.log(skills[i]);
        i++;
    }
}
function tryAndCatch(){

    try {
        country="Malatya yaz";
        console.log(country);
    } catch (error) {
        console.log("Hata: " + error);
    }
    finally{
        console.log("İşlem Tamam");
    }
}

function controlErrors(){

    try {
        if(username.value=="Mufit") throw "Banlısınız.";
        else if(username.value=="Malik") throw "Bu alana erişim yetkiniz yok.";
        else if(username.value=="Buse") throw "Üye değilsiniz.";
        else if(username.value=="Ali") console.log("Hoşgeldiniz.");
        else if(username.value.length>0) throw "Tanıyamadım?";
        else throw "Formu doldurunuz.";
    } catch (error) {
        console.log("Hata: " + error);
    }
    finally{
        console.log("Kontrol yapıldı.");
    }
}