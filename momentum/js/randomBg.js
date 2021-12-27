const imgBg = ['0.jpg', '1.jpg', '2.jpg'];
const imgrandom = imgBg[Math.floor(Math.random()*imgBg.length)];
document.body.style.backgroundImage = `url(images/${imgrandom})`;