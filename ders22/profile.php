<?php
//definings
/*$nameArray=array("Ali","Veli","Zeki","Kamil","Sude","Buse","Merve","Hale");
$cityArray=array("Malatya","Elazığ","Erzurum","İstanbul","Afyon","Bolu","İzmir","Ankara");
$ageArray=array(53,23,17,43,45,50,20,33);
$jobArray=array("Teacher","Dentist","Engineer","Doctor","Musician","Artist","Student","Farmer");
$musicArray=array("Rock","Jazz","Pop","Techno","Electro","Blues","Punk","Punk");


//read
$id=$_GET["id"];
//if(!empty($id))
echo $nameArray[$id].' is a/an '.$jobArray[$id].'. He/She is living in '.$cityArray[$id].'. ';
echo $nameArray[$id].' is '.$ageArray[$id].' years old and like '.$musicArray[$id].' music.<br />';

echo '<hr />';*/



//definings2
//two dimensional array

$id=$_GET["id"];
$profile=array(
    array("name"=>"Ali","city"=>"Malatya","age"=>53,"job"=>"Teacher","music"=>"Rock"), //uye1 -> indis=0
    array("name"=>"Veli","city"=>"Elazığ","age"=>23,"job"=>"Dentist","music"=>"Jazz"), //uye2 -> indis=1
    array("name"=>"Zeki","city"=>"Erzurum","age"=>17,"job"=>"Engineer","music"=>"Pop"), //uye3 -> indis=2
    array("name"=>"Kamil","city"=>"İstanbul","age"=>43,"job"=>"Doctor","music"=>"Techno"), //uye4 -> indis=3
    array("name"=>"Sude","city"=>"Afyon","age"=>45,"job"=>"Musician","music"=>"Electro"),
    array("name"=>"Buse","city"=>"Bolu","age"=>50,"job"=>"Artist","music"=>"Blues"),
    array("name"=>"Merve","city"=>"İzmir","age"=>20,"job"=>"Student","music"=>"Punk"),
    array("name"=>"Hale","city"=>"Ankara","age"=>33,"job"=>"Farmer","music"=>"Rock")
);
//dizi[birinciboyut][ikinciboyut]

//echo $profile[5]["age"].'<br />';

//print_r($profile);
/*
$profile[]=array("name"=>"Jale","city"=>"Aydın","age"=>27,"job"=>"Chef","music"=>"Anatolian");
*/
/*$profile[23]["name"]="Nil";
$profile[23]["city"]="Tokat";
$profile[23]["age"]=41;
$profile[23]["job"]="Pilot";
$profile[23]["music"]="Rock";*/
//print_r($profile);
//read2
echo $profile[$id]["name"].' is a/an '.$profile[$id]["job"].'. He/She is living in '.$profile[$id]["city"].'. ';
echo $profile[$id]["name"].' is '.$profile[$id]["age"].' years old and like '.$profile[$id]["music"].' music.';


echo '<hr /><hr />All users: <br />';
for($i=0;$i<count($profile);$i++)
{
    if($i==$id) continue;
    echo $profile[$i]["name"].' is a/an '.$profile[$i]["job"].'. He/She is living in '.$profile[$i]["city"].'. ';
    echo $profile[$i]["name"].' is '.$profile[$i]["age"].' years old and like '.$profile[$i]["music"].' music.';
    echo '<br />';
}
/*
foreach($profile as $user){
    echo $user["name"].' is a/an '.$user["job"].'. He/She is living in '.$user["city"].'. ';
    echo $user["name"].' is '.$user["age"].' years old and like '.$user["music"].' music.';
    echo '<br />';
}*/
echo '<hr /><hr />Yaşı 25\'ten küçük olan ve Ankara\'da yaşamayan üyeler: <br />';
foreach($profile as $user){
    if($user["age"]<25 AND $user["city"]!="Elazığ"){
        echo $user["name"].' is a/an '.$user["job"].'. He/She is living in '.$user["city"].'. ';
        echo $user["name"].' is '.$user["age"].' years old and like '.$user["music"].' music.';
        echo '<br />';
    }
}

/*buradaki dizileri kullanarak;
    (1) ankara veya elazığda yaşayan üyeleri yazdırınız.
    (2) yaşı 35'ten küçük 20'den büyük üyeleri yazdırınız.
    (3) yaşı 40'tan küçük olan ve izmirde yaşamayan üyeleri yazdırınız.
    (4) yaşı 40'tan küçük olan veya izmirde yaşamayan üyeleri yazdırınız.
 */

?>