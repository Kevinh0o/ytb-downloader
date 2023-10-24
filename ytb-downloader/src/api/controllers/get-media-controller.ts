import { Request, Response } from 'express';
import MediaAdapter from '../adapters/media-adapter';
import MediaGetter from '../services/media-getter';
import GetAudioUseCase from '../use-cases/get-audio';

export default class GetMediaController {

    static get(req: Request, res: Response) {
        const mediaGetter = new MediaGetter();
        const mediaAdapter = new MediaAdapter(mediaGetter);
        const audioUseCase = new GetAudioUseCase(mediaAdapter);

        const url = req.query.url as string;

        try{
            const stream = audioUseCase.execute(url);
            stream.get().pipe(res.status(200).type('mp3'));
        }
        catch(err: any){
            res.status(err.code).send({message: err.message});
        }
    }
}