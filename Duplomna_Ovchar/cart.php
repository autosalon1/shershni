<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $car = $_POST['car'];
    $action = $_POST['action'];

    if ($action === "add") {
        echo json_encode(["message" => "$car додано до кошика"]);
    } elseif ($action === "remove") {
        echo json_encode(["message" => "$car видалено з кошика"]);
    }
}
?>
