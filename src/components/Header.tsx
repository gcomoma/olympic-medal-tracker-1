
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-1">
            <div className="w-2 h-8 bg-gradient-to-b from-olympic-blue to-olympic-blue/80 rounded-full" />
            <div className="w-2 h-8 bg-gradient-to-b from-olympic-yellow to-olympic-yellow/80 rounded-full" />
            <div className="w-2 h-8 bg-gradient-to-b from-olympic-red to-olympic-red/80 rounded-full" />
            <div className="w-2 h-8 bg-gradient-to-b from-olympic-green to-olympic-green/80 rounded-full" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-gold via-silver to-bronze bg-clip-text text-transparent">Olympic Games 2026</h1>
            <p className="text-xs text-muted-foreground hidden md:block">
              Paris 2024 Medal Tracker
            </p>
          </div>
        </div>
        
        <Link to="/sign-in">
          <Button variant="default" size="default" className="gap-2">
            <LogIn className="w-4 h-4" />
            <span className="hidden sm:inline">Sign In</span>
          </Button>
        </Link>
      </div>
    </header>
  );
}