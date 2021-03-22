

const xablau = () => {
  console.log('click');
  let easterEgg = document.querySelector('#easterEgg');

  easterEgg.classList.add('dispBlock');
  setTimeout(() => {
    window.confirm("Ficou legal pessoal? (Sim ou Não)")
  }, 2500)
}