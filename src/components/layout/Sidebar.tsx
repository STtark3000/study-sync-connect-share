
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BookOpen, Users, GraduationCap, FileText, Home, ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

interface NavItem {
  title: string;
  href: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: Home,
  },
  {
    title: 'Study Groups',
    href: '/study-groups',
    icon: Users,
  },
  {
    title: 'Mentorship',
    href: '/mentorship',
    icon: GraduationCap,
  },
  {
    title: 'Resources',
    href: '/resources',
    icon: FileText,
  },
];

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const location = useLocation();

  return (
    <div
      className={cn(
        'h-screen bg-white border-r transition-all duration-300 flex flex-col',
        isOpen ? 'w-64' : 'w-[70px]'
      )}
    >
      <div className="flex items-center h-16 border-b px-4">
        {isOpen && <h2 className="text-lg font-bold text-study-purple">StudySync</h2>}
        <Button
          variant="ghost"
          size="icon"
          className={cn('ml-auto rounded-full', !isOpen && 'mx-auto')}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
        </Button>
      </div>
      <div className="flex-1 py-6 flex flex-col gap-1 px-2">
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={cn(
              'flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
              location.pathname === item.href
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-muted'
            )}
          >
            <item.icon className={cn('h-5 w-5', isOpen ? 'mr-2' : 'mx-auto')} />
            {isOpen && <span>{item.title}</span>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
