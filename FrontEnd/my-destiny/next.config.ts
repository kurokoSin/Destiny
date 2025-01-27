import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    /* 運命のお告げ */
    REVELATIONS: JSON.stringify(
      [
        { key:"dz45svbl98b3ecep7e1y78sj", date: "2025-01-26", day_week: "Sun", time_begin: "09:30", time_end: "09:30", isopen: true, 
                                          heading: "某朝ドラ ロケ地",
                                          link:  "",
                                          pat01: "建物入口にて落としたパンフレットを拾ってあげてください。",
                                          pat02: "建物入口にてパンフレットを落としてください。"},

        { key:"cm5xpsg7k001a0cl55ooyfz67", date: "2025-02-06", day_week: "Thu", time_begin: "15:40", time_end: "15:45", isopen: true, 
                                          heading: "ＳＴＡＴＩＯＮ　Ａｉ　Ｏ　Ｓｔａｇｅ",
                                          link:  "https://techgala.jp/hackathon/",
                                          pat01: "この指示を見たら、立って拍手をしてください。",
                                          pat02: "この指示を見たら、立って拍手をしてください。",
                                          pat03: "最初のプレゼン終了後、拍手した人に感想を聴いてください"},

        { key:"c9m97sezp385z78dkxvlwpmk", date: "2025-02-08", day_week: "Sat", time_begin: "13:30", time_end: "14:00", isopen: false, 
                                          heading: "リアル脱出ゲーム×葬送のフリーレン『千年の夢からの脱出』",
                                          link:  "https://realdgame.jp/s/frieren/",
                                          pat01: "葬送のフリーレングッズを目立つように持ち、イベント開場前で立っててください。",
                                          pat02: "イベント開場前で葬送のフリーレングッズを持った方に「もしかして、あなたも今から脱出ゲームですか？」と声かけてください。"},

        { key:"jj59wt0nupi3hl3bnnutc85x", date: "2025-02-22", day_week: "Sat", time_begin: "14:00", time_end: "15:30", isopen: true, 
                                          heading: "サタデープログラム「未来の選択肢を広げる〜AI、スタートアップ、起業〜",
                                          link:  "https://www.satprogram.net/index.html",
                                          pat01: "講演を聞いた後、最後まで残ってください。",
                                          pat02: "講演を聞いた後、最後まで残ってください。"},

        { key:"w6s1qtjcmymjtu7wastw73w5", date: "2025-03-02", day_week: "Sun", time_begin: "14:30", time_end: "16:30", isopen: false, 
                                          heading: "初心者のためのボートレース教室（要予約）",
                                          link:  "https://taikenplan.jp/program/detail.php?id=1772",
                                          pat01: "講座終了後、参加特典プレゼントを手に持って出口に立っててください。",
                                          pat02: "講座終了後、参加特典プレゼントを手に持っている方に「楽しかったですね」と声かけてください。"},

        { key:"ubrmik25vr5wd9q4b8cngqwv", date: "2025-03-12", day_week: "Wed", time_begin: "17:30", time_end: "20:30", isopen: true, 
                                          heading: "ＵＶＥＲｗｏｒｌｄ　ＬＩＶＥ　ＴＯＵＲ　２０２５（要予約）",
                                          link:  "https://www.zepp.co.jp/hall/nagoya/schedule/single/?rid=146593",
                                          pat01: "１階スタンディング席 ライブ始まる前に奥側後方入口でドリンクを持っている方に「今日は楽しみですね。」と声かけてください。",
                                          pat02: "１階スタンディング席 ライブ始まる前に奥側後方入口でドリンクを持って立っていてください。"},

      ]
    )
  }
};

/* 運命のお告げ */
export default nextConfig;
