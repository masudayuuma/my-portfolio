export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  imageIcon: string;
  url: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Railsアプリケーションのパフォーマンス最適化テクニック",
    excerpt:
      "N+1クエリ問題の解決方法やキャッシュの効果的な活用など、Railsアプリのパフォーマンスを向上させるためのテクニックを解説します。",
    date: "2023年5月15日",
    imageIcon: "file-code",
    url: "#",
  },
  {
    id: 2,
    title: "DockerとRailsで作る開発環境",
    excerpt:
      "Dockerを使用してRailsの開発環境を構築する方法を初心者向けに解説。複数のサービスを含む構成の例と注意点について紹介します。",
    date: "2023年4月2日",
    imageIcon: "server",
    url: "#",
  },
  {
    id: 3,
    title: "Gitフローの効果的な使い方",
    excerpt:
      "チーム開発での効率的なGitの使い方について解説。ブランチ戦略やコミットメッセージの書き方など、現場で役立つノウハウを紹介します。",
    date: "2023年3月10日",
    imageIcon: "code-branch",
    url: "#",
  },
];
