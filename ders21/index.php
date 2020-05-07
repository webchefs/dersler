<?php
    //---------- Veri tipleri ve sabitler ----------//

    /*  ---------> Veri Tipleri: String, Integer, Float, Boolean, NULL, Array,Object <---------- */

    $isim='Mehmet';
    $yas=30;
    //var_dump($yas);
    $yas2="30";
    //var_dump($yas2);
    $kilo=65.7;
    //var_dump($kilo);
    //echo $kilo;
    $durum=true;
    //var_dump($durum);
    //echo $durum;
    $adres=NULL;
    //var_dump($adres);
    $adres2='';
    //var_dump($adres2);

    $meyveler= array("Elma","Armut","Karpuz","Kivi");
    //echo $meyveler[2];
    $meyveler[]='Kavun';

    //echo ' Dizinin eleman sayısı: '.count($meyveler);
    //print_r($meyveler);
    $sebzeler[]='Domates';
    $sebzeler[]='Biber';
    $sebzeler[]='Patlıcan';
    //print_r($sebzeler);

    $araclar= array(15=>"Fiat",17=>"Ford",25=>"Opel",40=>"Dacia");
    //echo $araclar[17];
    $user=array("name"=>"Hasan", "age"=>17, "job"=>"Student");
    //print_r($user);
    //echo 'Kullanıcı adı: ' . $user["name"] . ', Yaşı: ' . $user["age"] . ', Mesleği: '.$user["job"].'...';

    echo '<hr />';
    /* ---------> SABITLER <---------- */

    //kullanım: define(name, value, case-insensitive)

    define("SITEADI", "http://webchefs.club");
    //echo SITEADI;
    define("DESC", "Web Chefs, web teknolojileri", true);
    //echo '<br />';
    //echo desc;


    echo '<hr />';
    
    //---------------- Operatörler ----------------//

    /* ---------> MATEMATIKSEL OPERATORLER: +, -, *, /, % (mod), ** <---------- */
    
    $x=5;
    $y=3;
    /*
    echo $x+$y;     //8
    echo '<br />';
    echo $x-$y;     //2
    echo '<br />';
    echo $x*$y;     //15
    echo '<br />';
    echo $x/$y;     //1,66
    echo '<br />';
    echo $x%$y;     //2
    echo '<br />';
    echo $x**$y;    //125
    echo '<br />';
    echo $y**3;     //27
    */

    /* ---------> ATAMA OPERATORLERI: =, +=, -=, *=, /=, .=, %= <---------- */

    /*$isim="Ahmet";
    $yas="25";
    $yas+=2;
    echo $yas;
    echo '<br />';
    $yas-=10;
    echo $yas;
    $yas*=6;
    echo '<br />';
    echo $yas;
    $yas/=2;
    echo '<br />';
    echo $yas;
    $isim.=" Baha";
    echo '<br />';
    echo $isim;
    $saat=15;
    $saat%=12;
    echo '<br />';
    echo $saat;*/


    /* ---------> KARSILASTIRMA OPERATORLERI (BOOLEAN Döndürür): == (eşit mi), === (denk mi), != (eşit değil di mi), <> (eşit değil di mi), 
    !== (denk değil di mi), > (büyük mü), >= <---------- */
    $yas=25;
    $isim="mehmet";/*
    var_dump($yas==15);
    echo '<br />';
    var_dump($yas=="15");   
    echo '<br />'; 
    var_dump($isim!="ali"); 
    echo '<br />';
    var_dump($isim!=="mehmet");  //false
    echo '<br />';
    var_dump($yas>18); 
    echo '<br />';
    var_dump($yas>=35); 
    echo '<br />';*/

    /* ---------> ARTIM/AZALTIM OPERATORLERI: ++$x,--$x, $x++, $x-- <---------- */
    /*$x=17;
    $y=17;
    echo ++$x;
    echo '<br />';
    echo $y++;
    echo '<br />';

    $z=20;
    $t=20;
    echo --$z;
    echo '<br />';
    echo $t--;
    echo '<br />';*/

    /* ---------> MANTIKSAL OPERATORLERI: AND, OR, XOR, &&, ||, ! <---------- */

    /*var_dump($yas>18 AND $isim=="mehmet"); //(true VE true) => true------>sadece iki taraf doğruysa çalışır
    echo '<br />';
    var_dump($yas>118 AND $isim=="mehmet"); // (false VE true) =>false
    echo '<br />';
    var_dump($yas>118 AND $isim=="ali"); // (false VE false) =>false
    echo '<br />';

    var_dump($yas>18 OR $isim=="mehmet"); //(true VEYA true) => true------>en az biri doğruysa çalışır
    echo '<br />';
    var_dump($yas>118 OR $isim=="mehmet"); // (false VEYA true) =>true
    echo '<br />';
    var_dump($yas>118 OR $isim=="ali"); // (false VEYA false) =>false
    echo '<br />';*/

    var_dump($yas>18 XOR $isim=="mehmet"); //(true XOR true) => false------>sadece biri doğruysa çalışır
    echo '<br />';
    var_dump($yas>118 XOR $isim=="mehmet"); // (false XOR true) =>true
    echo '<br />';
    var_dump($yas>118 XOR $isim=="ali"); // (false XOR false) =>false
    echo '<br />';

    /* ---------> DIZI OPERATORLERI: +, ==, ===, !=, <>, !== <---------- */  

    //echo '<hr />';

    


?>