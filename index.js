import express from 'express';
import compression from 'compression';

const app = express();
const PORT = process.env.PORT || 8080;

app.use(compression());

app.use(express.static('./build'));

app.listen(PORT, err => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`Server is live at http://localhost:${PORT}`);
});
