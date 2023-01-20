const express = require('express')
const app = express()
const port = 3000
const cors = repure('cors') // 

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.get('/user/:id', (req, res) => {
    const id = req.params.id;

    if (id == "yejin") {
        res.send('<h1>Hello ' + id + '</h1>');
    } else {
        console.log(id);
        res.send('Welcome ' + id);
    }
})

app.get('/image/:name', (req, res) => {
    const { name } = req.params;
    console.log(name);


    if (name == "cat") {
        res.json({ "image_url": "https://cdn2.thecatapi.com/images/d7j.jpg" });
    } else if (name == "dog") {
        res.json({ "image_url": "https://images.dog.ceo/breeds/malamute/n02110063_97.jpg" });
    } else {
        res.json({ "image_url": null });
    }
})


app.get('/dog', (req, res) => {
    res.json({ "image_url": "https://images.dog.ceo/breeds/malamute/n02110063_97.jpg" });
})


app.get('/cat', (req, res) => {
    res.json({ "image_url": "https://cdn2.thecatapi.com/images/d7j.jpg" });
})


app.listen(port, () => {

    console.log(`Example app listening on port ${port}`)
})