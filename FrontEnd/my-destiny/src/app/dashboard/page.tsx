import Image from "next/image";
import Link  from "next/link";

export default function Home() {
  return (
    <div id="app" className="container me-auto px-4 h-full flex flex-col items-center">
        {/* <!-- Screen 1 --> */}
        <h3 className="text-4xl font-bold text-center mt-2 mb-8 me-auto text-purple-500 w-full max-w-md">
          <div className="w-full max-w-md flex">
            <div>運命&apos;ker</div>
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
                <table>
                  <tbody>
                    <tr><td>1/18(<span className="bg-blue-200">土</span>)</td><td>13:00〜</td><td>なごやさいマルシェ in 久屋大通公園2025</td></tr>
                    <tr><td>1/18(<span className="bg-blue-200">土</span>)</td><td>13:00〜</td><td><Link href={`/revelation`}><Image src="/mail_sealed_love.svg" alt="未開封" width={32} height={32} /></Link></td></tr>
                    <tr><td>1/19(<span className="bg-red-200">日</span>)</td><td>11:00〜</td><td>秀吉清正記念館　パネル展「城の構造」</td></tr>
                    <tr><td>1/25(<span className="bg-blue-200">土</span>)</td><td>10:00〜</td><td><Link href={`/revelation`}><Image src="/mail_sealed_love.svg" alt="未開封" width={32} height={32} /></Link></td></tr>
                    <tr><td>1/26(<span className="bg-red-200">日</span>)</td><td>10:00〜</td><td><Link href={`/revelation`}><Image src="/mail_sealed_love.svg" alt="未開封" width={32} height={32} /></Link></td></tr>
                    <tr><td>1/26(<span className="bg-red-200">日</span>)</td><td>15:00〜</td><td><Link href={`/revelation`}><Image src="/mail_sealed_love.svg" alt="未開封" width={32} height={32} /></Link></td></tr>
                  </tbody>
                </table>
            </div>
        </div>
    </div>
  );
}