// CALCULS
// map 15000 px x 15000 px
// canvas taille base = 900px
// ( 900 / 15 000 ) * 100 = 6%

function toX(baseValue) {
    return baseValue * 0.06;
}

function toY(baseValue) {
    return 900 - (baseValue * 0.06);
}

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');








/* * * * * * * * * * * * * *
* LES TOURS
* * * * * * * * * * * * * * */
/*  R O U G E  */
ctx.fillStyle = "red";
// top_lane
ctx.beginPath();
ctx.arc(toX(4318), toY(13875), 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(toX(7943), toY(13411), 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(toX(10481), toY(13650), 10, 0, 2 * Math.PI);
ctx.fill();

// mid_lane
ctx.beginPath();
ctx.arc(toX(8955), toY(8510), 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(toX(9767), toY(10113), 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(toX(11134), toY(11207), 10, 0, 2 * Math.PI);
ctx.fill();

// bot_lane
ctx.beginPath();
ctx.arc(toX(13866), toY(4505), 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(toX(13624), toY(10572), 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(toX(13327), toY(8226), 10, 0, 2 * Math.PI);
ctx.fill();

// nexus

/*  B L E U  */
ctx.fillStyle = "blue";
// top_lane
ctx.beginPath();
ctx.arc(toX(981), toY(10441), 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(toX(1512), toY(6699), 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(toX(1169), toY(4287), 10, 0, 2 * Math.PI);
ctx.fill();

// mid_lane
ctx.beginPath();
ctx.arc(toX(3651), toY(3696), 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(toX(5846), toY(6396), 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(toX(5048), toY(4812), 10, 0, 2 * Math.PI);
ctx.fill();

// bot_lane
ctx.beginPath();
ctx.arc(toX(6919), toY(1483), 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(toX(10504), toY(1029), 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(toX(4281), toY(1253), 10, 0, 2 * Math.PI);
ctx.fill();

// nexus
ctx.beginPath();
ctx.arc(toX(1748), toY(2270), 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(toX(2177), toY(1807), 10, 0, 2 * Math.PI);
ctx.fill();

ctx.fillStyle = "green";


/* * * * * * * * * * * * * *
* LES MOBS
* * * * * * * * * * * * * * */
// Rouge

// Bleu


/* * * * * * * * * * * * * *
* LES JOUEURS
* * * * * * * * * * * * * * */
// Rouge

// Bleu


