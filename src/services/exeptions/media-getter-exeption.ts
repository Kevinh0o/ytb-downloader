export default class MediaGetterExeption extends Error {
    constructor(
        public message: string,
        public code: number
    ){
        super(message);
    }
    
    static VideoNotFound(){

        return new MediaGetterExeption(
            'Vídeo não encontrado.',
            404 //not found
        );
    }
}