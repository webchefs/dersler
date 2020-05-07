// 'use strict'

// var object = new Object()

// object.firstname = 'Alihan'
// object.lastname = 'KOÇ'
// object.fullName = function () {
//     return this.firstname+ " " + this.lastname
// }
// var firstname = "Mehmet"
// var object2 = {
//     firstname,
//     "lastname":"BÜTÜN",
//     school:"Türtep",
//     fullName(){
//         return this.firstname+ " "+ this.lastname
//     }
// }

// console.log(object.fullName())
// console.log(object2.fullName())
// console.log(object2)

// var object3 = object 
// var object4 = _.cloneDeep(object) 
// object.firstname = "Metehan"

// console.log(object)
// console.log(object3)
// console.log(object4)

// class Hello {
//     sayHello = function (name) {
//         return "Hello "+name
//     }
// }

// var hello = new Hello()
// console.log(hello.sayHello("Kamil"))

// var tarih = new Date()
// console.log(tarih)
// console.log(tarih.getDate())

// var dizi = new Array()
// dizi.push("Eleman 1")
// dizi.push("Eleman 2")
// console.log(dizi)

// console.log(Math.PI)
// console.log(Math.LOG2E)
// console.log(Math.pow(8, 2))
// console.log(Math.max(0, 150, 30, 20, -8, -200))


// var json = `{
//     "isim":"Ahmet",
//     "soyisim":"İnsanoğlu",
//     "yas":25,
//     "bildigi_diller":["PHP","Python","JS"],
//     "sehir":null,
//     "aktif":true,
//     "ogrenci":false,
//     "aldigi_dersler":{
//         "fizik":{
//             "hocasi":"Cengiz",
//             "ders_kodu":"A154"
//         },
//         "matematik":{
//             "hocasi": "Hamit",
//             "ders_kodu": "A158"
//         }
//     }
// }`
// console.log(json)
// console.log(JSON.parse(json))
// console.log(  JSON.stringify(JSON.parse(json))  )

// var istek = new XMLHttpRequest()
// istek.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         console.log(JSON.parse(this.response))

//         var total = JSON.parse(this.response).length
        
//         document.getElementById('toplam').innerText = document.getElementById('toplam').innerText + " " +total

//         JSON.parse(this.response).forEach(user => {
//             var li = document.createElement('li')
//             li.innerText = user.profile.firstname + " " + user.profile.lastname

//           document.getElementById('uyeler').appendChild(li)
//         })
//     }
// }
// istek.open("GET", "https://reduva.com/users", true)
// //xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
// istek.send()