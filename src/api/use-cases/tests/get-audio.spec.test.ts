import { it, expect, describe, vi} from 'vitest'
import GetAudioUseCase from '../get-audio';
import IMediaRepository from '@/api/repository/media-repository';
import Audio from '../../entities/audio';
import GetAudioException from '../exeptions/get-audio-exeption';

describe("Get Audio useCase", ()=>{

    const url = 'https://www.youtube.com/watch?v=6n3pFFPSlW4';
    const blankUrl = '';

    class MediaAdapterMock implements IMediaRepository {
        public get = vi.fn().mockImplementation((url: string, quality: string)=>{
            if(quality === 'low'){
                return 'low';
            }
            if(quality === 'high'){
                return 'high';
            }
        });

        public getVideoInfo = vi.fn().mockResolvedValue({
            title: 'title',
            length: 10
        });
    };
    
    it("Should return a Audio instance.", async ()=>{
        const useCase = new GetAudioUseCase(new MediaAdapterMock);

        expect(await useCase.execute(url)).toBeInstanceOf(Audio);
    });

    it("Should have working exeptions.", ()=>{
        const adpterMock = new MediaAdapterMock;
        
        adpterMock.getVideoInfo = vi.fn().mockResolvedValue(undefined);

        const useCase = new GetAudioUseCase(adpterMock);

        expect(async()=>{
            await useCase.execute(blankUrl);
        }).rejects.toThrow(GetAudioException.UrlNotProvided());
        
        expect(async()=>{
            await useCase.execute(url);
        }).rejects.toThrow(GetAudioException.VideoNotFound());
    });

    it(("should get a better quality video if it's shorter than 5 minutes."), async()=>{
        const adapterMock = new MediaAdapterMock();

        adapterMock.getVideoInfo = vi.fn().mockResolvedValue({
            title: 'title',
            length: 4.9  // >= 5 must be low, < 5 must be high
        });

        const useCase = new GetAudioUseCase(adapterMock);

        const audio = await useCase.execute(url)

        expect(audio.get()).toBe('high');
    });

    it(("should get a worst quality video if it's equal or larger than 5 minutes."), async()=>{
        const adapterMock = new MediaAdapterMock();

        adapterMock.getVideoInfo = vi.fn().mockResolvedValue({
            title: 'title',
            length: 5  // >= 5 must be low, < 5 must be high
        });

        const useCase = new GetAudioUseCase(adapterMock);

        const audio = await useCase.execute(url);

        expect(audio.get()).toBe('low');
    });
});
