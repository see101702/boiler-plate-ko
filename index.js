const express = require('express')
const app = express()
const port = 4700
const bodyParser = require('body-parser');
const config = require('./config/key');
const { User } = require("./models/User");

//applicaiton/x-www-form-urlencoded 타입으로 된 걸 분석해서 가져올 수 있게
app.use(bodyParser.urlencoded({extended: true}));

//application/json 타입으로 된 걸 분석해서 가져올 수 있게
app.use(bodyParser.json());

const mongoose = require('mongoose') //mongoose로 app과 mongodb를 연결
mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))
// 뒤에 막 이거 써주는 이유는 오류나는 거 막을려고..?


app.get('/', (req, res) => res.send('Hello World!~~안녕하세요~~'))

app.post('/register', (req, res) => {
  // 회원 가입할 때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터베이스에 넣어준다

  const user = new User(req.body)

  user.save((err, userInfo) => {
    if (err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    })
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))