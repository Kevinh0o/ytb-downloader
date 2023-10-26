import DownloadInput from "@/client/Components/download-input";
import Icon from "@/client/Components/icon";
import Input from "@/client/Components/input";
import Logo from "@/client/Components/logo";
import SubText from "@/client/Components/sub-text";
import Link from "next/link";

import api_key from '../bot/index'

export default function Home() {
  return (
    <main className="bg-gray-100 w-full h-screen">
      <div className="h-full w-full flex flex-col justify-center items-center gap-4 text-center">
        <Logo />
        <SubText />
        <DownloadInput />
        <div className="flex gap-4">
          <Link href="/github">
            <Icon src="/github.svg" size={40} alt="github icon"/>
            {api_key()}
          </Link>
          <Link href="/discord">
            <Icon src="/discord.png" size={40} alt="discord icon"/>
          </Link>
        </div>
      </div>
    </main>
  )
}
