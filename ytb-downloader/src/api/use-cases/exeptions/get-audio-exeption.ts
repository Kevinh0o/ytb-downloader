export default class GetAudioExeption extends Error {
    constructor(
        public message: string,
        public code: number
    ){
        super(message);
    }
    
    static UrlNotProvided(){

        return new GetAudioExeption(
            'URL não informada.',
            400 //bad request
        );
    }
}