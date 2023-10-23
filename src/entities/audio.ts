
export default class Audio {
    constructor(
        private mediaStream: any
    ) {}

    public get(){
        
        return this.mediaStream;
    }
}