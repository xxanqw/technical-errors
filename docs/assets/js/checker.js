const site = "https://xxanqw.pp.ua";
const server = "https://serveritself.xserv.pp.ua";
const karpati = "https://karpatimoped.pp.ua";
const hudoliy = "https://hudoliy.v.ua";
const serverweb = "https://webserveritself.xxanqw.pp.ua";

fetch(site)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("site").innerHTML = "✅ Доступний";
      document.getElementById("site-more").innerHTML = "✅ " + response.status;
    } else {
      console.log("Сторінка недоступна " + site);
      document.getElementById("site").innerHTML = "❎ Недоступний";
      document.getElementById("site-more").innerHTML = "❎ Сервер існує, але не дає відповіді";
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, site);
    document.getElementById("site-more").innerHTML = "❎ " + error;
  });
    document.getElementById("site").innerHTML = "❎ Недоступний";

  fetch(server)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("server").innerHTML = "✅ Доступний";
      document.getElementById("server-more").innerHTML = "✅ " + response.status;
    } else {
      console.log("Сторінка недоступна " + server);
      document.getElementById("server").innerHTML = "❎ Недоступний";
      document.getElementById("server-more").innerHTML = "❎ Сервер існує, але не дає відповіді";
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, server);
    document.getElementById("server-more").innerHTML = "❎ " + error;
    document.getElementById("server").innerHTML = "❎ Недоступний";
  });

  fetch(karpati)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("karpati").innerHTML = "✅ Доступний";
      document.getElementById("karpati-more").innerHTML = "✅ " + response.status;
    } else {
      console.log("Сторінка недоступна " + karpati);
      document.getElementById("karpati").innerHTML = "❎ Недоступний";
      document.getElementById("karpati-more").innerHTML = "❎ Сервер існує, але не дає відповіді";
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, karpati);
    document.getElementById("karpati-more").innerHTML = "❎ " + error;
    document.getElementById("karpati").innerHTML = "❎ Недоступний";
  });

  fetch(hudoliy)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("hudoliy").innerHTML = "✅ Доступний";
      document.getElementById("hudoliy-more").innerHTML = "✅ " + response.status;
    } else {
      console.log("Сторінка недоступна " + hudoliy);
      document.getElementById("hudoliy").innerHTML = "❎ Недоступний";
      document.getElementById("hudoliy-more").innerHTML = "❎ Сервер існує, але не дає відповіді";
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, hudoliy);
    document.getElementById("hudoliy-more").innerHTML = "❎ " + error;
    document.getElementById("hudoliy").innerHTML = "❎ Недоступний";
  });

  fetch(serverweb)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("serverweb").innerHTML = "✅ Доступний";
      document.getElementById("serverweb-more").innerHTML = "✅ " + response.status;
    } else {
      console.log("Сторінка недоступна " + serverweb);
      document.getElementById("serverweb").innerHTML = "❎ Недоступний";
      document.getElementById("serverweb-more").innerHTML = "❎ Сервер існує, але не дає відповіді";
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, serverweb);
    document.getElementById("serverweb-more").innerHTML = "❎ " + error;
    document.getElementById("serverweb").innerHTML = "❎ Недоступний";
  });