import Image from "next/image";
import {SparklesCore} from './Background/background';
export default function Home() {
  return (
    <main className="text-white w-full min-h-screen  bg-gradient-to-b from-orange-900 to-black overflow-hidden">
      <div className="w-full h-full fixed">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.9}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
    </main>
  );
}
