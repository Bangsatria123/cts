import Navbar from "./utils/navbar";



export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to the CTS</h1>
      </div>
    </main>
  );
}
