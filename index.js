const express = require('express');
const comicsRouter = require('./routes/comics');
const abilityRouter = require('./routes/ability');

const app = express();
process.loadEnvFile();
const PORT = 3000;
app.use(express.json());
app.use("/comics", comicsRouter);
app.use("/ability", abilityRouter);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
