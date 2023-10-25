import express from 'express'
import GetMediaController from '../../api/controllers/get-media-controller';
import ExpressAdapter from '../../api/adapters/express-adapter';
  
const app = express();
const port = 3001;

app.get('/download', (req, res) => {
    const serverAdapter = new ExpressAdapter(res, req);
    serverAdapter.executeController(GetMediaController.get);
});

app.listen(port, () => console.log('Server is running on port ' + port ));

