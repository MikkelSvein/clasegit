const express = require('express');
const comicsRouter = require('./routes/comics');
const typesRouter = require('./routes/types');

const app = express();

process.loadEnvFile();

const PORT = 3000;

app.use(express.json());

app.use("/comics", comicsRouter);
app.use("/types", typesRouter);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
