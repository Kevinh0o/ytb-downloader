import MediaAdapter from "../adapters/media-adapter";
import Audio from "../entities/audio";
import IMediaRepository from "../repository/media-repository";
import GetAudioException from "./exeptions/get-audio-exeption";

export default class GetAudioUseCase {
    constructor(
        private mediaAdapter: IMediaRepository
    ){}

    public async execute(url: string){
        if(!url || url === ''){
            throw GetAudioException.UrlNotProvided();
        }

        const basicInfo = await this.mediaAdapter.getVideoInfo(url);

        if(!basicInfo){
            throw GetAudioException.VideoNotFound();
        }

        if(basicInfo.lenght > 5){
            return new Audio(this.mediaAdapter.get(url, 'low'));
        }

        return new Audio(this.mediaAdapter.get(url, 'high'));
    }
}