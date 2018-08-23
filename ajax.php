<?php require_once 'config.php';

$response="SELECT id,question_name,answer from questions";
$a = $conn->query($response);
$i=1;
$right_answer=0;
$wrong_answer=0;
$unanswered=0;
while( $result = $a-> fetch_assoc()){ 
      if($result['answer'] == $_POST["$i"]){
          $right_answer++;
      }else if($_POST["$i"] == 5){
          $unanswered++;
      }
      else{
          $wrong_answer++;
      }
      $i++;
}
echo "<div id='answer'>";
echo " Số câu đúng  : <span class='highlight'>". $right_answer."</span><br>";

echo " Số câu sai  : <span class='highlight'>". $wrong_answer."</span><br>";

echo " Số câu hỏi không trả lời  : <span class='highlight'>". $unanswered."</span><br>";
echo " <h1>Số điểm  : ". ($right_answer)*20 ." % </h1>";
echo "</div>";
?>