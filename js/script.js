import ScrollSuave from './scrollSuave.js'
import Contador from './contador.js'

const scrollSuave = new ScrollSuave('.links a[href^="#"], .linkBtn a[href^="#"]');
scrollSuave.init();

const contador = new Contador('.contador','2023-10-31T18:30:00');
contador.init();