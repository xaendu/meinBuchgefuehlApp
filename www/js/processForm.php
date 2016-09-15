<?php

$errors = array();
$input = array();
$data = array();

$_POST = json_decode(file_get_contents('php://input'), true);

if(empty($_POST['vorname'])){
	$errors['vorname'] = 'Gib deinen Vornamen ein';
}else{
	$input['vorname'] = $_POST['vorname'];
}
if(empty($_POST['nachname'])){
	$errors['nachname'] = 'Gib deinen Nachnamen ein';
}else{
	$input['nachname'] = $_POST['nachname'];
}
if(empty($_POST['strasse'])){
	$errors['strasse'] = 'Gib deine Strasse ein';
}else{
	$input['strasse'] = $_POST['strasse'];
}
if(empty($_POST['hausnummer'])){
	$errors['hausnummer'] = 'Gib deine Hausnummer ein';
}else{
	$input['hausnummer'] = $_POST['hausnummer'];
}
if(empty($_POST['plz'])){
	$errors['plz'] = 'Gib die Postleitzahl deiner Stadt ein';
}else{
	$input['plz'] = $_POST['plz'];
}
if(empty($_POST['stadt'])){
	$errors['stadt'] = 'Gib die Stadt ein, in der das Buch geliefert werden soll';
}else{
	$input['stadt'] = $_POST['stadt'];
}
if(empty($_POST['land'])){
	$errors['land'] = 'Gib das Land ein, in das das Buch geliefert werden soll';
}else{
	$input['land'] = $_POST['land'];
}
if(empty($_POST['email'])){
	$errors['email'] = 'Gib deine Emailadresse ein';
}else{
	$input['email'] = $_POST['email'];
}
if(empty($_POST['karte'])){
	$errors['karte'] = 'Gib ein, ob du Visa oder Mastercard hast.';
}else{
	$input['karte'] = $_POST['karte'];
}
if(empty($_POST['kartennr'])){
	$errors['kartennr'] = 'Gib deine Kreditkartennummer ein';
}else{
	$input['kartennr'] = $_POST['kartennr'];
}
if(empty($_POST['pruefziffer'])){
	$errors['pruefziffer'] = 'Gib die Pruefziffer deiner Kreditkarte ein';
}else{
	$input['pruefziffer'] = $_POST['pruefziffer'];
}
	
if(!empty($errors)){
	$data['errors'] = $errors;
}else{
	$data['message'] = $input;
}

echo json_encode($data);

?>