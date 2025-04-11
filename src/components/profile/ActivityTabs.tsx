
import React from 'react';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, FileText, GraduationCap, User } from 'lucide-react';

const ActivityTabs = () => {
  return (
    <Tabs defaultValue="stats">
      <TabsList className="grid grid-cols-3">
        <TabsTrigger value="stats">Activity Stats</TabsTrigger>
        <TabsTrigger value="mentor">Mentor Status</TabsTrigger>
        <TabsTrigger value="badges">Achievements</TabsTrigger>
      </TabsList>
      
      <TabsContent value="stats" className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Study Sessions</p>
                <p className="text-2xl font-bold">12</p>
              </div>
              <Users className="h-8 w-8 text-primary/60" />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Resources Shared</p>
                <p className="text-2xl font-bold">3</p>
              </div>
              <FileText className="h-8 w-8 text-secondary/60" />
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Study Groups</p>
                <p className="text-2xl font-bold">2</p>
              </div>
              <Users className="h-8 w-8 text-accent/60" />
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      
      <TabsContent value="mentor">
        <Card>
          <CardHeader>
            <CardTitle>Mentorship Status</CardTitle>
            <CardDescription>
              You can become a mentor and help other students in subjects you're confident in.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <GraduationCap className="h-12 w-12 text-primary" />
              <div>
                <h3 className="font-medium">Become a Mentor</h3>
                <p className="text-sm text-muted-foreground">Share your knowledge and help fellow students succeed.</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Apply to be a Mentor</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      
      <TabsContent value="badges">
        <Card>
          <CardHeader>
            <CardTitle>Your Achievements</CardTitle>
            <CardDescription>
              Badges and recognitions earned through your participation on StudySync.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-medium">Group Starter</h3>
                <p className="text-xs text-muted-foreground">Created first study group</p>
              </div>
              
              <div className="flex flex-col items-center text-center opacity-50">
                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mb-2">
                  <GraduationCap className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-medium">Mentor Badge</h3>
                <p className="text-xs text-muted-foreground">Become a verified mentor</p>
              </div>
              
              <div className="flex flex-col items-center text-center opacity-50">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-2">
                  <FileText className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-medium">Resource Creator</h3>
                <p className="text-xs text-muted-foreground">Share 5 verified resources</p>
              </div>
              
              <div className="flex flex-col items-center text-center opacity-50">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-medium">Collaborator</h3>
                <p className="text-xs text-muted-foreground">Attend 10 study sessions</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default ActivityTabs;
