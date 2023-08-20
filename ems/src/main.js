import { Application } from '@splinetool/runtime';

alert(
  'Wichtige Hinweise für ein optimales Nutzungserlebnis:\n1. aktiviere den Ton \n2. nutze Chrome oder Safari \n\nes kann bis zu 10 Sekunden dauern, bis die Applikation geladen ist.'
);

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/SLagsxnCySooI9mM/scene.splinecode');
