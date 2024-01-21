const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const schema = require("../models/schema");
const cors = require('cors');
const data = [
	{
		"_id": "65ac8657b85c34da122a4a31",
		"hourTrack": 123,
		"dateTrack": "2024-01-05T00:00:00.000Z",
		"__v": 0
	},
	{
		"_id": "65ac8671b85c34da122a4a35",
		"hourTrack": 5,
		"dateTrack": "2029-10-10T00:00:00.000Z",
		"__v": 0
	},
	{
		"_id": "65ac8712b85c34da122a4a3a",
		"hourTrack": 4,
		"dateTrack": "2024-01-09T00:00:00.000Z",
		"__v": 0
	},
	{
		"_id": "65ac8718b85c34da122a4a3e",
		"hourTrack": 3,
		"dateTrack": "2024-01-05T00:00:00.000Z",
		"__v": 0
	},
	{
		"_id": "65ac871eb85c34da122a4a42",
		"hourTrack": 9,
		"dateTrack": "2024-01-04T00:00:00.000Z",
		"__v": 0
	}
]
app.use(cors());

dotenv.config();

mongoose.connect(process.env.db_connect).then(
    app.listen( port, () => console.log(`Server is running at port ${port}`)))
    console.log("Connected to db!")

    app.use("/static", express.static("public"));
    
    app.use(express.urlencoded({ extended: true }));
  
    app.set("view engine", "ejs");
    
    app.get('/', async(req, res) => {
        const sleepTrack = await schema.find({});
        res.send(sleepTrack)
    })

    app.post('/', express.json(), async(req, res) => {
        const insertTrack = await schema({
            hourTrack: req.body.hourTrack,
            dateTrack: req.body.dateTrack
        });
        try{
            await insertTrack.save();
            res.redirect('/'); 
        } catch{
            res.status(500).send("Não foi possivel salvar o tempo de sono");
        }
    });

    app.put('/edit', express.json(), async(req, res) => {
        const id = req.body.id;
        try{
            await schema.findByIdAndUpdate(id, { hourTrack: req.body.hourTrack }, { new: true } )
            res.send(`hourTrack do id ${id} alterado com sucesso`)

        } catch {
            res.status(500).send(`Não foi possivel alterar o hourTrack do id ${id}`);
        }
    })

    app.delete('/remove', express.json(), async(req, res) => {
        const id = req.body.id;
        try{
            await schema.findByIdAndDelete(id);
            res.send(`A data com o id ${id} foi removida com sucesso!`)
        } catch {
            res.status(500).send(`Não foi possivel remover o id ${id} do banco de dados`)
        }
    })

    app.delete('/removeAll', express.json(), async(req, res) => {
        try {
            await Promise.all(data.map(async (item) => {
                try {
                    await schema.findByIdAndDelete(item._id);
                    console.log(`Data with id ${item._id} was successfully removed!`);
                } catch (error) {
                    console.error(`Failed to remove data with id ${item._id}:`, error);
                    // You might want to throw the error here if you want to stop the process
                }
            }));
            res.send('All specified data has been removed successfully!');
        } catch {
            console.error('Error in /removeAll route:', error);
            res.status(500).send('Internal Server Error');
        }

    })

