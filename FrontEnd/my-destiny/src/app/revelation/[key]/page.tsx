import { MyLink } from "@/app/components/ButtonNormal";
import { DayOfWeek } from "@/app/components/DayOfWeek";
import { Revelation } from "@/app/components/Revelations";

export default async function Page({ params }: { params: Promise<{key: string}> }) {
  const { key } = await params;
  
  /* 運命のお告げ 読み込み */
  const revs:Revelation[] = JSON.parse(process.env.REVELATIONS!);

  const rev = revs.find((rev:Revelation) => { return rev.key == key });

  const day_week = DayOfWeek(rev ? rev.day_week : "");

  return (<>
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="">
            <div className="">{rev?.date} ({day_week}) {rev?.time_begin} 〜 {rev?.time_end}</div>
            <div className="notification">{rev?.heading}</div>
            <div className="notification">{rev?.pat01}</div>
        </div>
        <MyLink href={`/dashboard`} caption="戻る" target="_self" />
      </main>
    </div>
  </>);
}
