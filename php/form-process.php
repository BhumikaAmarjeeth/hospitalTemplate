<?php

$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_POST["name"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Email is required ";
} else {
    $email = $_POST["email"];
}


//PHONE

if (empty($_POST["phone"])) {
    $errorMSG .= "Phone no is required ";
} else {
    $phone = $_POST["phone"];
}

//date

if (empty($_POST["date"])) {
    $errorMSG .= "Date is required ";
} else {
    $phone = $_POST["date"];
}


//gender

if (empty($_POST["gender"])) {
    $errorMSG .= "Gender is required ";
} else {
    $phone = $_POST["gender"];
}





// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Message is required ";
} else {
    $message = $_POST["message"];
}


$EmailTo = "navin@fulgid.in";
$Subject = "New Message Received";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Phone Number: ";
$Body .= $phone;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}

?>