<?php
$host = "localhost";
$dbusername = "root";
$dbpassword = "";
$dbname = "question";

//create connection
$conn = mysqli_connect($host , $dbusername, $dbpassword,$dbname);
mysqli_set_charset($conn,'utf8');
//check connection
if(!$conn) {
	die ("Connection failed: " . mysql_connect_error());
}
$sql = "SELECT * FROM hight";
$result = $conn->query($sql);
$data = array();
if($result->num_rows > 0) {
	//output data of each row
	while ($row = $result->fetch_assoc()) {
		$data['myQuestions'][] = $row;
	}
} 
$conn->close();
echo json_encode($data,JSON_UNESCAPED_UNICODE);
?>