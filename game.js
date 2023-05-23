const canvas = document.querySelector('canvas');
// .getContext() se utiliza para obtener el contexto de renderizado en el lienzo (canvas)
// Esta disponible junto con el elemento canvas 
const game = canvas.getContext('2d');

//Apenas se carge la pagina, vamos a ejecutar lo que esta en el addEventListener
window.addEventListener('load', startGame);

function startGame(){
    game.fillRect(0,0,100,100);
    game.clearRect(0,0,100,50);
    // game.clearRect(0,0,50,50);

    game.font = '25 px Verdana';
    game.fillStyle = 'purple';
    game.textAlign = 'center';
    game.fillText('Hola', 50,50);
}