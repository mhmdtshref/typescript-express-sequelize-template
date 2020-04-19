import express from 'express'
import apiRouter from './routers';

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRouter);

export default app
