import MediaAdapter from "../adapters/media-adapter";
import Audio from "../entities/audio";
import GetAudioExeption from "./exeptions/get-audio-exeption";

export default class GetAudioUseCase {
    constructor(
        private mediaAdapter: MediaAdapter
    ){}

    public execute(url: string){
        if(!url || url === ''){
            throw GetAudioExeption.UrlNotProvided();
        }

        return new Audio(this.mediaAdapter.get(url));
    }
}