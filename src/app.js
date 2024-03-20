const express = require('express');
const foodnutrition = require('./models/foodinfo');
const cors=require('cors');
const Food = require('./models/foodinfo');
require('./db/conn');

const app = express();
const port = 3200;
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send('FOOD NUTRITION');
})

app.get('/Food',async (req,res)=>{
try{
const getfood=await Food.find({});
res.status(201).send(getfood)
}
catch (error) {
    console.error(error);
    res.status(500).json({error : 'Internal Server Error'});
}
})

app.post('/foodnutrition', async (req, res) => {
    try {
        const newRecord = await Food.create(req.body);
        res.status(201).send(newRecord);
    } catch (error) {
        console.error(error);
        res.status(500).json({error : 'Internal Server Error'});
    }
});



app.listen(port, () => {
    console.log(`server is listening at port number ${port}`);
});