<?php 
namespace WebChefs;

class DB
{   
    
    private $pdo;

    public function __construct(){
        $this->connect();
    }

    private function connect(){
        $pdo = new \PDO("mysql:host=IP_ADDRESS;dbname=DB_ADI;charset=utf8", "KULLANICI_ADI", "ŞİFRE");
        $this->pdo = $pdo;
    }

    public function getInstance(){
        return $this->pdo;
    }
}
