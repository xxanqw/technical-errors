const site = "https://xxanqw.pp.ua";
const server = "https://serveritself.xserv.pp.ua";
const karpati = "https://karpatimoped.pp.ua";
const hudoliy = "https://hudoliy.v.ua";

fetch(site)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("site").innerHTML = "✅";
      document.getElementById("site-more").innerHTML = "Response status: " + response.status;
    } else {
      console.log("Сторінка недоступна");
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, site);
    document.getElementById("site-more").innerHTML = "Помилка: " + error;
  });

  fetch(server)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("server").innerHTML = "✅";
      document.getElementById("server-more").innerHTML = "Response status: " + response.status;
    } else {
      console.log("Сторінка недоступна");
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, server);
    document.getElementById("server-more").innerHTML = "Помилка: " + error;
  });

  fetch(karpati)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("karpati").innerHTML = "✅";
      document.getElementById("karpati-more").innerHTML = "Response status: " + response.status;
    } else {
      console.log("Сторінка недоступна");
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, karpati);
    document.getElementById("karpati-more").innerHTML = "Помилка: " + error;
  });

  fetch(hudoliy)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("hudoliy").innerHTML = "✅";
      document.getElementById("hudoliy-more").innerHTML = "Response status: " + response.status;
    } else {
      console.log("Сторінка недоступна");
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, hudoliy);
    document.getElementById("hudoliy-more").innerHTML = "Помилка: " + error;
  });