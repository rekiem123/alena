<?php
error_reporting (E_ALL ^ E_NOTICE);
$post = (!empty($_POST)) ? true : false;
if($post) {
	

	$name = stripslashes($_POST['formname']);
	$to = trim($_POST['to']);
	$email = trim($_POST['formemail']);
	$subject = stripslashes($_POST['subject']);
	$formadd1 = stripslashes($_POST['formadd1']);
	$formadd2 = stripslashes($_POST['formadd2']);
	$formadd3 = stripslashes($_POST['formadd3']);
	$formadd4 = stripslashes($_POST['formadd4']);
	$formadd5 = stripslashes($_POST['formadd5']);
	$message = stripslashes($_POST['formcomments']);
	$Reply= $email;
	$from= $email;
	$e_name = stripslashes($_POST['e_name']);
	$e_email = stripslashes($_POST['e_email']);
	$e_bademail = stripslashes($_POST['e_bademail']);
	$e_message = stripslashes($_POST['e_message']);
	
	
		$messages="From: $email <br>";
		$messages.="Name: $name <br>";
		$messages.="Email: $email <br>";
		$messages.="Message: $message <br>";
		$emailto=$to;
		
		$mail = mail($emailto,$subject,$messages,"from: $from <$Reply>\nReply-To: $Reply \nContent-type: text/html");	
	
		if($mail) {
			echo 'success';
		}
}
?>