import ytdl, { downloadOptions } from "ytdl-core";
import IMediaRepository from "../repository/media-repository";
import MediaGetterExeption from "./exeptions/media-getter-exeption";

export default class MediaGetter implements IMediaRepository {

    public get(url: string){
        const options: downloadOptions = {
            filter: 'audioonly',
            quality: 'highestaudio',
        }

        //tries to valdiae the url.
        try{
            ytdl.getURLVideoID(url)
        }
        catch{
            throw MediaGetterExeption.VideoNotFound();
        }
        
        return ytdl(url, options);
    }
}