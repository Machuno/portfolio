let lgpdUrl = 'https://'
let lgpdHtml = `
  <div class="lgpd">
    <div class="lgpd--left">
      Nós utitilizamos cookies para melhorar a experiência do usuário.<br>
      Para conferir detalhadamentetodos os cookies utilizados, leia nossa
      <a href="#">Política de privacidade</a>.
    </div>
    <div class="lgpd--right">
      <button>Aceitar</button>
    </div>
    <link rel="stylesheet" href="styles/lgpd.css" />
  </div>
`;

let lsContent = localStorage.getItem('lgpd');
if(!lsContent) {
  document.body.innerHTML += lgpdHtml;

  let lgpdArea = document.querySelector('.lgpd');
  let lgpdButton = lgpdArea.querySelector('button');

  lgpdButton.addEventListener('click', async () => {
    

    let result = await fetch(lgpdUrl);
    let json = await result.json();

    if(json.error != '') {
      let id = '123'; //tirar essa linha qdo estiver funcionando json.id
      localStorage.setItem('lgpd',id); // trocar id por json.id
      lgpdArea.remove();
    }


  });
}