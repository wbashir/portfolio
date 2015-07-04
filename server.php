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
      case "test": test_function(); break;
    }
  
}


function test_function(){
  $return = $_POST;
  $email = $return['email_address'];
 // Specify your sqlite database name and path //
 $dir = 'sqlite:bash1664.db';
 $db = new SQLite3("bash1664.db") or die("cannot open database");
 $db->exec("INSERT INTO emails(EMAIL_ADDRESS) VALUES ('$email')");
 $results = $db->query('SELECT * FROM emails');
 $data = array();

 while ($row = $results->fetchArray()) {
 	$data[] = $row[0] . " " . $row[1];
   
}
  //$return["email_address"] = json_encode($return);
  //echo json_encode($return);
  echo json_encode($data);
  exit;
}