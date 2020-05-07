'use strict'
/* IF ELSE */
let degisken1 = 10

if (degisken1 > 10) {

    console.log('X 10\'dan büyüktür.')

} else if (degisken1 < 10) {

    console.log('X 10\'dan küçüktür.')

} else {

    console.log('X 10\'a eşittir.')

}

/* FOREACH */
let dizi = ['one','two','three']

dizi.forEach(function(eleman, indis){

    console.log(indis+' indisli elemanın değeri:'+eleman)

})

/* SWITCH CASE */
let degisken2 = 20

switch (degisken2) {

    case 10:

        console.log('Değişkenin değeri 10.')

        break;

    case 20:

        console.log('Değişkenin değeri 20.')

        break;

    case 30:

        console.log('Değişkenin değeri 30.')

        break;

    default:

        console.log('Değişkenin değeri 10, 20 veya 30 değil.')

        break;

}


/* WHILE */
let degisken3 = 25

while (degisken3 < 30) {

    console.log('Değişkenin şu anki değeri: ' + degisken3 + ' ve 30\'dan küçük.')

    degisken3++

}

/* FOR */

// ÖRNEK 1
let degisken4 = 5

for (var i = 0; i < degisken4; i++) {

    console.log('Döngünün şu anki değeri: ' + i + ', değişkenin değeri:'+ degisken4)

}

// ÖRNEK 2
let obje1 = {'meyve':'elma', 'sebze':'patates', 'hayvan':'kedi'}

for (var k of Object.keys(obje1)) {

    console.log('Döngüdeki anahtar:' + k + ', Anahtarın değeri:'+ obje1[k])

}


/* TRY CATCH FINALLY THROW */

function hatafirlat(){

    throw 'Bu hata fonksiyondan fırlatıldı.'

}

// ÖRNEK 1
try {

    hatafirlat()

} catch (hata) {

    console.log(hata)

} finally {
    console.log('Bu mesaj istesek de istemesek de yayınlanacak.')
}

// ÖRNEK 2
try {

    degisken5 = 50

} catch (bilinmeyen_hata) {

    console.log('Bu mesaj bilinmeyen hata olarak fırlatıldı:')
    
    console.log(bilinmeyen_hata)

}