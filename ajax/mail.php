<?php
   $email = $_POST["email"];
   $name = $_POST["name"];
   $phone = $_POST["phone"];
   $message = '<html>
               <head>
                     <title>Заявка с сайта</title>
                 </head>
             <body>
                 <p><b>Имя:</b> '.$_POST['name'].'</p>
                 <p><b>Почта:</b> '.$_POST['email'].'</p>
                 <p><b>Телефон:</b> '.$_POST['phone'].'</p>
                 <p><b>Сообщение:</b> '.$_POST['message'].'</p>
             </body>
         </html>';

   $subject = "=?utf-8?B?".base64_encode("Сообщение с сайта elfshow.ru")."?=";
   $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

   $success = mail('show.elfproject@gmail.com', $subject, $message, $headers);
   echo $success;
