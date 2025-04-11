
import React from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Calendar } from 'lucide-react';

interface ProfileSummaryProps {
  isEditing: boolean;
}

const ProfileSummary = ({ isEditing }: ProfileSummaryProps) => {
  return (
    <Card className="lg:col-span-1">
      <CardHeader>
        <div className="flex flex-col items-center">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/placeholder.svg" />
            <AvatarFallback>US</AvatarFallback>
          </Avatar>
          <div className="mt-4 text-center">
            <CardTitle className="text-xl">User Name</CardTitle>
            <CardDescription>Computer Science • Junior</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold mb-2">About Me</h3>
            {isEditing ? (
              <textarea 
                className="min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                defaultValue="Computer Science student with interests in AI and data science. Looking to connect with other students for collaborative learning opportunities."
              />
            ) : (
              <p className="text-sm text-muted-foreground">
                Computer Science student with interests in AI and data science. Looking to connect with other students for collaborative learning opportunities.
              </p>
            )}
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Contact</h3>
            {isEditing ? (
              <Input defaultValue="user.email@university.edu" className="mb-2" />
            ) : (
              <p className="text-sm text-muted-foreground">user.email@university.edu</p>
            )}
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2">Joined</h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-2 h-4 w-4" />
              <span>March 15, 2025</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSummary;
