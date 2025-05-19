import express from 'express';

const app = express();

app.use(express.json());

//res.map((x) => <div> <p>{x.message}</p> <h3>{x.author}</h3> </div>)
let guestbook = [
    { id:0, author: 'Faenor', message: 'Hello, world!'},
    { id:1, author: 'John', message: 'Hello, world again!'},
]

app.get('/posts/:var', (req,res)=>{
    console.log(req.params)
    res.json(guestbook)
})

app.get('/posts', (req, res) =>{
    res.json(guestbook)
})

app.post('/posts', (req, res) => {
    // This is one way to do this
    // const name = req.body.name;
    // const message = req.body.message;

    // This is destructuring the object, another way to do the same as above
    // { name: 'Jane', message: 'hi' }
    const {name, message} = req.body;

    const newPost = {id: guestbook.length, author: name, message: message}

    guestbook.push(newPost);

    // res.json(guestbook)
    res.json({msg: 'post added successfully', guestbook})
})

app.put('/posts/:id', (req,res)=> {
    const id = Number(req.params.id);

    const {name, message} = req.body;

    const editPost = {id: id, author: name, message: message}

    editPost.id = id;

    guestbook = guestbook.filter(x=> x.id !== id);
    guestbook.push(editPost);

    res.json(guestbook);
})

app.delete('/posts/:id', (req,res) => {
    const id = Number(req.params.id);

    if(guestbook.some(x=> x.id === id)){
        guestbook = guestbook.filter(x=> x.id !== id);
        return res.status(200).json(guestbook);
    }
    res.status(404).json('post with this id does not exist')



})

app.listen(8000, ()=> console.log(' Server is running on port 8000! '))