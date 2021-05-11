const express = require('express');
const app = express();
require('dotenv').config();
port= process.env.PORT

app.use(express.json());




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

app.post('/login',function(req,res){
	// Typically passwords are encrypted using something like bcrypt before sending to database
	let username=req.body.username;
	let password=req.body.password;

	// This should come from the database
	const mockUsername="billyTheKid";
	const mockPassword="superSecret";

	if (username===mockUsername && password===mockPassword){
		// In practice, use JSON web token sign method here to make an encrypted token
		res.json({
			success: true,
			message: 'password and username match!',
			token: 'encrypted token goes here'
		})
	} else {
		res.json({
			success: false,
			message: 'password and username do not match'
		})
	}

})


app.listen(port, () => {
    console.log(`Server started on ${port}`);
});