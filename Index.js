let express = require('express');
let app = express();
let userRouter = require('./Routes/UserRoutes')
let PORT = process.env.PORT || 5000;
require('./Connection/Connection')


app.use(express.json());
// app.use(express.urlencoded());

app.use('/url', userRouter);

app.listen(PORT)