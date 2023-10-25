import MediaAdapter from '../adapters/media-adapter';
import MediaGetter from '../services/media-getter';
import GetAudioUseCase from '../use-cases/get-audio';

export default class GetMediaController {

    static get(req: any, res: any) {
        const mediaGetter = new MediaGetter();
        const mediaAdapter = new MediaAdapter(mediaGetter);
        const audioUseCase = new GetAudioUseCase(mediaAdapter);

        const url = req.query.url as string;

        try{
            const stream = audioUseCase.execute(url);
            stream.get().pipe(res.status(200));
        }
        catch(err: any){
            res.status(err.code).send({message: err.message});
        }
    }
}