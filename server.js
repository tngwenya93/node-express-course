const express = require('express');
const app = express();
require('dotenv').config();
port= process.env.PORT

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});

const mockUserData=[
    {name:'Mark'},
    {name:'Jill'}
    ]


app.get('/users', function(req,res){
         res.json({
              success: true,
              message: 'successfully got users. Nice!',
              user: mockUserData
         })
    })

app.get('/users/:id', (req, res) => {
        console.log(req.params.id)
     res.json({
         success: true,
        message: "got one user",
        user: req.params.id
    });

});