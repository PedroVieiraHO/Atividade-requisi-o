const obterTemp = () => {
    const cidade = document.getElementById('cidade').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&lang=pt_br&units=metric&appid=777fd6c175f16899b669ab9b22be7638`)
      .then(resposta => {
        return resposta.json();
      })
      .then(dados => {
        const temperaturaAtual = dados.main.temp;
        document.getElementById('temp').innerHTML = `A temperatura atual em ${cidade} é de ${temperaturaAtual} °C`;
      })
      .catch(erro => {
        document.getElementById('temp').innerHTML = 'Erro ao obter temperatura.';
        console.log('Erro ao obter temperatura:', erro);
      });
  };
  obterTemp(); 