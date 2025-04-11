
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Calendar, Globe, MapPin } from 'lucide-react';

interface MyStudyGroupCardProps {
  title: string;
  course: string;
  isLeader?: boolean;
  members: number;
  schedule: string;
  location: string;
  isVirtual?: boolean;
  tags?: string[];
}

const MyStudyGroupCard = ({ 
  title, 
  course, 
  isLeader, 
  members, 
  schedule, 
  location,
  isVirtual,
  tags = []
}: MyStudyGroupCardProps) => {
  return (
    <Card className="study-card">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{title}</CardTitle>
          <Badge>{course}</Badge>
        </div>
        <CardDescription>Members: {members} {isLeader ? "(You're the leader)" : ""}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{schedule}</span>
          </div>
          <div className="flex items-center text-sm">
            {isVirtual ? (
              <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
            ) : (
              <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
            )}
            <span>{location}</span>
          </div>
        </div>
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span 
                key={i} 
                className={`text-xs ${i === 0 ? 'bg-primary/10 text-primary' : i === 1 ? 'bg-secondary/10 text-secondary' : 'bg-accent/10 text-accent'} px-2 py-1 rounded-full`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {isLeader && (
          <div className="mt-4">
            <h4 className="text-sm font-medium mb-2">Members</h4>
            <div className="flex -space-x-2 overflow-hidden">
              <Avatar className="border-2 border-background">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>YA</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>SK</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>MA</AvatarFallback>
              </Avatar>
              <Avatar className="border-2 border-background">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>RL</AvatarFallback>
              </Avatar>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className={isLeader ? "flex justify-between" : ""}>
        {isLeader ? (
          <>
            <Button variant="outline">Schedule Meeting</Button>
            <Button variant="secondary">Manage</Button>
          </>
        ) : (
          <Button className="w-full">View Details</Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default MyStudyGroupCard;
