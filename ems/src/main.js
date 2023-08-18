import { Application } from '@splinetool/runtime';

alert('aktiviere den Ton für ein optimales Nutzungserlebnis.');

const canvas = document.getElementById('canvas3d');
const app = new Application(canvas);
app.load('https://prod.spline.design/i3JKZHxaqprBW1YI/scene.splinecode');
