export interface ProjectTag {
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  challenges: string;
  tags: ProjectTag[];
  githubUrl: string;
  demoUrl: string;
  imageUrl?: string;
  imageAlt: string;
  imageIcon: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "タスク管理アプリ",
    description:
      "シンプルで使いやすいタスク管理アプリケーション。Ruby on Railsで開発し、ReactでフロントエンドをSPAとして実装。",
    longDescription:
      "シンプルで使いやすいタスク管理アプリケーション。Ruby on Railsで開発し、ReactでフロントエンドをSPAとして実装。ユーザー認証、タスクの作成・編集・削除、カテゴリ分け、期限設定、通知機能などを実装しています。",
    challenges:
      "本プロジェクトでは、パフォーマンスとスケーラビリティの課題がありました。大量のデータを効率的に処理するために、インデックス最適化とキャッシュ戦略を実装し、応答時間を60%短縮することができました。また、ユーザビリティ向上のためにUIを改善し、コンバージョン率の向上にも貢献しました。",
    tags: [
      { name: "Ruby on Rails" },
      { name: "React" },
      { name: "PostgreSQL" },
    ],
    githubUrl: "https://github.com/",
    demoUrl: "https://example.com/",
    imageIcon: "code",
    imageAlt: "タスク管理アプリのスクリーンショット",
  },
  {
    id: 2,
    title: "ECサイト",
    description:
      "ストライプ決済を導入したECサイト。Rails APIとReactを使用し、ユーザー認証やカート機能を実装。",
    longDescription:
      "ストライプ決済を導入したECサイト。Rails APIとReactを使用し、ユーザー認証やカート機能を実装。商品検索、フィルタリング、レビュー機能、お気に入り機能なども実装しています。",
    challenges:
      "本プロジェクトでは、セキュリティと支払い処理の信頼性が最大の課題でした。StripeAPIを統合し、PCI準拠の支払い処理システムを実装。また、カート放棄率を減らすためのUX改善を行い、コンバージョン率を25%向上させました。",
    tags: [
      { name: "Ruby on Rails" },
      { name: "React" },
      { name: "Stripe" },
      { name: "MySQL" },
    ],
    githubUrl: "https://github.com/",
    demoUrl: "https://example.com/",
    imageIcon: "shopping-cart",
    imageAlt: "ECサイトのスクリーンショット",
  },
  {
    id: 3,
    title: "リアルタイムチャット",
    description:
      "ActionCableを使用したリアルタイムチャットアプリケーション。複数のルームとダイレクトメッセージに対応。",
    longDescription:
      "ActionCableを使用したリアルタイムチャットアプリケーション。複数のルームとダイレクトメッセージに対応。ファイル共有、既読機能、通知機能なども実装しています。",
    challenges:
      "本プロジェクトでは、WebSocketを使用したリアルタイム通信と、多数のユーザーが同時接続した際のスケーラビリティが課題でした。Redisを用いたPub/Subモデルを実装し、水平スケーリングを可能にしました。また、メッセージの永続化と検索機能も実装し、ユーザー体験を向上させました。",
    tags: [
      { name: "Ruby on Rails" },
      { name: "ActionCable" },
      { name: "Redis" },
      { name: "Stimulus" },
    ],
    githubUrl: "https://github.com/",
    demoUrl: "https://example.com/",
    imageIcon: "comments",
    imageAlt: "リアルタイムチャットアプリのスクリーンショット",
  },
];
