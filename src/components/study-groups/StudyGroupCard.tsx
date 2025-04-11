
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

interface StudyGroup {
  id: number;
  name: string;
  course: string;
  schedule: string;
  location: string;
  members: number;
  tags: string[];
}

interface StudyGroupCardProps {
  group: StudyGroup;
}

const StudyGroupCard = ({ group }: StudyGroupCardProps) => {
  return (
    <Card className="study-card">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{group.name}</CardTitle>
          <Badge>{group.course}</Badge>
        </div>
        <CardDescription>Members: {group.members}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center text-sm">
            <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{group.schedule}</span>
          </div>
          <div className="flex items-center text-sm">
            <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
            <span>{group.location}</span>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {group.tags.map((tag, i) => (
            <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Join Group</Button>
      </CardFooter>
    </Card>
  );
};

export default StudyGroupCard;
