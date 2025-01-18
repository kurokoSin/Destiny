'use client'

// import { useState } from 'react'
// import { useEffect } from 'react'
import Link  from "next/link"
// import axios from 'axios'
import { BtnStyle } from '@/app/components/ButtonNormal';

export default async function Home() {
  const description = "ただいま、登録いただいた写真から性格診断しています。\r\nしばらくお待ちください。"
  // const [description, setDescription] = useState(
  //   "ただいま、登録いただいた写真から診断しています。\r\nしばらくおまちください。"
  // );

  // // 初回レンダリング時にAIを呼び出し
  // useEffect(() => {
  //   // axios
  //   // .post( "/api/analyze" )
  //   // .then( (response) => {
  //   //   const _msg = response.data?.message || "診断に失敗しました。もう一度お願いします。";
  //   //   setDescription( _msg );
  //   // })
  //   // .catch( (error) => {
  //   //   console.error("API request failed:", error);
  //   //   setDescription( "診断に失敗しました。");
  //   // });
  //   try {
  //     const response = await fetch('/api/analyze', {
  //     })

  //     if (response.ok) {
  //       const result = await response.json()
  //       console.info(result.message)
  //     } else {
  //       console.error('Analyze failed')
  //       console.error(response.body)
  //     }
  //   } catch (error) {
  //     console.error('Error:', error)
  //   } finally {
  //     console.info('close')
  //   }
  // }, []);

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
            {description}
          </p>
          <a href={process.env.NEXT_PUBLIC_Questionnaire_URL} 
            referrerPolicy="unsafe-url"
            className={BtnStyle()}
          >
            アンケートへ
          </a>
          <Link href={`/`} 
            referrerPolicy="unsafe-url"
            className={BtnStyle()}
          >
            もう一度最初から
          </Link>
      </div>
    </main>
  </>);
}