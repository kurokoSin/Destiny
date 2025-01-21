import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    /* 運命のお告げ */
    REVELATIONS: JSON.stringify(
      [
        { key:"cm5xpg2u000140cl5gvwwht2t", date: "2025-01-19", day_week: "Sun", time_begin: "17:50", time_end: "18:00", isopen: true, 
                                          heading: "ＳＴＡＴＩＯＮ　Ａｉ　ＨａｃｋＧＡＬＡ",
                                          pat01: "運命'kerのアイコンが表示されているところでハンカチを落として、近くで本を読んでてください。",
                                          pat02: "運命'kerのアイコン付近のハンカチを拾って、近くで本を読んでいる人に渡してください"},

        { key:"cm5xplq4t00160cl5fsq5e6nu", date: "2025-01-25", day_week: "Sat", time_begin: "15:00", time_end: "17:00", isopen: false,
                                          heading: "ミュシャ展～アール・ヌーヴォーの女神たち～",
                                          pat01: "",
                                          pat02: ""},

        { key:"cm5xpmj7500180cl53gzpbic0", date: "2025-01-26", day_week: "Sun", time_begin: "09:00", time_end: "12:00", isopen: false, 
                                          heading: "名古屋謎解き小旅行　〜謎のうさぎと巡るたび〜",
                                          pat01: "常にガイドマップ片手に持ってイベントを楽しんでください。",
                                          pat02: "イベントを楽しんでいる詳しそうな方に案内してもらってください。"},

        { key:"cm5xpn0qv00190cl5btxdhj0e", date: "2025-01-26", day_week: "Sun", time_begin: "13:00", time_end: "13:30", isopen: false, 
                                          heading: "リアル脱出ゲーム『ナゾだらけの部屋からの脱出』",
                                          pat01: "イベント会場入口で参加者を探してください。",
                                          pat02: "イベント会場に参加者募集してる方とゲームを楽しんでください。（友人同伴可(2人まで)）"},

        { key:"cm5xpsg7k001a0cl55ooyfz67", date: "2025-02-06", day_week: "Thu", time_begin: "15:30", time_end: "16:30", isopen: false, 
                                          heading: "ＳＴＡＴＩＯＮ　Ａｉ　Ｏ　Ｓｔａｇｅ",
                                          pat01: "最後のプレゼン終了後、立って拍手をしてください。",
                                          pat02: "最後のプレゼン終了後、拍手した人に感想を聴いてください"},

        { key:"jj59wt0nupi3hl3bnnutc85x", date: "2025-02-22", day_week: "Sat", time_begin: "14:00", time_end: "15:30", isopen: false, 
                                          heading: "サタデープログラム「未来の選択肢を広げる〜AI、スタートアップ、起業〜",
                                          pat01: "講演を聞いた後、最後まで残ってください。",
                                          pat02: "講演を聞いた後、最後まで残ってください。"},

      ]
    )
  }
};

/* 運命のお告げ */
export default nextConfig;
