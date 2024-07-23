<?php
include 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

if ($data) {
    foreach ($data['categories'] as $category) {
        $stmt = $conn->prepare("INSERT INTO categories (category_link, category_name, category_image, open_in) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $category['category_link'], $category['category_name'], $category['category_image'], $category['open_in']);
        $stmt->execute();
    }

    echo json_encode(["status" => "success"]);
} else {
    echo json_encode(["status" => "error"]);
}

$conn->close();
?>
