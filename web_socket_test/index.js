const btn = document.getElementById('send')

const socket = new WebSocket('ws://localhost:5000/')

socket.onopen = () => {
    socket.send(JSON.stringify(
        {
            message: 'Hello',
            method: 'connection',
            id: 555,
            username: 'Alex',
        }
    ))
}

socket.onmessage = (event) => {
    console.log(`GIVE MESSAGE: ${event.data}`);
}

btn.onclick = () => {
    socket.send(JSON.stringify(
        {
            message: 'Hello',
            method: 'message',
            id: 555,
            username: 'Alex',
        }
    ))
}