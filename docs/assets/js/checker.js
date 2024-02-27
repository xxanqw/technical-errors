const site = "https://xxanqw.pp.ua";
const server = "https://serveritself.xserv.pp.ua";
const karpati = "https://karpatimoped.pp.ua";
const hudoliy = "https://hudoliy.v.ua";
const serverweb = "https://webserveritself.xxanqw.pp.ua";

fetch(site)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("site").innerHTML = "✅";
      document.getElementById("site-more").innerHTML = "✅" + response.status;
    } else {
      console.log("Сторінка недоступна " + site);
      document.getElementById("site").innerHTML = "❎";
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, site);
    document.getElementById("site-more").innerHTML = "❎" + error;
  });
    document.getElementById("site").innerHTML = "❎";

  fetch(server)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("server").innerHTML = "✅";
      document.getElementById("server-more").innerHTML = "✅" + response.status;
    } else {
      console.log("Сторінка недоступна " + server);
      document.getElementById("server").innerHTML = "❎";
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, server);
    document.getElementById("server-more").innerHTML = "❎" + error;
    document.getElementById("server").innerHTML = "❎";
  });

  fetch(karpati)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("karpati").innerHTML = "✅";
      document.getElementById("karpati-more").innerHTML = "✅" + response.status;
    } else {
      console.log("Сторінка недоступна " + karpati);
      document.getElementById("karpati").innerHTML = "❎";
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, karpati);
    document.getElementById("karpati-more").innerHTML = "❎" + error;
    document.getElementById("karpati").innerHTML = "❎";
  });

  fetch(hudoliy)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("hudoliy").innerHTML = "✅";
      document.getElementById("hudoliy-more").innerHTML = "✅" + response.status;
    } else {
      console.log("Сторінка недоступна " + hudoliy);
      document.getElementById("hudoliy").innerHTML = "❎";
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, hudoliy);
    document.getElementById("hudoliy-more").innerHTML = "❎" + error;
    document.getElementById("hudoliy").innerHTML = "❎";
  });

  fetch(serverweb)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("serverweb").innerHTML = "✅";
      document.getElementById("serverweb-more").innerHTML = "✅" + response.status;
    } else {
      console.log("Сторінка недоступна " + serverweb);
      document.getElementById("serverweb").innerHTML = "❎";
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, serverweb);
    document.getElementById("serverweb-more").innerHTML = "❎" + error;
    document.getElementById("serverweb").innerHTML = "❎";
  });