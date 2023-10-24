import express from 'express'
import GetMediaController from './controllers/get-media-controller';
import ExpressAdapter from './adapters/express-adapter';

const app = express();
const port = 3000;

app.get('/download', (req, res) => {
    const serverAdapter = new ExpressAdapter(res, req);
    serverAdapter.executeController(GetMediaController.get);
});

app.listen(port, () => console.log('Server is running on port ' + port ));