<?php
    $koneksi = mysqli_connect("localhost","root","","lomba");
    if(!$koneksi){
        die("Koneksi Ke Server Gagal : ".mysqli_connect_error())
    }
?>