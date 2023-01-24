const socket = io(); 
let username = prompt('ingrese su nombre');
/* enviar mensaje de que se conecto un nuevo cliente */
socket.emit('nuevoCliente', {username});

const chatBox = document.getElementById('chatBox');
chatBox.addEventListener("keyup", (evt) => {
    if (evt.key === "Enter") {
        if (chatBox.value.trim().lenght) {
            const mensaje = chatBox.value;
            chatBox.value = "";
            socket.emit('mensaje', {
                username,
                mensaje,
            });
        }
    }
});

/* no me toma el evento del enter */
const messageLogsEl = document.getElementById('messageLogs');
socket.on('mensajes', (data) => {
    let messages = "";
    data.forEach((message) => {
        messages = messages + `${message.username} dice: ${message.mensaje}</br>`;
    });
    messageLogsEl.innerHTML = messages;
});

socket.on('usuarioNuevoConectado', usuarioNuevo => {
    alert('se conecto ' + usuarioNuevo.username);
});





/* Swal.fire({
    title: 'identificate',
    input: 'text',
    text: 'ingrese su nombre para ingresar al chat',
    inputValidator: (value) => {
        return !value && 'necesitar escribir tu nombre para continuar'
    },
    allowOutsideClick: false,
}).then(result => {
    username = result.value;
    console.log(username);
}); */