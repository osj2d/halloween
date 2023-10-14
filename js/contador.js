export default class Contador {
  constructor(contador, data) {
    this.contador = document.querySelector(contador);
    this.halloweenData = new Date(data).getTime();
    this.contadorData = this.contadorData.bind(this);
    this.verificaZero = this.verificaZero.bind(this);
  }
  contadorData() {
    let agora = new Date().getTime();
    // let halloweenData = new Date("2023-10-31T18:30:00").getTime()
    let diasRestando = this.halloweenData - agora;
    //Separando as datas e horas
    let dias = Math.floor(diasRestando / (1000 * 60 * 60 * 24));
    let horas = Math.floor(
      (diasRestando % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutos = Math.floor((diasRestando % (1000 * 60 * 60)) / (1000 * 60));
    let segundos = Math.floor((diasRestando % (1000 * 60)) / 1000);
    //Ajusta horario

    dias = this.verificaZero(dias);
    horas = this.verificaZero(horas);
    minutos = this.verificaZero(minutos);
    segundos = this.verificaZero(segundos);
    let contadorFinal = `${dias}d ${horas}h ${minutos}m ${segundos}s`;
    this.contador.innerHTML = contadorFinal;
    
  }
  verificaZero(n) {
    return n < 10 ? `0${n}` : n;
  }
  //
  definirContador() {
    setInterval(this.contadorData, 1000);
  }
  init() {
    this.definirContador();
  }
}
