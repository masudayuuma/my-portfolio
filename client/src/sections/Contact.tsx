import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Share, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "名前は2文字以上で入力してください。",
  }),
  email: z.string().email({
    message: "有効なメールアドレスを入力してください。",
  }),
  subject: z.string().min(5, {
    message: "件名は5文字以上で入力してください。",
  }),
  message: z.string().min(10, {
    message: "メッセージは10文字以上で入力してください。",
  }),
});

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      await apiRequest("POST", "/api/contact", values);
      
      toast({
        title: "メッセージを送信しました",
        description: "お問い合わせありがとうございます。できるだけ早く返信いたします。",
        duration: 5000,
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "送信エラー",
        description: "メッセージの送信中にエラーが発生しました。後でもう一度お試しください。",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="inline-block pb-2 border-b-4 border-primary-500">連絡先</span>
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-slate-900 dark:text-white">メール</h3>
              <a 
                href="mailto:taro.developer@example.com" 
                className="text-primary-600 dark:text-primary-400 hover:underline"
              >
                taro.developer@example.com
              </a>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-slate-900 dark:text-white">所在地</h3>
              <p className="text-slate-700 dark:text-slate-300">東京都渋谷区</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                <Share className="h-6 w-6" />
              </div>
              <h3 className="font-semibold mb-2 text-slate-900 dark:text-white">SNS</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-700 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-xl" />
                </a>
                <a 
                  href="https://linkedin.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-700 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a 
                  href="https://twitter.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-700 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-xl" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card className="mt-12 max-w-3xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-white">メッセージを送る</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>お名前</FormLabel>
                        <FormControl>
                          <Input placeholder="山田 太郎" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>メールアドレス</FormLabel>
                        <FormControl>
                          <Input placeholder="your-email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>件名</FormLabel>
                      <FormControl>
                        <Input placeholder="メッセージの件名" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>メッセージ</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="メッセージの内容を入力してください" 
                          className="resize-none" 
                          rows={5}
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full md:w-auto"
                  disabled={form.formState.isSubmitting}
                >
                  <span>送信する</span>
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
