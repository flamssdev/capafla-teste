const botaoIniciar = document.getElementById("iniciar");
const carregamento = document.getElementById("efeito");
const efeitos = document.querySelectorAll("#efeito div");
const engrenagem = document.getElementById("engrenagem");
const sectionInicializar = document.getElementById("inicializar");
const teste = document.getElementById("teste");
const scan = document.getElementById("scan");
const pularAnimacao = document.getElementById("pular-animacao");

botaoIniciar.addEventListener("click", () => {
  botaoIniciar.classList.add("inicializarAPP");
  setTimeout(function () {
    
    carregamento.classList.add("conectando");
    scan.classList.add("conectando");
    setTimeout(function () {
      botaoIniciar.style.display = "none"
      efeitos.forEach((element) => {
        element.classList.add("efeito-carregando");
      });

      engrenagem.classList.add("girarengrenagem");

      const spanPorcentagem = document.getElementById("porcentagem");
      let porcentagem = 0;
      setInterval(function () {
        if (porcentagem <= 100) {
          spanPorcentagem.innerHTML = porcentagem + "%";
          porcentagem++;
        }
      }, 60);

      setTimeout(function (){
        sectionInicializar.classList.add("section-fechar");
        setTimeout(function (){
          teste.classList.add("teste-abrir");

          setTimeout(function (){
            sectionInicializar.style.display = "none";
          }, 2000)
        }, 1000)
      }, 6500);
    }, 3000);
  }, 0000);
});

pularAnimacao.addEventListener("click", () => {
  teste.classList.add("teste-abrir");
})