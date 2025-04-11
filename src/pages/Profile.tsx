import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Calendar, Edit, GraduationCap, Save, User, Users, FileText, Plus } from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = React.useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <Button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? (
            <>
              <Save className="mr-2 h-4 w-4" /> Save Changes
            </>
          ) : (
            <>
              <Edit className="mr-2 h-4 w-4" /> Edit Profile
            </>
          )}
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Summary Card */}
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

        {/* Main Profile Content */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Academic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Major</label>
                  {isEditing ? (
                    <Select defaultValue="computer-science">
                      <SelectTrigger>
                        <SelectValue placeholder="Select major" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="computer-science">Computer Science</SelectItem>
                        <SelectItem value="mathematics">Mathematics</SelectItem>
                        <SelectItem value="physics">Physics</SelectItem>
                        <SelectItem value="chemistry">Chemistry</SelectItem>
                        <SelectItem value="biology">Biology</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <p className="text-sm text-muted-foreground">Computer Science</p>
                  )}
                </div>
                <div>
                  <label className="text-sm font-medium">Academic Year</label>
                  {isEditing ? (
                    <Select defaultValue="junior">
                      <SelectTrigger>
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="freshman">Freshman</SelectItem>
                        <SelectItem value="sophomore">Sophomore</SelectItem>
                        <SelectItem value="junior">Junior</SelectItem>
                        <SelectItem value="senior">Senior</SelectItem>
                        <SelectItem value="graduate">Graduate</SelectItem>
                      </SelectContent>
                    </Select>
                  ) : (
                    <p className="text-sm text-muted-foreground">Junior</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Current Courses</CardTitle>
            </CardHeader>
            <CardContent>
              {isEditing ? (
                <div className="space-y-4">
                  <div className="flex gap-4 items-center">
                    <Input defaultValue="CS 302 - Data Structures & Algorithms" className="flex-grow" />
                    <Button variant="outline" size="sm">Remove</Button>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Input defaultValue="MATH 301 - Linear Algebra" className="flex-grow" />
                    <Button variant="outline" size="sm">Remove</Button>
                  </div>
                  <div className="flex gap-4 items-center">
                    <Input defaultValue="PHYS 201 - Physics for Engineers" className="flex-grow" />
                    <Button variant="outline" size="sm">Remove</Button>
                  </div>
                  <Button variant="outline" size="sm" className="mt-2">
                    <Plus className="mr-2 h-4 w-4" /> Add Course
                  </Button>
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b">
                    <div className="flex gap-2 items-center">
                      <Badge>CS 302</Badge>
                      <span>Data Structures & Algorithms</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <div className="flex gap-2 items-center">
                      <Badge>MATH 301</Badge>
                      <span>Linear Algebra</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <div className="flex gap-2 items-center">
                      <Badge>PHYS 201</Badge>
                      <span>Physics for Engineers</span>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Learning Preferences</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Preferred Study Times</h3>
                  {isEditing ? (
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground cursor-pointer">Morning</Badge>
                      <Badge className="bg-primary text-primary-foreground">Afternoon</Badge>
                      <Badge className="bg-primary text-primary-foreground">Evening</Badge>
                      <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground cursor-pointer">Late Night</Badge>
                      <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground cursor-pointer">Weekends</Badge>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      <Badge>Afternoon</Badge>
                      <Badge>Evening</Badge>
                    </div>
                  )}
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2">Study Environment</h3>
                  {isEditing ? (
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground cursor-pointer">Silent</Badge>
                      <Badge className="bg-primary text-primary-foreground">Quiet Talking</Badge>
                      <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground cursor-pointer">Background Music</Badge>
                      <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground cursor-pointer">Busy Environment</Badge>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      <Badge>Quiet Talking</Badge>
                    </div>
                  )}
                </div>
                
                <div>
                  <h3 className="text-sm font-medium mb-2">Study Group Size Preference</h3>
                  {isEditing ? (
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground cursor-pointer">One-on-One</Badge>
                      <Badge className="bg-primary text-primary-foreground">Small Groups (3-5)</Badge>
                      <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground cursor-pointer">Medium Groups (6-10)</Badge>
                      <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground cursor-pointer">Large Groups (10+)</Badge>
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      <Badge>Small Groups (3-5)</Badge>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

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
    </div>
  );
};

export default Profile;
