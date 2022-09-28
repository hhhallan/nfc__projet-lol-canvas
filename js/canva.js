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
let data = {
    "turrets": [
        {
            "RED": [
                // "top_lane"
                {"x": 4318, "y": 13875},
                {"x": 7943, "y": 13411},
                {"x": 10481, "y": 13650},
                // "mid_lane"
                {"x": 8955, "y": 8510},
                {"x": 9767, "y": 10113},
                {"x": 11134, "y": 11207},
                // "bot_lane"
                {"x": 13866, "y": 4505},
                {"x": 13624, "y": 10572},
                {"x": 13327, "y": 8226},
                // "nexus"
                {"x": 13252, "y": 12730},
                {"x": 12823, "y": 13193},
            ],
            "BLUE": [
                // "top_lane"
                {"x": 981, "y": 10441},
                {"x": 1512, "y": 6699},
                {"x": 1169, "y": 4287},
                // "mid_lane"
                {"x": 3651, "y": 3696},
                {"x": 5846, "y": 6396},
                {"x": 5048, "y": 4812},
                // "bot_lane"
                {"x": 6919, "y": 1483},
                {"x": 10504, "y": 1029},
                {"x": 4281, "y": 1253},
                // "nexus"
                {"x": 1748, "y": 2270},
                {"x": 2177, "y": 1807},
            ]
        }
    ]
};

data.turrets.forEach(el => {
    el.RED.forEach(e => {
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(toX(e.x), toY(e.y), 10, 0, 2 * Math.PI);
        ctx.fill();
    });

    el.BLUE.forEach(e => {
        ctx.fillStyle = "blue";
        ctx.beginPath();
        ctx.arc(toX(e.x), toY(e.y), 10, 0, 2 * Math.PI);
        ctx.fill();
    });
})


/* * * * * * * * * * * * * *
* LES MOBS
* * * * * * * * * * * * * * */
ctx.fillStyle = "white";
// DRAGONS
ctx.beginPath();
ctx.arc(toX(10100), toY(4480), 10, 0, 2 * Math.PI);
ctx.fill();

// BARON + HERALD
ctx.beginPath();
ctx.arc(toX(5000), toY(10600), 10, 0, 2 * Math.PI);
ctx.fill();


/* * * * * * * * * * * * * *
* LES JOUEURS
* * * * * * * * * * * * * * */
// Rouge

// Bleu


