<?php 

# https://php.net/manual/tr/function.error-reporting.php
# https://www.php.net/manual/tr/errorfunc.constants.php

// bunlar hata gösterimini açmak için
ini_set('display_errors', 1);
error_reporting(E_ALL);

// bunlar da ölümcül hataları yakalamak için
set_error_handler('hata_yakalayici');
register_shutdown_function('olumcul_hata_yakalayici');


function hata_yakalayici($code, $message, $file, $line){
    echo "$file isimli dosyada $line'ıncı satırda bir hata oluştu. Bu hatanın sonucu: $message ";
}

function olumcul_hata_yakalayici(){
    $son_hata = error_get_last();
    if($son_hata['type'] === E_ERROR ){
        hata_yakalayici(E_ERROR, $son_hata['message'], $son_hata['file'],$son_hata['line']);
    }
}
// bunlar da ölümcül hataları yakalamak için


function topla($a, $b){
    if( !is_integer($a) || !is_integer($b) ) {
        
       throw new Exception("Sadece tam sayıları toplayabilirsiniz.", 1854875);
    } else {
        return $a+$b;
    }
}



try {
    echo topla(2.4,6);  
} catch (\Exception $e) {
    echo $e->getCode();   
}