const express = require('express')
const app = express()
const WSServer = require('express-ws')(app)
const aWss = WSServer.getWss()

const PORT = process.env.PORT || 5000

app.ws('/', (ws, req) => {
    console.log('CONNECT')
    ws.send('you connected')
    ws.on('message', (msg) => {
        const data = JSON.parse(msg);
        console.log(data.method)
        switch (data.method) {
            case 'connection':
                ws.send('Hello')
                connectionHandler(ws, data)
                break
            case 'message':
                ws.send('My message')
                messageHandler(ws,data)
                break
        }
    })
})


app.listen(PORT, () => console.log(`server run on port ${PORT}`))


const connectionHandler = (ws, data) => {
    ws.id = data.id
    broadcastConnection(ws, data)
}

const messageHandler = (ws, data) => {
    console.log(data)
}

const broadcastConnection =(ws, data) => {
    aWss.clients.forEach(client => {
        if (data.id === client.id) {
            client.send(`User ${data.username} connected`)
        }
    })
}