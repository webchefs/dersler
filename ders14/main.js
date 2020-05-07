// DOM (Document Object Model)
// document, window
// window.location
// window.navigator


// console log / error / info

// console.table( { "isim" : ["Alihan","Yasin","Mehmet","Cem"],
// "Soyisim": ["KOÇ", "Baran", "Bütün", "Güleryüz"]
// } )

document.addEventListener("DOMContentLoaded", function (event) {


    var id_ile_eleman_bul = document.getElementById("buton1")
    console.log(id_ile_eleman_bul)

    var class_ile_eleman_bul = document.getElementsByClassName("bul")
    console.log(class_ile_eleman_bul[1])

    var tag_ile_eleman_bul = document.getElementsByTagName("p")
    console.log(tag_ile_eleman_bul[0])

    var isim_ile_eleman_bul = document.getElementsByName("soyisim")
    console.log(isim_ile_eleman_bul[0])


    var button_bul = document.getElementsByTagName("button")
    console.log(button_bul[1].classList)

    setTimeout(function () {
        tag_ile_eleman_bul[0].innerHTML = "<div>Selam</div>."
    }, 2000)

    button_bul[0].addEventListener('click', function () {
        console.log("İlk butona tıkladın")
        
    })

    button_bul[1].addEventListener('mouseover', function () {
        console.log("Mouse ile üstünden geçtin.")
    })

    var element = "a"
    document.getElementsByTagName(element)[0].addEventListener('click', function (event) {
        event.preventDefault()
    })



    var buton_sayisi = button_bul.length

    for (var indis = 0; indis < buton_sayisi; indis++) {

        console.log("Döngüdeki buton indisi:" + indis)
        console.log(button_bul[indis])

    }


    var yeni_ul = document.createElement("ul")
    var yeni_li = document.createElement("li")
    yeni_ul.appendChild(yeni_li)
    yeni_ul.appendChild(yeni_li)
    yeni_ul.appendChild(yeni_li)
    var degisken = "<p>Selam arkadaşlar</p>"
    yeni_li.innerHTML = degisken

    yeni_li.className = "bul yeni"

    document.getElementsByTagName('div')[0].appendChild(yeni_ul)





});

// document.getElementById
// document.getElementsByClassName
// document.getElementsByName
// document.getElementsByTagName
// document.createElement

// element.id
// element.classList
// element.className
// element.innerHTML
// element.innerText
// element.appendChild
// element.removeChild
// element.addEventListener
// element.tagName
// element.hasChildNodes()
// element.childNodes


// document.addEventListener("DOMContentLoaded", function(event) {


// });

document.addEventListener("visibilitychange", function () {

    if (document.hidden) {
        document.getElementsByTagName('title')[0].innerText = "Gittiniz."
    } else {
        document.getElementsByTagName('title')[0].innerText = "Hoş Geldiniz.."
    }
})

// dom EVENTS https://www.w3schools.com/jsref/dom_obj_event.asp
// event.preventDefault()