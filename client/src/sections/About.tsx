import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Code, Languages } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="inline-block pb-2 border-b-4 border-primary-500">自己紹介</span>
        </h2>
        
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4 text-slate-900 dark:text-white">はじめまして、太郎です</h3>
                <div className="space-y-4 text-slate-700 dark:text-slate-300">
                  <p>
                    就活中のエンジニア志望の大学生です。テクノロジーが社会に与える影響に情熱を持ち、特にWeb開発とサーバーサイドの技術に関心があります。
                  </p>
                  <p>
                    大学では情報工学を専攻し、Ruby on Railsを中心にフルスタック開発の経験を積んできました。チームでの協働やオープンソースコミュニティへの貢献を通じて、日々スキルを磨いています。
                  </p>
                  <p>
                    目標は、ユーザー体験を向上させる革新的なWebアプリケーションを開発し、技術を通じて社会に貢献することです。
                  </p>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-xl mb-3 text-slate-900 dark:text-white">趣味・関心</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-sm">オープンソース開発</span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-sm">ゲーム開発</span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-sm">AI・機械学習</span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-sm">テックブログ執筆</span>
                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-sm">ハッカソン参加</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3 space-y-6">
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5 text-primary-500" />
                    <span>教育</span>
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    〇〇大学 情報工学部<br />
                    2020年4月 - 2024年3月（予定）
                  </p>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Code className="mr-2 h-5 w-5 text-primary-500" />
                    <span>現在の目標</span>
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    • Rails開発の経験を深める<br />
                    • フロントエンドのスキルを向上<br />
                    • インフラ技術の学習を継続
                  </p>
                </div>
                
                <div className="bg-slate-50 dark:bg-slate-700 p-4 rounded-xl">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Languages className="mr-2 h-5 w-5 text-primary-500" />
                    <span>言語</span>
                  </h4>
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    • 日本語（ネイティブ）<br />
                    • 英語（ビジネスレベル）
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
