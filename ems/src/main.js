import { Application } from '@splinetool/runtime';

alert(
  'Wichtige Hinweise für ein optimales Nutzungserlebnis:\n1. aktiviere den Ton \n 2. nutze Chrome oder Safari'
);

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/SLagsxnCySooI9mM/scene.splinecode');
