import { NextApiRequest, NextApiResponse } from 'next';
import GetMediaController from '../../../api/controllers/get-media-controller';
import NextAdapter from '@/api/adapters/next-adapter';

export default function handler(req: NextApiRequest , res: NextApiResponse){
    const serverAdapter = new NextAdapter(res, req);
    serverAdapter.executeController(GetMediaController.get);
}