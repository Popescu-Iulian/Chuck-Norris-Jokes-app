const JOKES_LIST = document.querySelector('ul');

function getJokes(event) {
  event.preventDefault();
  const JOKES_NUMBER = document.querySelector('input');
  const XHR = new XMLHttpRequest();

  XHR.open('GET', `http://api.icndb.com/jokes/random/${JOKES_NUMBER.value}`, true);

  XHR.onload = function () {
    if (this.status === 200) {
      const RESPONSE = JSON.parse(this.responseText);
      let output = '';

      RESPONSE.value.forEach(joke => {
        output += `<li>${joke.joke}</li>`;
      });

      JOKES_LIST.innerHTML = output;
    }
  }

  JOKES_NUMBER.value = '';

  XHR.send();
}