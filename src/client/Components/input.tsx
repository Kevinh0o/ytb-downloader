'use client';

import { useEffect, useState } from "react";

type Props = {
    placeholder: string;
    type: "url" | "text"
    setValue: (value: string) => void;
}

export default function Input({ placeholder, type, setValue }: Props) {

    return (
        <input
            type={type}
            placeholder={placeholder}
            className="w-full outline-none bg-transparent"
            onChange={e => setValue(e.target.value) }
        />
    )
}