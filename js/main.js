 // Создаем функицию которая при клике на кнопку отправляет GET запрос 
 function sendRequest() {
    // Создаем переменные для получения и хранения значения из Input
    let nameForm = document.getElementById('name').value // Переменная с именем из input с id name
    let messageForm = document.getElementById('number').value // Переменная с сообщением из input с id message
    let massage = `Имя: ${nameForm}  Сообщение: ${messageForm}` // Переменная с сообщением для отправки в телеграмм 
    // Переменная с get запросом 
    /*
        Все запросы к Telegram Bot API должны осуществляться через HTTPS в следующем виде: 
        https://api.telegram.org/bot<token>/sendMessage?chat_id=<...>&text=<сообщение для отправки>

        token - 
        sendMessage - название метода (в нашем случае отправка сообщения)
        chat_id - id чата в который будет отправлено сообщение
     */
    let getInquiry = `https://api.telegram.org/bot1664447266:AAEgRGF4_s2p-iVDbgnJiXa0I3dj_qHqe-U/sendMessage?chat_id=-560960287&text=${massage}`
    // Cоздание объекта XMLHttpRequest
    let xhr = new XMLHttpRequest();
    //true или не определён, запрос выполнится асинхронно, в противном случае — синхронно. 
    xhr.open("GET", getInquiry, true); 
    // Отправляем get запрос
    xhr.send(null);
    // Очищаемя поля для ввода данных
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
