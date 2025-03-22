import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-6">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="mb-8">
          <div className="text-4xl md:text-5xl font-bold text-center">
            <h1>Welcome to <br />
              <span className="text-green-400">Stackie HMS</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
