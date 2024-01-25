const site = "https://xxanqw.pp.ua";
const server = "https://serveritself.xserv.pp.ua";
const karpati = "https://karpatimoped.pp.ua";
const hudoliy = "https://hudoliy.v.ua";
const serverweb = "https://webserveritself.xxanqw.pp.ua"

fetch(site)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("site").innerHTML = "✅";
      document.getElementById("site-more").innerHTML = "Response status: " + response.status;
    } else {
      console.log("Сторінка недоступна");
      document.getElementById("site").innerHTML = "❎";
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, site);
    document.getElementById("site-more").innerHTML = "Помилка: " + error;
  });
    document.getElementById("site").innerHTML = "❎";

  fetch(server)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("server").innerHTML = "✅";
      document.getElementById("server-more").innerHTML = "Response status: " + response.status;
    } else {
      console.log("Сторінка недоступна");
      document.getElementById("server").innerHTML = "❎";
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, server);
    document.getElementById("server-more").innerHTML = "Помилка: " + error;
    document.getElementById("server").innerHTML = "❎";
  });

  fetch(karpati)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("karpati").innerHTML = "✅";
      document.getElementById("karpati-more").innerHTML = "Response status: " + response.status;
    } else {
      console.log("Сторінка недоступна");
      document.getElementById("karpati").innerHTML = "❎";
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, karpati);
    document.getElementById("karpati-more").innerHTML = "Помилка: " + error;
    document.getElementById("karpati").innerHTML = "❎";
  });

  fetch(hudoliy)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("hudoliy").innerHTML = "✅";
      document.getElementById("hudoliy-more").innerHTML = "Response status: " + response.status;
    } else {
      console.log("Сторінка недоступна");
      document.getElementById("hudoliy").innerHTML = "❎";
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, hudoliy);
    document.getElementById("hudoliy-more").innerHTML = "Помилка: " + error;
    document.getElementById("hudoliy").innerHTML = "❎";
  });

  fetch(serverweb)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("serverweb").innerHTML = "✅";
      document.getElementById("serverweb-more").innerHTML = "Response status: " + response.status;
    } else {
      console.log("Сторінка недоступна");
      document.getElementById("serverweb").innerHTML = "❎";
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, serverweb);
    document.getElementById("serverweb-more").innerHTML = "Помилка: " + error;
    document.getElementById("serverweb").innerHTML = "❎";
  });