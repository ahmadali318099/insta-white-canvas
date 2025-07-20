import { Link, useLocation } from "react-router-dom";
import { Home, Search, Heart, Users, User } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: "/", icon: Home, label: "Home" },
    { path: "/explore", icon: Search, label: "Explore" },
    { path: "/notifications", icon: Heart, label: "Notifications" },
    { path: "/friends", icon: Users, label: "Friends" },
    { path: "/profile", icon: User, label: "Profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 md:top-0 md:bottom-auto md:border-b md:border-t-0">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto md:max-w-2xl">
        {navItems.map(({ path, icon: Icon, label }) => {
          const isActive = location.pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className={cn(
                "flex flex-col items-center justify-center p-2 rounded-lg transition-all duration-200 hover:bg-accent",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              <Icon 
                className={cn(
                  "h-6 w-6 transition-all duration-200",
                  isActive && "text-primary scale-110"
                )} 
              />
              <span className="text-xs mt-1 hidden md:block">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navigation;