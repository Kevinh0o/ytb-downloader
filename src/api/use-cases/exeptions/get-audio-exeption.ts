export default class GetAudioException extends Error {
    constructor(
        public message: string,
        public code: number
    ){
        super(message);
        this.name = 'AudioExeption';
    }
    
    static UrlNotProvided(){

        return new GetAudioException(
            "URL not provided.",
            400 //bad request
        );
    }

    static VideoNotFound(){

        return new GetAudioException(
            'Vídeo não encontrado.',
            404 //Not found
        );
    }

}