const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const c = canvas.getContext('2d');
//Draw rectang
c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(400, 100, 100, 100);
c.fillRect(300, 300, 100, 100);
console.log(canvas);

//Draw line
c.beginPath();
c.moveTo(500, 300);
c.lineTo(300,100);
c.lineTo(400, 300);
c.strokeStyle = '#fa34a3';
c.stroke();