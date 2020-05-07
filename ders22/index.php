<?php

    //------------------ IF-else ------------------//
    /*
    Kullanım:
    if (condition) {
        code to be executed if this condition is true;
    } elseif (condition) {
        code to be executed if this condition is true;
    } else {
        code to be executed if all conditions are false;
    }
    */
    //60-120 ay arasındaki çocuklar
    /*$minKosul=60;
    $maxKosul=120;
    $yasAy=$_GET["yasAy"];

    if ($yasAy<$minKosul){
        echo 'Yaşınız 60 ay veya daha büyük olmalıdır.';
    }
    else if($yasAy>$maxKosul){
        echo 'Yaşınız 120 ay veya 120 aydan daha küçük olmalıdır.';
    }
    else{
        echo 'Yaşınız uygun.';
    }*/


    echo '<hr />';
    //---------------- Switch-case ----------------//
    /*
    Kullanım:
    switch (n) {
        case label1:
            code to be executed if n=label1;
            break;
        case label2:
            code to be executed if n=label2;
            break;
        case label3:
            code to be executed if n=label3;
            break;
        ...
        default:
            code to be executed if n is different from all labels;
    }
    */

    /*switch($yasAy){
        case $yasAy<$minKosul:
        echo 'Yaşınız 60 ay veya daha büyük olmalıdır.';
        break;
        case $yasAy>$maxKosul:
        echo 'Yaşınız 120 ay veya 120 aydan daha küçük olmalıdır.';
        break;
        default:
        echo 'Yaşınız uygun.';
        break;
    }*/

    //echo '<hr />';
    //------------------ Döngüler -----------------//
    /*
    For Örnek:
    $meyveler = array( "elma","armut","çilek","muz");
    for($i=0; $i<count($meyveler); $i++) {
        echo $i.". Eleman: ".$meyveler[$i]." <br />";
    }
    */
    
    for($i=0; $i<5; $i++) {
        echo $i." <br />";
    }

    echo '<hr />';

    $meyveler = array( "elma","armut","çilek","muz","karpuz","kavun","kiraz", "vişne");
    //tüm meyveleri sırayla yazdıran for
    /*for($i=0; $i<count($meyveler); $i++) {
        echo $i.". Meyve: ".$meyveler[$i]." <br />";
    }
    echo '<hr />';
    //son 5 meyveyi yazdıran for
    for($i=count($meyveler)-5; $i<count($meyveler); $i++) {
        echo $i.". Meyve: ".$meyveler[$i]." <br />";

    }
    echo '<hr />';*/
    //meyveleri tersten yazdıran for
    for($i=count($meyveler)-1; $i>-1; $i--){
        echo $i.". Meyve: ".$meyveler[$i]." <br />";
    }
    echo '<hr />';/*
    //bazı elemanları yazdırmayalım
    for($i=0;$i<count($meyveler);$i++){
        if($i==2 | $i==4) continue;
        echo $i.". Meyve: ".$meyveler[$i]." <br />";
    }
    echo '<hr />';
    //bazı elemanları yazdırmayalım
    for($i=0;$i<count($meyveler);$i++){
        if($i==6) break;
        echo $i.". Meyve: ".$meyveler[$i]." <br />";
    }
    echo '<hr />';*/
    //kişisel alıştırma: mod kullanarak 2'nin katları olan elemanları yazdırmayan bir for döngüsü yazınız.

    /*
    While Örnek: //mysql_fetch_array ile kullanımı farklı
    $meyveler = array( "elma","armut","çilek","muz");
    $i = 0;
    while( $i < count($meyveler)) {
        echo $i.". Eleman: ".$meyveler[$i]." <br />";
        $i++;
    }
    */
    
    $meyveler = array( "elma","armut","çilek","muz","karpuz","kavun","kiraz", "vişne");
    $i = 0;
    while( $i < count($meyveler)) {
        echo $i.". Eleman: ".$meyveler[$i]." <br />";
        $i++;
    }
    echo '<hr />';
    //kişsel alıştırma: while ile (1) dizinin elemanlarını tersten yazıdırınız, (2) 5. den sonrasını yazdırmayan döngüyü yazınız


    /*
    Foreach Örnek:
    $meyveler = array( "elma","armut","çilek","muz");
    foreach( $meyveler as $meyve ) {
        echo "Meyvemiz: ".$meyve." <br />";
    }
    echo '<hr />';
    */

    $meyveler = array( "elma","armut","çilek","muz","karpuz","kavun","kiraz", "vişne");
    foreach( $meyveler as $meyve ) {
        echo "Meyvemiz: ".$meyve." <br />";
    }

?>