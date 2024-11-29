import Link from "next/link";

export const ComingSoonPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 to-blue-500  text-white rounded-3xl">
      <div className="text-center px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">Coming Soon</h1>
        <p className="text-lg md:text-xl mb-6 text-white">
          We're working hard to bring something amazing to you. Stay tuned!
        </p>
        <Link href={"/dashboard"}>
        <button className="bg-white text-purple-500 font-semibold py-2 px-4 rounded shadow hover:-translate-y-1 duration-200 hover:shadow-black">
          Back to Dashboard
        </button>
        </Link>
        
      </div>
    </div>
  );
};
