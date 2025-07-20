import { useState } from "react";
import { Search, TrendingUp, MapPin, Clock, Heart, MessageCircle, Share } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const Explore = () => {
  const [activeCategory, setActiveCategory] = useState("trending");
  const [searchQuery, setSearchQuery] = useState("");
  
  const categories = [
    { id: "trending", label: "Trending", icon: TrendingUp },
    { id: "recent", label: "Recent", icon: Clock },
    { id: "nearby", label: "Nearby", icon: MapPin },
  ];

  const posts = [
    {
      id: 1,
      user: {
        name: "Travel Explorer",
        username: "@travelex",
        avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop",
      },
      content: "Just discovered this hidden gem! The sunset views here are absolutely breathtaking 🌅",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop",
      location: "Santorini, Greece",
      time: "2h",
      likes: 342,
      comments: 28,
      shares: 15,
      trending: true,
    },
    {
      id: 2,
      user: {
        name: "Food Enthusiast",
        username: "@foodie_life",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c1?w=150&h=150&fit=crop",
      },
      content: "Made this delicious pasta from scratch today! Recipe in my bio 👨‍🍳",
      image: "https://images.unsplash.com/photo-1551782450-17144efb9c50?w=800&h=600&fit=crop",
      location: "New York, NY",
      time: "4h",
      likes: 189,
      comments: 42,
      shares: 8,
      trending: false,
    },
    {
      id: 3,
      user: {
        name: "Nature Photographer",
        username: "@naturepics",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      },
      content: "The morning mist rolling over the mountains... nature never fails to amaze me 🏔️",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop",
      location: "Swiss Alps",
      time: "6h",
      likes: 567,
      comments: 91,
      shares: 34,
      trending: true,
    },
    {
      id: 4,
      user: {
        name: "City Explorer",
        username: "@cityvibes",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      },
      content: "The architecture in this city is simply stunning! Every corner tells a story 🏛️",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop",
      location: "Barcelona, Spain",
      time: "8h",
      likes: 234,
      comments: 56,
      shares: 12,
      trending: false,
    },
  ];

  const stories = [
    {
      id: 1,
      user: "Emma",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5c1?w=150&h=150&fit=crop",
      hasStory: true,
    },
    {
      id: 2,
      user: "John",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      hasStory: true,
    },
    {
      id: 3,
      user: "Lisa",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      hasStory: true,
    },
    {
      id: 4,
      user: "Alex",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      hasStory: true,
    },
  ];

  const filteredPosts = posts.filter(post => {
    if (activeCategory === "trending") return post.trending;
    return true;
  });

  return (
    <div className="max-w-2xl mx-auto p-4 animate-fade-in">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-4">Explore</h1>
        
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
          <Input
            placeholder="Search posts, people, places..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        
        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "whitespace-nowrap",
                activeCategory === category.id && "bg-gradient-social"
              )}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Stories */}
      <Card className="p-4 mb-6">
        <h3 className="font-medium mb-3">Stories</h3>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center gap-2 min-w-0">
              <div className="relative">
                <Avatar className={cn(
                  "w-16 h-16 border-2 cursor-pointer transition-transform hover:scale-105",
                  story.hasStory ? "border-primary border-2" : "border-border"
                )}>
                  <AvatarImage src={story.avatar} alt={story.user} />
                  <AvatarFallback>{story.user[0]}</AvatarFallback>
                </Avatar>
                {story.hasStory && (
                  <div className="absolute inset-0 rounded-full bg-gradient-social opacity-20"></div>
                )}
              </div>
              <span className="text-xs text-center truncate w-16">{story.user}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Posts */}
      <div className="space-y-6">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden hover:shadow-soft transition-all duration-200">
            {/* Post Header */}
            <div className="p-4 pb-3">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarImage src={post.user.avatar} alt={post.user.name} />
                  <AvatarFallback>{post.user.name[0]}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-sm">{post.user.name}</h4>
                    {post.trending && (
                      <Badge variant="secondary" className="text-xs bg-gradient-social text-white">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span>{post.user.username}</span>
                    <span>•</span>
                    <span>{post.time}</span>
                    {post.location && (
                      <>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{post.location}</span>
                        </div>
                      </>
                    )}
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
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-muted-foreground hover:text-red-500">
                    <Heart className="w-5 h-5 mr-1" />
                    <span className="text-sm">{post.likes}</span>
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-muted-foreground hover:text-blue-primary">
                    <MessageCircle className="w-5 h-5 mr-1" />
                    <span className="text-sm">{post.comments}</span>
                  </Button>
                  
                  <Button variant="ghost" size="sm" className="p-0 h-auto text-muted-foreground hover:text-green-500">
                    <Share className="w-5 h-5 mr-1" />
                    <span className="text-sm">{post.shares}</span>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium mb-2">No posts found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search or category filters.
          </p>
        </div>
      )}
    </div>
  );
};

export default Explore;