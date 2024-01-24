const site = "https://xxanqw.pp.ua";
const server = "https://serveritself.xserv.pp.ua";
const karpati = "https://karpatimoped.pp.ua";
const hudoliy = "https://hudoliy.v.ua";

fetch(site)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("site").innerHTML = "✅";
    } else {
      console.log("Сторінка недоступна");
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, site);
  });

  fetch(server)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("server").innerHTML = "✅";
    } else {
      console.log("Сторінка недоступна");
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, server);
  });

  fetch(karpati)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("karpati").innerHTML = "✅";
    } else {
      console.log("Сторінка недоступна");
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, karpati);
  });

  fetch(hudoliy)
  .then((response) => {
    if (response.status === 200) {
      //console.log("Сторінка доступна");
      document.getElementById("hudoliy").innerHTML = "✅";
    } else {
      console.log("Сторінка недоступна");
    }
  })
  .catch((error) => {
    console.log("Помилка:", error, hudoliy);
  });