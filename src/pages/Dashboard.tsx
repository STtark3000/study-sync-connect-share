
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Users, BookOpen, Calendar, GraduationCap, FileText, ChevronRight, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your studies.</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link to="/profile">View Profile</Link>
          </Button>
          <Button size="sm">Find Study Group</Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">My Study Groups</p>
              <p className="text-2xl font-bold">3</p>
            </div>
            <Users className="h-8 w-8 text-primary/60" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Upcoming Sessions</p>
              <p className="text-2xl font-bold">2</p>
            </div>
            <Calendar className="h-8 w-8 text-secondary/60" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">My Mentors</p>
              <p className="text-2xl font-bold">1</p>
            </div>
            <GraduationCap className="h-8 w-8 text-primary/60" />
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Saved Resources</p>
              <p className="text-2xl font-bold">7</p>
            </div>
            <FileText className="h-8 w-8 text-accent/60" />
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
          <TabsTrigger value="recommended">Recommended</TabsTrigger>
          <TabsTrigger value="activity">Recent Activity</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Physics 101 Study Group</CardTitle>
              <CardDescription>Tomorrow at 3:00 PM • Virtual</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Preparing for the midterm exam - covering chapters 4-6 on thermodynamics.</p>
              <div className="mt-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full mr-2">Physics</span>
                <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">Midterm Prep</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="mr-2">View Details</Button>
              <Button>Join Session</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Mathematics Mentoring</CardTitle>
              <CardDescription>Friday at 2:00 PM • Library - Room 302</CardDescription>
            </CardHeader>
            <CardContent>
              <p>One-on-one session with your mentor David to review calculus concepts.</p>
              <div className="mt-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full mr-2">Mathematics</span>
                <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">Calculus</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="mr-2">View Details</Button>
              <Button>Confirm Attendance</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="recommended" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Computer Science Study Group</CardTitle>
              <CardDescription>Open group • 12 members</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Weekly study sessions focused on data structures and algorithms.</p>
              <div className="mt-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full mr-2">Computer Science</span>
                <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">Algorithms</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button>Join Group</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Biology Pre-Med Resources</CardTitle>
              <CardDescription>Curated by Prof. Johnson • 3 documents</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Verified study materials for pre-med students focusing on anatomy and physiology.</p>
              <div className="mt-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full mr-2">Biology</span>
                <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">Pre-Med</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button>View Resources</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        <TabsContent value="activity" className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-background border">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">You joined "Literature Analysis" study group</p>
                <p className="text-sm text-muted-foreground">Yesterday at 4:30 PM</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg bg-background border">
              <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">You saved "Organic Chemistry Final Review" to your resources</p>
                <p className="text-sm text-muted-foreground">2 days ago at 1:15 PM</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg bg-background border">
              <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent flex-shrink-0">
                <Bell className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium">Your resource "Psychology Study Notes" was approved</p>
                <p className="text-sm text-muted-foreground">3 days ago at 9:22 AM</p>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      {/* Quick Links */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Link to="/study-groups">
          <Card className="hover:border-primary transition-colors">
            <CardContent className="p-6 flex justify-between items-center">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                  <Users className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium">Find Study Groups</h3>
                  <p className="text-sm text-muted-foreground">Connect with peers</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </CardContent>
          </Card>
        </Link>
        
        <Link to="/mentorship">
          <Card className="hover:border-secondary transition-colors">
            <CardContent className="p-6 flex justify-between items-center">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mr-4">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium">Find a Mentor</h3>
                  <p className="text-sm text-muted-foreground">Get guidance</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </CardContent>
          </Card>
        </Link>
        
        <Link to="/resources">
          <Card className="hover:border-accent transition-colors">
            <CardContent className="p-6 flex justify-between items-center">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center text-accent mr-4">
                  <FileText className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium">Browse Resources</h3>
                  <p className="text-sm text-muted-foreground">Access study materials</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </CardContent>
          </Card>
        </Link>
        
        <Link to="/profile">
          <Card className="hover:border-primary transition-colors">
            <CardContent className="p-6 flex justify-between items-center">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4">
                  <BookOpen className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium">My Courses</h3>
                  <p className="text-sm text-muted-foreground">Update your courses</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
