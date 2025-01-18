import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    /* 運命のお告げ */
    REVELATIONS: JSON.stringify(
      [
        { key:"cm5xpfq6n00130cl5ahpc0ic7", date: "2025-01-18", day_week: "Sat", time_begin: "13:00", time_end: "16:00", isopen: true,  
                                          heading: "なごやさいマルシェ　ｉｎ　久屋大通公園2025", 
                                          pat01: "両手いっぱいに野菜をかかえてください。",
                                          pat02: "エコバッグを余分に一つ持っていってください。" },

        { key:"cm5xph6jo00150cl5eek59jwi", date: "2025-01-19", day_week: "Sun", time_begin: "11:00", time_end: "17:00", isopen: true,  
                                          heading: "秀吉清正記念館　パネル展「城の構造」",
                                          pat01: "",
                                          pat02: ""},

        { key:"cm5xpg2u000140cl5gvwwht2t", date: "2025-01-19", day_week: "Sun", time_begin: "17:50", time_end: "18:00", isopen: true, 
                                          heading: "ＳＴＡＴＩＯＮ　Ａｉ　ＨａｃｋＧＡＬＡ",
                                          pat01: "運命'kerのアイコンが表示されているところでハンカチを落として、近くで本を読んでてください。",
                                          pat02: "運命'kerのアイコン付近のハンカチを拾って、近くで本を読んでいる人に渡してください"},

        { key:"cm5xplq4t00160cl5fsq5e6nu", date: "2025-01-25", day_week: "Sat", time_begin: "15:00", time_end: "17:00", isopen: false,
                                          heading: "",
                                          pat01: "",
                                          pat02: ""},

        { key:"cm5xpmj7500180cl53gzpbic0", date: "2025-01-26", day_week: "Sun", time_begin: "09:00", time_end: "12:00", isopen: false, 
                                          heading: "名古屋謎解き小旅行　〜謎のうさぎと巡るたび〜",
                                          pat01: "常にガイドマップ片手に持ってイベントを楽しんでください。",
                                          pat02: "イベントを楽しんでいる詳しそうな方に案内してもらってください。"},

        { key:"cm5xpn0qv00190cl5btxdhj0e", date: "2025-01-26", day_week: "Sun", time_begin: "17:00", time_end: "22:00", isopen: false, 
                                          heading: "鶴舞公園　ＷＩＮＴＥＲ　ＩＬＬＵＭＩＮＡＴＩＯＮ",
                                          pat01: "",
                                          pat02: ""},

        { key:"cm5xpsg7k001a0cl55ooyfz67", date: "2025-02-06", day_week: "Thu", time_begin: "15:00", time_end: "16:30", isopen: false, 
                                          heading: "STATION Ai O Stage",
                                          pat01: "",
                                          pat02: ""},
      ]
    )
  }
};

/* 運命のお告げ */
export default nextConfig;
