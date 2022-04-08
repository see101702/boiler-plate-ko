const express = require('express')
const app = express()
const port = 4300

const mongoose = require('mongoose') //mongoose로 app과 mongodb를 연결
mongoose.connect('mongodb+srv://siyoung:young2352!@boilerplate.sb98h.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))
// 뒤에 막 이거 써주는 이유는 오류나는 거 막을려고..?


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))