import Image from "next/image";
import Link  from "next/link";
import { DayOfWeek } from "../components/DayOfWeek";
import { Revelation } from "../components/Revelations";

export default function Home() {
  /* 運命のお告げ 読み込み */
  const rev:Revelation[] = JSON.parse(process.env.REVELATIONS!);

  return (
    <div id="app" className="container me-auto px-4 h-full flex flex-col items-center">
        {/* <!-- Screen 1 --> */}
        <h3 className="text-4xl font-bold text-center mt-2 mb-8 me-auto text-purple-500 w-full max-w-md">
          <div className="w-full max-w-md flex">
            <div><Link href="/">運命&apos;ker</Link></div>
            <div className="ms-auto">
              <Link href={`/profile`}><Image src="/person-circle.svg" alt="account" width={32} height={32}/></Link>
            </div>
          </div>
        </h3>
        <div id="screen1" className="w-full max-w-md">
            <div className="space-y-6">
                {/*
                <button id="uploadBtn" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center">
                    写真アップロード
                </button>
                */}

                {rev.map((ev, key) => {
                  return <>
                  <div key={key} className="flex flex-col border-b-2">
                    <div className="">{ev.date} ({DayOfWeek(ev.day_week)}) {ev.time_begin} 〜 {ev.time_end}</div>
                    <div className=""><Link href={`revelation`}>{
                      ev.isopen ? 
                        ev.heading.substring(0,14) : 
                        <Image className="mx-auto" src="/mail_sealed_love.svg" alt="未開封" width={32} height={32} />
                    }</Link>
                    </div>
                  </div>
                  </>
                })}
            </div>
        </div>
    </div>
  );
}