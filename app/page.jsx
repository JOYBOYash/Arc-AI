import Image from "next/image";
import Navbar from "./components/Navbar";
import Homepage from "./pages/homepage/page";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen gap-16 mt-4 ">
      <Navbar></Navbar>
      <Homepage></Homepage>
      {/* 
      font-[family-name:var(--font-geist-sans)] */}
      {/* <div className="w-full mt-32 bg-green-500/90 h-96 items-center justify-center">
        <div className="bg-white/40 p-4 w-full items-center justify-items-center">
          <h1 className="text-center text-black "> welcome </h1>
        </div>
      </div> */}
    </div>
  );
}
