fetch('http://xxanqw.pp.ua')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    document.getElementById('isok').innerHTML = '✅'; // Виведіть іконку успіху
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
    document.getElementById('isok').innerHTML = '❎'; // Виведіть іконку помилки
  });
