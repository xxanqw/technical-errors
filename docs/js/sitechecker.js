function isPageAvailable(url) {
  // Створюємо новий об'єкт XMLHttpRequest.
  let xhr = new XMLHttpRequest();

  // Встановлюємо метод запиту.
  xhr.open("GET", url, true);

  // Додаємо обробник помилок.
  xhr.onerror = function() {
    // Логуємо помилку.
    console.log("Помилка при запиті сторінки:", url);

    // Виводимо результат перевірки.
    document.getElementById("isok").innerHTML = "❎";
  };

  // Відправляємо запит.
  xhr.send();

  // Отримуємо код відповіді.
  let responseCode = xhr.status;

  // Якщо код відповіді 200, то сторінка доступна.
  if (responseCode === 200) {
    // Логуємо результат.
    console.log("Сторінка доступна:", url);

    // Отримуємо HTML-код сторінки.
    let html = xhr.responseText;

    // Робимо все, що робили до цього.
    isPageAvailable2(html);
  } else {
    // Логуємо результат.
    console.log("Сторінка недоступна:", url);

    // Виводимо результат перевірки.
    document.getElementById("isok").innerHTML = "❎";
  }
}

function isPageAvailable2(html) {
  // ...
}

// Виконуємо перевірку.
isPageAvailable("https://xxanqw.pp.ua");
