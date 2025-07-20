import { Heart, MessageCircle, Share, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const Index = () => {
  const posts = [
    {
      id: 1,
      user: {
        name: "Sarah Miller",
        username: "@sarahmiller",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c1?w=150&h=150&fit=crop",
      },
      content: "Beautiful morning at the beach! Sometimes you just need to take a moment to appreciate the simple things in life 🌊✨",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop",
      time: "2h",
      likes: 124,
      comments: 18,
    },
    {
      id: 2,
      user: {
        name: "Alex Chen",
        username: "@alexchen",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      },
      content: "Working on some new designs today. The creative process never gets old! 🎨",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      time: "4h",
      likes: 89,
      comments: 12,
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 pt-4">
        <h1 className="text-2xl font-bold bg-gradient-social bg-clip-text text-transparent">
          SocialConnect
        </h1>
        <Button size="sm" className="bg-gradient-social hover:opacity-90">
          <Plus className="w-4 h-4 mr-2" />
          New Post
        </Button>
      </div>

      {/* Feed */}
      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-soft transition-all duration-200 animate-scale-in">
            {/* Post Header */}
            <div className="p-4 pb-3">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={post.user.avatar} alt={post.user.name} />
                  <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{post.user.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{post.user.username}</span>
                    <span>•</span>
                    <span>{post.time}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Post Content */}
            <div className="px-4 pb-3">
              <p className="text-sm">{post.content}</p>
            </div>

            {/* Post Image */}
            <div className="relative">
              <img
                src={post.image}
                alt="Post content"
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Post Actions */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-muted-foreground hover:text-red-500 transition-colors">
                    <Heart className="w-5 h-5 mr-1" />
                    <span className="text-sm">{post.likes}</span>
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-muted-foreground hover:text-blue-primary transition-colors">
                    <MessageCircle className="w-5 h-5 mr-1" />
                    <span className="text-sm">{post.comments}</span>
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-muted-foreground hover:text-green-500 transition-colors">
                    <Share className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Welcome Message for first time */}
      <Card className="mt-8 p-6 text-center bg-gradient-subtle border-0">
        <h2 className="text-lg font-semibold mb-2">Welcome to SocialConnect!</h2>
        <p className="text-muted-foreground text-sm">
          Connect with friends, share moments, and discover amazing content from around the world.
        </p>
      </Card>
    </div>
  );
};

export default Index;
