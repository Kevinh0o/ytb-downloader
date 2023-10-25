import Icon from "@/client/Components/icon";
import Input from "@/client/Components/input";
import Logo from "@/client/Components/logo";
import SubText from "@/client/Components/sub-text";

export default function Home() {
  return (
    <main className="bg-gray-100 w-screen h-screen">
      <div className="h-full w-full flex flex-col justify-center items-center gap-4 text-center">
        <Logo />
        <SubText />
        <Input />
        <div className="flex gap-4">
          <Icon src="/vercel.svg" size={50} alt="github icon"/>
          <Icon src="/vercel.svg" size={50} alt="github icon"/>
        </div>
      </div>
    </main>
  )
}
