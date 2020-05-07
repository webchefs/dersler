// var arkadasin_ismi = "Alihan"

// var insan = { 
//     arkadasin_ismi,
//     lastname:"KOÇ",
//     age:29,
//     "bildigi_yazilim_dilleri":["PHP","Python","JS"],
//     "yasadigi_sehir":null,
//     "aldigi_dersler":{
//         "fizik":{
//             "hocasi":"Cengiz",
//             "ders_np":"asdf2asd"
//         },
//         "matematik":{
//             "hocasi":"Cengiz",
//             "ders_np":"asdf2asd"
//         },
//     },
//     tam_isim(){
//         return this.arkadasin_ismi + " " + this.lastname
//     }
// }

// console.log(insan.tam_isim())

// var obje2 = new Object()

// obje2.isim = "Mehmet"
// obje2.soyisim = "Bütün"
// obje2.tamisim = function (){
//     return this.isim+ " " + this.soyisim
// }

// new String()
// new Number()
// new Array()
// new Boolean() 
// new Function()


// var json_insan =`{
//     "isim":"Alihan",
//     "soyisim":"KOÇ",
//     "okul":"Türtep",
//     "diller":["PHP","Python","JS"],
//     "dogru":true,
//     "yas":29
// }`

// console.log(json_insan)

// var obje_insan = JSON.parse(json_insan)

// console.log(obje_insan)

// obje_insan.dogru = false

// var tekardan_json_insan = JSON.stringify(obje_insan)

// console.log(tekardan_json_insan)

// var tarih = new Date()

// console.log(tarih.getDate())

// console.log(Math.PI)
// console.log(Math.round(5.5))
// console.log(Math.ceil(5.1))
// console.log(Math.floor(5.9))
// console.log(Math.pow(8,2))
// console.log(Math.sqrt(64))
// console.log(Math.min(0, 150, 30, 20, -8, -200))
// console.log(Math.max(0, 150, 30, 20, -8, -200))


// var baglanti = new XMLHttpRequest()


// baglanti.open("POST", "https://reduva.com/users", {
//     "isim":"Alihan"
// });


// //baglanti.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// baglanti.send()


// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

// baglanti.onreadystatechange = function () {
//     if (this.readyState == 4) {
   
//         var uyeler = JSON.parse(this.response)
//         var toplam_h4u = document.getElementById("toplam")
//         toplam_h4u.innerText = "Toplam Sayı:" + uyeler.length

//         var uyeler_listesi = document.getElementById("uyeler")
        
//         uyeler.forEach(function(uye){
//             var li = document.createElement("li")
//             li.innerText = uye.profile.firstname + " " + uye.profile.lastname
//             uyeler_listesi.appendChild(li)
//         })

//     }
// }


// class Date {
//     firstname = "Bilinmiyor" 
//     sayHello(){
//         return "Hello " + this.firstname
//     }
//     setFirstname(name){
//         this.firstname = name
//     }
// }

// var selamsoyle = new Date ()

// selamsoyle.setFirstname("Alihan")

// console.log(selamsoyle.sayHello())
var dizi = [5, 8, 9, "Alihan", 879]
console.log( _.last( dizi  ))

