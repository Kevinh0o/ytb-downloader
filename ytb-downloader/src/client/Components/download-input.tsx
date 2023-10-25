'use client';
import { useEffect, useState } from "react";
import Input from "./input";
import Icon from "./icon";

export default function DownloadInput() {
    const [url, setUrl] = useState("");
    const [error, setError] = useState("");

    async function handleClick(){
        setError("");

        try{
            const response = await fetch("/api/download?url=" + url);

            //handling errors
            if(response.status !== 200){
                throw new Error("Something went wrong");
            }

            //Create a binary file from the response an then creates a link to download it as mp3
            //also automatically clicks the link
            response.blob().then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = "audio.mp3";
                a.click();
            });
        }
        catch(err: any){
            setError(err.message);
        }
    }
    
    return (
        <div className="w-[80%] sm:w-[500px]">
            {error &&
                <p className="text-red-500 text-sm">
                    {error}
                </p>
            }
            <div className="flex bg-white border border-1 border-gray-300 rounded-md p-2 text-sm">
                <Input
                    type="url"
                    placeholder="www.youtube.com/watch?v= YOUR VIDEO URL HERE"
                    setValue={setUrl}
                />
                <button 
                    onClick={handleClick}
                    disabled={url.length < 3}
                    className="bg-white w-[10%] h-full flex justify-center items-center"
                >
                    <Icon src="./download.svg" size={30} alt="download icon" />
                </button>
            </div>
        </div>
    )
}