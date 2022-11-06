<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="utf-8">
<title>Akademia 3bird</title>
</head>
<body>
<h1>Losowanie liczb</h1>

<?php
$tablicaNaWylosowaneLiczby = array();
for($i = 0; $i < 6; $i++) {
do {
$wylosowanaLiczba = rand(1, 49);
}
while(in_array($wylosowanaLiczba, $tablicaNaWylosowaneLiczby));
// in_array zwraca wartość TRUE, jeśli pierwszy element zawiera się w tablicy;
// czyli wraca wtedy do "DO" i rozpoczyna nowe losowanie
$tablicaNaWylosowaneLiczby[] = $wylosowanaLiczba; // Wylosowana liczba jest zapisywana w tablicy
}
print '<p style="margin: 1cm; font-size: xx-large; color: #ff0000; text-align: center;">';
echo implode(", ", $tablicaNaWylosowaneLiczby); // implode zamienia dane tablicy na ciąg znaków
print '</p>';
?>
<br>
<br>

<button style="width: 160px; font-size: medium; text-align: center;" title="Załaduj ponownie..." onclick="parent.location.reload()">Wylosuj...</button>

</body>
</html>
