import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useToast } from "@/hooks/use-toast";

const CodeHighlight = () => {
  const { toast } = useToast();

  const railsCodeSample = `# モデルの定義
class User < ApplicationRecord
  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :likes
  has_many :liked_posts, through: :likes, source: :post
  
  validates :username, presence: true, uniqueness: true, length: { minimum: 3, maximum: 20 }
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  
  scope :active, -> { where(active: true) }
  scope :created_this_week, -> { where('created_at >= ?', 1.week.ago) }
  
  def recent_posts(limit = 5)
    posts.order(created_at: :desc).limit(limit)
  end
  
  def full_name
    "\#{first_name} \#{last_name}"
  end
end

# コントローラでの使用例
class PostsController < ApplicationController
  before_action :authenticate_user!
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  
  def index
    @posts = Post.includes(:user, :comments, :categories)
                .published
                .order(created_at: :desc)
                .page(params[:page])
  end
  
  def show
    @comment = Comment.new
    @related_posts = @post.find_related_tags
  end
  
  private
  
  def set_post
    @post = Post.find(params[:id])
  end
  
  def post_params
    params.require(:post).permit(:title, :content, :published, :tag_list, category_ids: [])
  end
end`;

  const jsCodeSample = `// 非同期データ取得の例
const fetchUserData = async (userId) => {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    
    if (!response.ok) {
      throw new Error(\`HTTP error! Status: \${response.status}\`);
    }
    
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('データの取得に失敗しました:', error);
    throw error;
  }
};

// 複数の非同期処理を並行実行
const loadDashboardData = async () => {
  try {
    const [user, posts, notifications] = await Promise.all([
      fetchUserData(currentUserId),
      fetchUserPosts(currentUserId),
      fetchNotifications(currentUserId)
    ]);
    
    renderDashboard({ user, posts, notifications });
  } catch (error) {
    showErrorMessage('ダッシュボードの読み込みに失敗しました');
  } finally {
    hideLoadingSpinner();
  }
};

// カスタムフック例 (React)
function useUserData(userId) {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    let isMounted = true;
    
    const loadUser = async () => {
      try {
        setLoading(true);
        const data = await fetchUserData(userId);
        
        if (isMounted) {
          setUserData(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
          setUserData(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };
    
    loadUser();
    
    return () => {
      isMounted = false;
    };
  }, [userId]);
  
  return { userData, loading, error };
}`;

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "コピーしました",
      description: "コードがクリップボードにコピーされました。",
      duration: 3000,
    });
  };

  return (
    <section id="code-highlight" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="inline-block pb-2 border-b-4 border-primary-500">コードサンプル</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="mb-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Ruby on Rails - Active Recordサンプル</h3>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => copyToClipboard(railsCodeSample)}
                  className="text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400"
                >
                  <Copy className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-inner">
                <SyntaxHighlighter 
                  language="ruby" 
                  style={vscDarkPlus}
                  showLineNumbers
                  customStyle={{ 
                    margin: 0,
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem'
                  }}
                >
                  {railsCodeSample}
                </SyntaxHighlighter>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex justify-between items-center">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">JavaScript - 非同期処理サンプル</h3>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => copyToClipboard(jsCodeSample)}
                  className="text-slate-500 hover:text-primary-500 dark:text-slate-400 dark:hover:text-primary-400"
                >
                  <Copy className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="rounded-lg overflow-hidden shadow-inner">
                <SyntaxHighlighter 
                  language="javascript" 
                  style={vscDarkPlus}
                  showLineNumbers
                  customStyle={{ 
                    margin: 0,
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem'
                  }}
                >
                  {jsCodeSample}
                </SyntaxHighlighter>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CodeHighlight;
