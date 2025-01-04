import Image from "next/image";
import Link  from "next/link";

export default function Home() {
  return (<>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="">
            <div className="text-xl">1月26日 日曜日 9:00〜</div>
            <div className="notification">名古屋謎解き小旅行　〜謎のうさぎと巡るたび〜　にて</div>
            <div className="notification">イベントグッズを常に片手に持って、謎解きをしくてください</div>
            <Link href={`/dashboard`} 
             className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center mt-3"
            >
              戻る
            </Link>
        </div>
      </main>
    </div>
  </>);
}
