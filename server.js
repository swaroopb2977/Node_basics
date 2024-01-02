import express from 'express';

const app=express();

app.get('/',(req, res) =>{
    res.send('server is ready')
})

// Get a list of 5 jokes 

app.get('/api/jokes',(req, res) =>{
    const jokes=[
        {
            id:1,
            title: 'A First joke',
            content:'This is a first Joke'
        },
        {
            id:2,
            title: 'A 2nd joke',
            content:'This is a 2nd Joke'
        },
        {
            id:3,
            title: 'A 3rd joke',
            content:'This is a 3rd Joke'
        },
    ];
    res.send(jokes);
});

const port = process.env.PORT|| 3000

app.listen(port,() =>{
    console.log(`Serve at http://localhost:${port}`);

});