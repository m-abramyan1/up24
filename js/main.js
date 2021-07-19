var skroll = new Skroll()
   .add(".home__title",{
      animation:"zoomIn",
      duration:600
   })
   .add(".work__item",{
      animation:"fadeInUp",
      delay:120,
      duration:600,
      wait:250
   })
   .add(".anim3",{
      animation:"fadeInUp ",
      delay:100,
      duration:750
   })
   .add(".anim",{
      animation:"fadeInUp ",
      delay:100,
      duration:750
   })
   .add(".about__img",{
      animation:"growInLeft",
      delay:80,
      duration:500,
      easing:"cubic-bezier(0.37, 0.27, 0.24, 1.26)"
   })
   .init();


   
    // Создаем функицию которая при клике на кнопку отправляет GET запрос 
function sendRequest() {
   // Создаем переменные для получения и хранения значения из Input
   let nameForm = document.getElementById('name').value // Переменная с именем из input с id name
   let numberForm = document.getElementById('number').value // Переменная с сообщением из input с id message
   let massage = `Имя: ${nameForm}  Номер: ${numberForm}` // Переменная с сообщением для отправки в телеграмм 
   // Переменная с get запросом 
   /*
       Все запросы к Telegram Bot API должны осуществляться через HTTPS в следующем виде: 
       https://api.telegram.org/bot<token>/sendMessage?chat_id=<...>&text=<сообщение для отправки>

       token - 
       sendMessage - название метода (в нашем случае отправка сообщения)
       chat_id - id чата в который будет отправлено сообщение
    */
   let getInquiry = `https://api.telegram.org/bot1936065338:AAEziOkH_oOg4umU4obcjbnEocD1RzTIh90/sendMessage?chat_id=-533117774&text=${massage}`
   // Cоздание объекта XMLHttpRequest
   let xhr = new XMLHttpRequest();
   //true или не определён, запрос выполнится асинхронно, в противном случае — синхронно. 
   xhr.open("GET", getInquiry, true); 
   // Отправляем get запрос
   xhr.send(null);
   // Очищаемя поля для ввода данных
   document.getElementById("name").value = "";
   document.getElementById("number").value = "";
   console.log("ok")
 }