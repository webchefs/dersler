<?php
require __DIR__ .'/vendor/autoload.php';
use WebChefs\DB;

$connection = new DB();

$pdo = $connection->getInstance();

$sql = "SELECT * FROM user ORDER BY id DESC";
 
$statement = $pdo->prepare($sql);
 
$statement->execute();
 
$cols = $statement->fetchAll(PDO::FETCH_ASSOC);

echo "<pre>";
print_r($cols);
echo "</pre>";
