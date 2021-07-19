"use strict";

// Создаем функицию которая при клике на кнопку отправляет GET запрос 
function sendRequest() {
  // Создаем переменные для получения и хранения значения из Input
  var nameForm = document.getElementById('name').value; // Переменная с именем из input с id name

  var messageForm = document.getElementById('number').value; // Переменная с сообщением из input с id message

  var massage = "\u0418\u043C\u044F: ".concat(nameForm, " \xA0\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435: ").concat(messageForm); // Переменная с сообщением для отправки в телеграмм 
  // Переменная с get запросом 

  /*
      Все запросы к Telegram Bot API должны осуществляться через HTTPS в следующем виде: 
      https://api.telegram.org/bot<token>/sendMessage?chat_id=<...>&text=<сообщение для отправки>
       token - 
      sendMessage - название метода (в нашем случае отправка сообщения)
      chat_id - id чата в который будет отправлено сообщение
   */

  var getInquiry = "https://api.telegram.org/bot1664447266:AAEgRGF4_s2p-iVDbgnJiXa0I3dj_qHqe-U/sendMessage?chat_id=-560960287&text=".concat(massage); // Cоздание объекта XMLHttpRequest

  var xhr = new XMLHttpRequest(); //true или не определён, запрос выполнится асинхронно, в противном случае — синхронно. 

  xhr.open("GET", getInquiry, true); // Отправляем get запрос

  xhr.send(null); // Очищаемя поля для ввода данных

  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
}