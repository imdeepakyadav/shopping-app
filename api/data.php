<?php
include 'db.php';

header('Content-Type: application/json');

$type = $_GET['type'];

switch ($type) {
    case 'categories':
        $result = $conn->query("SELECT * FROM categories");
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        echo json_encode($data);
        break;
    
    case 'banners':
        $result = $conn->query("SELECT * FROM banners");
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        echo json_encode($data);
        break;

    case 'stores':
        $result = $conn->query("SELECT * FROM stores");
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        echo json_encode($data);
        break;

    // Add cases for other types as needed

    default:
        echo json_encode(["error" => "Invalid type"]);
}

$conn->close();
?>
