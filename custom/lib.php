<?php 

$publicaciones = file_get_contents("json/articulos.json");
$publicaciones = json_decode($publicaciones);

if (isset($_GET['article'])) {
  $id = $_GET['article'];
  $publicaciones = $publicaciones[$id];
}
?>