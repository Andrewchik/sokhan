<?php
    // Получаєм данні з елементів форми
    $nickname = $_POST['nickname'];

    // Оброблюєс получені дані
    $nickname = htmlspecialchars($nickname); //

    $nickname = urldecode($nickname); // Декодування URL

    $nickname = trim($nickname); // Видалення пробільних символів з обох сторін

    

    // Відправка данних

    if (mail("andriy.goryachiy16@gmail.com",
             "The new message from site!",
             "Nick: ".$nickname."\n")
    ) {
        echo('Лист успішно відправлено!');
    } else {
        echo('Є помилка!');
    }







?>