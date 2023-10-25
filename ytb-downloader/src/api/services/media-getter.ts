import ytdl, { downloadOptions } from "ytdl-core";
import IMediaRepository from "../repository/media-repository";
import MediaGetterExeption from "./exeptions/media-getter-exeption";

export default class MediaGetter implements IMediaRepository {

    public get(url: string, quality: string){
        let mediaQuality = 'highestaudio';

        if(quality === 'low'){
            mediaQuality = 'lowestaudio';
        }

        const options: downloadOptions = {
            filter: 'audioonly',
            quality: mediaQuality,
        };
        
        return ytdl(url, options);
    }
    
    public async getVideoInfo(url: string) {
        const isUrlValid = ytdl.validateURL(url);

        if(!isUrlValid){
            throw MediaGetterExeption.VideoNotFound();
        }

        const basicInfo = await ytdl.getInfo(url);

        const lenghtInMinutes = parseInt(basicInfo.videoDetails.lengthSeconds) / 60;

        return{
            title: basicInfo.videoDetails.title,
            lenght: lenghtInMinutes
        }
    }
}