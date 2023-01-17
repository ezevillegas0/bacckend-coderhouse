const socket = io();
/* socket.emit('mensaje', 'hola desde el client de websocket')
socket.on('singlecast', (data) => {
    console.info(data)
});
socket.on('broadcast', (data) => {
    console.warn(data)
});
socket.on('multuicast', (data) => {
    console.error(data)
}); */

/* ejercicio en clase de websocket */

socket.on('mensajes', (data) => {
    console.warn(data)
});
socket.emit('mensaje', 'este es un mensaje');
const inputEl = document.querySelector('input');
const btn = document.querySelector('button').addEventListener('click', () => {
    const msj = inputEl.value;
    socket.emit('mensaje', msj);
    inputEl.value =null;
});

