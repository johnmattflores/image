import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <h1 className="text-4xl font-bold mt-10">Image Optimization</h1>

      <div className="w-full flex gap-4 mt-10 mb-5">
        <div className="relative w-1/2">
          <h2 className="text-2xl font-bold text-center">Unoptimized</h2>
          <p className="text-xl text-center">241kB</p>
        </div>

        <div className="relative w-1/2">
          <h2 className="text-2xl font-bold text-center">Optimized</h2>
          <p className="text-xl text-center">43.7kB (81.87% Reduction)</p>
        </div>
      </div>

      <div className="w-full flex gap-4">
        <div className="relative w-1/2">
          <img className="object-cover w-full" src="./example.jpg" alt="Unoptimized Test Image 1" />
        </div>

        <div className="relative w-1/2">
          <Image
            className="object-cover"
            src="/example.jpg"
            alt="Optimized Test Image 1"
            fill
          />
        </div>
      </div>

      <div className="w-full flex gap-4 mt-10 mb-5">
        <div className="relative w-1/2">
          <h2 className="text-2xl font-bold text-center">Unoptimized</h2>
          <p className="text-xl text-center">5.5MB</p>
        </div>

        <div className="relative w-1/2">
          <h2 className="text-2xl font-bold text-center">Optimized</h2>
          <p className="text-xl text-center">218kB (96.04% Reduction)</p>
        </div>
      </div>

      <div className="w-full flex gap-4">
        <div className="relative w-1/2 h-[600px] overflow-hidden">
          <img className="object-cover w-full" src="./example-2.jpg" alt="Unoptimized Test Image 2" />
        </div>

        <div className="relative w-1/2">
          <Image
            className="object-cover"
            src="/example-2.jpg"
            alt="Optimized Test Image 2"
            fill
          />
        </div>
      </div>
    </main>
  );
}
