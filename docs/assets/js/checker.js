const site = "https://xxanqw.pp.ua";
const server = "http://serveritself.xserv.pp.ua";

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
    console.log("Помилка:", error);
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
    console.log("Помилка:", error);
  });