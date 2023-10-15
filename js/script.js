import ScrollSuave from '../js/scrollSuave.js'
import Contador from '../js/contador.js'
import ModalGaleria from '../js/modalGaleria.js'

const scrollSuave = new ScrollSuave('.links a[href^="#"], .linkBtn a[href^="#"]');
scrollSuave.init();

const contador = new Contador('.contador','2023-10-31T18:30:00');
contador.init();

const modalgaleria = new ModalGaleria('.galeriaImagens img', '.modal');
modalgaleria.init();