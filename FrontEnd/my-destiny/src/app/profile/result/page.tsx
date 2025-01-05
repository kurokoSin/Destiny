// import Image from "next/image";
import Link  from "next/link";

export default function Home() {
  return (<>
    <h4 className="text-4xl font-bold text-center mt-2 me-auto text-purple-500 w-full max-w-md border-b-2 border-solid">
      <div className="w-full max-w-md flex">
        <div>運命&apos;ker</div>
      </div>
    </h4>
    <main className="flex flex-col gap-8 p-3">
      <div className="">
          <div className="text-l font-bold">さぁ運命の入口に立ちました</div>
          <div className="text-l">あなたにふさわしい運命のお相手をお探しします。運命の啓示があるまで、数日おまちください。</div>
          <div className="notification mt-5">あなたの性格診断結果</div>
          <p className="border border-gray-400 border-dotted bg-yellow-100">
          マメな性格で気配りもうまく、誰とでも合わせることができます。
          ただ、慎重になりすぎて用心深くなったり、あれこれ考えたりしてしまうクセがあるようです。いったん夢中になるとほかの事が目に入らなくなることもあります。
          親しみやすく表裏のない性格で人を惹きつける魅力があります。やや根気にかけるものの、物事を多角的にとらえて分析することができます。
          </p>
          <Link href={`/dashboard`} 
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center mt-3"
          >
            戻る
          </Link>
      </div>
    </main>
  </>);
}