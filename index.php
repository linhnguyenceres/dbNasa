<?php require_once 'config.php';?>
<!DOCTYPE html>
<html>
<head>
<title>Question</title>
<meta charset='utf-8'>
<link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
<link rel="stylesheet" type="text/css" href="css/mystyle.css">
<script src="js/jquery-3.3.1.min.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jsforex.js"></script>
</head>
 
<body>
<h1>Bạn có đủ thông minh để trở thành nhà du hành vũ trụ của NASA không?</h1>
<form method='post' id='quiz_form'>
<?php
$response="SELECT * from questions";
$a = $conn->query($response);
while( $result = $a-> fetch_assoc()) { ?>
<div id="question_<?php echo $result['id'];?>" class='questions'>
<h2 id="question_<?php echo $result['id'];?>"><?php echo $result['id'].".".$result['question_name'];?></h2>
<div class='align'>
<input type="radio" value="1" id='radio1_<?php echo $result['id'];?>' name='<?php echo $result['id'];?>'>
<label id='ans1_<?php echo $result['id'];?>' for='1'><?php echo $result['answer1'];?></label>
<br/>
<input type="radio" value="2" id='radio2_<?php echo $result['id'];?>' name='<?php echo $result['id'];?>'>
<label id='ans2_<?php echo $result['id'];?>' for='1'><?php echo $result['answer2'];?></label>
<br/>
<input type="radio" value="3" id='radio3_<?php echo $result['id'];?>' name='<?php echo $result['id'];?>'>
<label id='ans3_<?php echo $result['id'];?>' for='1'><?php echo $result['answer3'];?></label>
<br/>
<input type="radio" value="4" id='radio4_<?php echo $result['id'];?>' name='<?php echo $result['id'];?>'>
<label id='ans4_<?php echo $result['id'];?>' for='1'><?php echo $result['answer4'];?></label>
<input type="radio" checked='checked' value="5" style='display:none' id='radio4_<?php echo $result['id'];?>' name='<?php echo $result['id'];?>'>
</div>
<br/>
<input type="button" id='next<?php echo $result['id'];?>' value='Next!' name='question' class='butt'/>
<input type="button" id='prev<?php echo $result['id'];?>' value='Prev!' name='question' class='butt'/>
</div>
<?php }?>
</form>
    
<div id='result'>
</div>

<body>