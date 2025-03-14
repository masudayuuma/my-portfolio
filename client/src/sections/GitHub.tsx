import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { FaGithub } from "react-icons/fa";

interface GitHubStats {
  contributions: number;
  repositories: number;
  pullRequests: number;
  stars: number;
}

const GitHub = () => {
  const { data: githubStats, isLoading } = useQuery<GitHubStats>({
    queryKey: ['/api/github/stats'],
    staleTime: 1000 * 60 * 60, // 1 hour
  });

  // Generate a dummy contribution grid for the design
  const contributionGrid = Array(35).fill(0).map(() => {
    return Math.random() * 0.9 + 0.1; // Random intensity between 0.1 and 1.0
  });

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">GitHub活動</h2>
        
        <Card className="bg-slate-800 max-w-4xl mx-auto border-0">
          <CardContent className="p-6">
            <div className="flex justify-center mb-8">
              <div className="grid grid-cols-7 gap-2">
                {contributionGrid.map((intensity, i) => (
                  <div 
                    key={i}
                    className="w-4 h-4 rounded-sm"
                    style={{ backgroundColor: `rgba(59, 130, 246, ${intensity})` }}
                  ></div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Card className="bg-slate-700 border-0 w-40">
                <CardContent className="p-4 text-center">
                  {isLoading ? (
                    <Skeleton className="h-8 w-16 mx-auto mb-1 bg-slate-600" />
                  ) : (
                    <div className="text-2xl font-bold text-primary-400">{githubStats?.contributions || 156}</div>
                  )}
                  <div className="text-sm text-slate-300">コントリビューション</div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-700 border-0 w-40">
                <CardContent className="p-4 text-center">
                  {isLoading ? (
                    <Skeleton className="h-8 w-16 mx-auto mb-1 bg-slate-600" />
                  ) : (
                    <div className="text-2xl font-bold text-primary-400">{githubStats?.repositories || 12}</div>
                  )}
                  <div className="text-sm text-slate-300">リポジトリ</div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-700 border-0 w-40">
                <CardContent className="p-4 text-center">
                  {isLoading ? (
                    <Skeleton className="h-8 w-16 mx-auto mb-1 bg-slate-600" />
                  ) : (
                    <div className="text-2xl font-bold text-primary-400">{githubStats?.pullRequests || 28}</div>
                  )}
                  <div className="text-sm text-slate-300">Pull Requests</div>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-700 border-0 w-40">
                <CardContent className="p-4 text-center">
                  {isLoading ? (
                    <Skeleton className="h-8 w-16 mx-auto mb-1 bg-slate-600" />
                  ) : (
                    <div className="text-2xl font-bold text-primary-400">{githubStats?.stars || 42}</div>
                  )}
                  <div className="text-sm text-slate-300">スター</div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8">
              <Button 
                variant="secondary"
                className="bg-slate-700 hover:bg-slate-600"
                onClick={() => window.open("https://github.com/", "_blank")}
              >
                <FaGithub className="mr-2" />
                <span>GitHubプロフィールを見る</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GitHub;
