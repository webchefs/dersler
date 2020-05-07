<?php

#https://www.w3schools.com/php/php_ref_overview.asp

$array = ['a','b','c','5','6','7',4,5,6];

$sayilar = [100,5,95,78,2, 0, -95];

$sayi = 9.49 ;

$tamsayi = 4;

$string = "Selam webchefs Nasılsın?";

$directory = "/var/www/webchefs/test.php";

// echo $string;
// echo "<br>";
// $sonuc = print($string);

// echo "<pre>";
// print_r($array);
// echo "</pre>";


// echo "selam <br>";
// echo "selam <br>";
//exit;
//die('Program burada bitti');
// echo "selam <br>";
// echo "selam <br>";



// count($array); //dizideki elemanları saymamız içindir.

// round($sayi); // en yakın tam sayıya yuvarlama işlemi yapar. 
// ceil( $sayi); // en yakın üstteki tam sayıya
// floor( $sayi); // en yakın alttaki tam sayıya 
// max($sayilar); // dizideki en büyük eleman
// min($array); // dizideki en küçük eleman.

// gettype($string); //değişkenin türü.

// is_string('7');
// is_integer($integer);
// is_object($object);
// is_array($array);

// $cumle = "selam arkadaşlar nasılsınız.";
// $cumle_kelimeleri = explode(' ', $cumle);
// print_r($cumle_kelimeleri);
// // explode($delimiter, $string);
// echo "<br>";
// echo implode(",||||", $cumle_kelimeleri);

// md5($string);
// substr($string, $start, $length); // default length is end of string
// str_replace($find ->string or array, $replace string or array, $string or $array, $count?);
// strlen($string);
// strpos($string, $find, $start?);

// trim($string);
// ltrim($string);
// rtrim($string);

// strtolower($string);
// strtoupper($string);
// ucfirst('asdfkajsf aslfjklasjfşajs');
// ucwords('asdfkasd asldkfhas jdhf jkashdfjk ashdfjk');

// dirname($directory);
// file_exists('try-catch.php');
// function_exists($function_name);


// $arr = ['asdf'=>1,2,3];

// echo in_array(2,$arr, true);
// array_merge($array1, $array2); // if there is same keys, last one used.
// array_key_exists($key, $array); 
// array_keys($array, $value="optional", $strict=false); // value gets the keys which has defined value, strict is depending on type
// array_values($array);

// 1 Ocak 1970 
// time();
echo date('Y M d F w');
