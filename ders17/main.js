// document.addEventListener("DOMContentLoaded", function () {

// })


// $("document").ready(function(){

// })

$(function(){
    $("#test").click(function(){
        // var metin1 = $("#h2_1").text()
        // $("#h2_1").text("<li>Bu şu an değiştirildi.</li>")
        // var metin3 = $("#elementler").html()
        // $("#h2_1").html("<li>Bu şu an değiştirildi.</li>")
        // var isim = $("#isim").val()
        // $("#yas").val(isim)

        //$("#section_1").prepend("<h1>Bu bir h1 tagıdır.</h1>")
        //$("#section_1").append("<h1>Bu bir h1 tagıdır.</h1>")
        // $("#h2_1").before("<h1>Bu bir h1 tagıdır.</h1>")
        // $("#h2_1").after("<h1>Bu bir h1 tagıdır.</h1>")

        // $("#div_ul").empty() // içini boşaltır
        // $("#div_ul").remove() // kendisini de siler

        // var eleman = $("#section_1").children()
        // var eleman2 = $("#h2_1").parent()
        // var eleman2 = $("#h2_1").parents()
        // var eleman2 = $("#h2_1").parentsUntil("body")

        // var eleman = $("#elementler li").first()
        // var eleman2 = $("#elementler li").last()
        // var eleman3 = $("#elementler li").eq(2)

        // var liler = $("#elementler li").not(".beni_secme")

        // $("#elementler li").filter(function(index){
        //     if(index == 3){
        //         console.log($("#elementler li")[index])
        //     }
            
        // })
      
        

    })

    $("#kisi_formu").submit(function(event){
        event.preventDefault()

        var veri = $("#kisi_formu").serialize()

        $.ajax({
            type:"post",
            dataType:"text",
            data:veri,
            url: "https://webchefs.club/test/form-test3.php",
            success(succ){
                $("#sonuclar").html(succ)
            },
            error(e){
                console.log(e)
            }
            
        })
        
    })





})


// PURE JS, VANILLA JS
