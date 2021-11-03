import express from 'express';
const app = express()
const port = process.env.PORT || 3000

app.get('/profile', (req, res) => {
  res.send('Hello! here is your profile')
})
app.get('/home', (req, res) => {
    res.send('Hello!here is your home')
})
app.get('/', (req, res) => {
    res.send('Hi I am a hello world Server program')
})

app.listen(port, () => {
  console.log(`This app listening at http://localhost:${port}`)
})