export interface ResumeItem {
  id: number;
  title: string;
  period: string;
  description: string;
}

export interface Certificate {
  id: number;
  name: string;
  date: string;
  icon: string;
}

export const resumeItems: ResumeItem[] = [
  {
    id: 1,
    title: "〇〇大学 情報工学部",
    period: "2020年4月 - 2024年3月（予定）",
    description:
      "情報工学を専攻。アルゴリズム、データ構造、サーバーサイドプログラミングを中心に学習。卒業研究ではWebアプリケーションのパフォーマンス最適化に関する研究を実施。",
  },
  {
    id: 2,
    title: "株式会社テック企業 インターン",
    period: "2022年6月 - 2022年9月",
    description:
      "3ヶ月間のサマーインターンシップに参加。Ruby on Railsを使用した社内ツールの開発を担当。データベース設計から実装、テストまでを経験。",
  },
  {
    id: 3,
    title: "個人開発プロジェクト",
    period: "2021年 - 現在",
    description:
      "複数の個人Webアプリケーションを開発。GitHubでオープンソースプロジェクトに貢献し、技術ブログを通じて知識を共有。また、ハッカソンやコードコンテストにも積極的に参加。",
  },
];

export const certificates: Certificate[] = [
  {
    id: 1,
    name: "基本情報技術者試験",
    date: "2021年10月",
    icon: "certificate",
  },
  {
    id: 2,
    name: "AWS Certified Solutions Architect - Associate",
    date: "2022年6月",
    icon: "certificate",
  },
  {
    id: 3,
    name: "Ruby Association Certified Ruby Programmer Silver",
    date: "2022年8月",
    icon: "certificate",
  },
  {
    id: 4,
    name: "TOEIC 850点",
    date: "2023年1月",
    icon: "certificate",
  },
];
