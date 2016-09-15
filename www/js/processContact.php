<?php

$errors = array();
$input = array();
$data = array();

$_POST = json_decode(file_get_contents('php://input'), true);

if(empty($_POST['email'])){
	$errors['email'] = 'Gib deine Emailadresse ein';
}else{
	$input['email'] = $_POST['email'];
}

$input['nachricht'] = $_POST['nachricht'];
	
if(!empty($errors)){
	$data['errors'] = $errors;
}else{
	$data['message'] = $input;
}

echo json_encode($data);

?>