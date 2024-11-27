import Image from "next/image";
import bg from '../../public/background/Bg.jpg'
import RenderModel from "./components/RenderModel";
import Book from './components/models/Book'
import Name from "./components/Aboutme";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image src={bg} fill className="w-full h-full object-cover -z-10 object-center opacity-25" />
      <Name/>
      <div className="w-full h-screen">
        <RenderModel>
          <Book/>
        </RenderModel>
      </div>
    </main>
  );
}
