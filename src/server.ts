import App from './app'
import * as bodyParser from 'body-parser'

require('dotenv').config()

const app = new App({
    port: 5000,
    controllers: [
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
    ]
})

app.listen()