const express = require('express');
const comicsRouter = require('./routes/comics');
const abilityRouter = require('./routes/ability');
const speciesRouter = require('./routes/species');

const app = express();

process.loadEnvFile();

const PORT = 3000;

app.use(express.json());

app.use("/comics", comicsRouter);
app.use("/ability", abilityRouter);
app.use("/types", typesRouter);


app.use("/species", speciesRouter);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
