import { NextApiRequest, NextApiResponse } from 'next';
import GetMediaController from '../../../api/controllers/get-media-controller';
import NextAdapter from '@/api/adapters/next-adapter';

export default function handler(req: NextApiRequest , res: NextApiResponse){
    const serverAdapter = new NextAdapter(res, req);
    serverAdapter.executeController(GetMediaController.get);
}

//Next has a response limito up to 4MB, it can be disabled by setting the config below.
export const config = {
    api: {
        responseLimit: false,
        bodyParser: {
            sizeLimit: false,
          },
        maxDuration: 60 * 2, //60 seconds * 2 = 2 minutes
    },
}