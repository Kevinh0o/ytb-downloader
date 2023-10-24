import IMediaRepository from "../repository/media-repository";
import MediaGetter from "../services/media-getter";

export default class MediaAdapter implements IMediaRepository {
    constructor(
        private mediaGetter: MediaGetter
    ) {}

    public get(url: string){
        
        return this.mediaGetter.get(url);
    }
}