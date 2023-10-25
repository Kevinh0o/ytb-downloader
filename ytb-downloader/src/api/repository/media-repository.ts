
export default interface IMediaRepository {
    get(url: string, quality: string): any;
    getVideoInfo(url: string): Promise<{title: string, lenght: number}> | undefined;
}