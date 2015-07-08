<?php
/*
header('Content-Type: application/json');
if (isset($_POST["action"]) && !empty($_POST["action"])) { //Checks if action value exists
    $action = $_POST["action"];
    switch($action) { //Switch case for value of action
      case "test": echo json_encode($_POST); break;
    }
  
}
*/

header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json");


  if (isset($_POST["action"]) && !empty($_POST["action"])) { //Checks if action value exists
    $action = $_POST["action"];
    switch($action) { //Switch case for value of action
      case "store_emails": store_emails(); break;
    }
  
}


function store_emails(){
  $return = $_POST;
  $email = $return['email_address'];
 // Specify your sqlite database name and path //
 $dir = 'sqlite:bash1664.db';
 $db = new SQLite3("bash1664.db") or die("cannot open database");
 $res = $db->query("SELECT name FROM sqlite_master WHERE type='table' AND name='emails'");
 
 // no table, create table
 
 if ($res->numColumns() && $res->columnType(0) != SQLITE3_NULL) { 
    $db->exec("INSERT INTO emails(EMAIL_ADDRESS) VALUES ('$email')"); 
} else { 
     // zero rows 
    $db->exec("CREATE TABLE emails (ID INTEGER PRIMARY KEY NOT NULL, EMAIL_ADDRESS CHAR(320) NOT NULL);");
    // Then insert the email after
    $db->exec("INSERT INTO emails(EMAIL_ADDRESS) VALUES ('$email')"); 

}

 //$results = $db->query('SELECT * FROM emails');
 //$data = array();
 
 /*
 while ($row = $results->fetchArray()) {
 	$data[] = $row[0] . " " . $row[1];
   
 }
 */
  //$return["email_address"] = json_encode($return);
  //echo json_encode($return);
  echo json_encode($return);
  exit;
}