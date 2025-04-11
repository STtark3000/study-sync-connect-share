
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { Calendar, Clock, Globe, MapPin, Plus, Search, Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface StudyGroup {
  id: number;
  name: string;
  course: string;
  schedule: string;
  location: string;
  members: number;
  tags: string[];
}

const sampleGroups: StudyGroup[] = [
  {
    id: 1,
    name: "Calculus II Study Group",
    course: "MATH 201",
    schedule: "Mondays & Wednesdays, 4:00 PM",
    location: "Library - Study Room B",
    members: 6,
    tags: ["Mathematics", "Calculus", "Midterm Prep"]
  },
  {
    id: 2,
    name: "Organic Chemistry Lab Prep",
    course: "CHEM 302",
    schedule: "Tuesdays, 6:30 PM",
    location: "Science Building - Room 405",
    members: 4,
    tags: ["Chemistry", "Lab Preparation", "Weekly"]
  },
  {
    id: 3,
    name: "Spanish Conversation Practice",
    course: "SPAN 203",
    schedule: "Fridays, 3:00 PM",
    location: "Language Center - Room 201",
    members: 8,
    tags: ["Languages", "Spanish", "Conversation"]
  },
  {
    id: 4,
    name: "Data Structures & Algorithms",
    course: "CS 302",
    schedule: "Thursdays, 5:30 PM",
    location: "Virtual (Zoom)",
    members: 10,
    tags: ["Computer Science", "Algorithms", "Programming"]
  },
  {
    id: 5,
    name: "Psychology Research Methods",
    course: "PSY 305",
    schedule: "Wednesdays, 2:00 PM",
    location: "Psychology Building - Study Area",
    members: 5,
    tags: ["Psychology", "Research", "Weekly"]
  },
  {
    id: 6,
    name: "Business Ethics Discussion",
    course: "BUS 401",
    schedule: "Mondays, 5:00 PM",
    location: "Virtual (Discord)",
    members: 7,
    tags: ["Business", "Ethics", "Discussion"]
  }
];

const StudyGroups = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [groups, setGroups] = useState(sampleGroups);

  const filteredGroups = groups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          group.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          group.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesSubject = selectedSubject === "all" || group.tags.some(tag => tag.toLowerCase() === selectedSubject.toLowerCase());
    
    return matchesSearch && matchesSubject;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Study Groups</h1>
          <p className="text-muted-foreground">Find or create study groups based on your academic interests.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Create Study Group
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Create a New Study Group</DialogTitle>
              <DialogDescription>
                Fill in the details below to create your study group. Other students will be able to find and join your group.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="name">Group Name</label>
                <Input id="name" placeholder="Enter a name for your study group" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="course">Course</label>
                <Input id="course" placeholder="e.g., MATH 201, BIO 305" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label htmlFor="schedule">Schedule</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select day" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="monday">Monday</SelectItem>
                      <SelectItem value="tuesday">Tuesday</SelectItem>
                      <SelectItem value="wednesday">Wednesday</SelectItem>
                      <SelectItem value="thursday">Thursday</SelectItem>
                      <SelectItem value="friday">Friday</SelectItem>
                      <SelectItem value="saturday">Saturday</SelectItem>
                      <SelectItem value="sunday">Sunday</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <label htmlFor="time">Time</label>
                  <Input type="time" id="time" />
                </div>
              </div>
              <div className="grid gap-2">
                <label htmlFor="location">Location</label>
                <Input id="location" placeholder="Virtual (Zoom) or physical location" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="tags">Tags (comma separated)</label>
                <Input id="tags" placeholder="e.g., Mathematics, Calculus, Weekly" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="description">Description</label>
                <textarea 
                  className="min-h-[100px] rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  id="description" 
                  placeholder="Describe your study group and what you plan to cover"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Create Group</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search by course, name, or topic..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select 
          value={selectedSubject}
          onValueChange={setSelectedSubject}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subjects</SelectItem>
            <SelectItem value="mathematics">Mathematics</SelectItem>
            <SelectItem value="chemistry">Chemistry</SelectItem>
            <SelectItem value="languages">Languages</SelectItem>
            <SelectItem value="computer science">Computer Science</SelectItem>
            <SelectItem value="psychology">Psychology</SelectItem>
            <SelectItem value="business">Business</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Study Groups Tabs */}
      <Tabs defaultValue="available">
        <TabsList>
          <TabsTrigger value="available">Available Groups</TabsTrigger>
          <TabsTrigger value="my-groups">My Groups</TabsTrigger>
        </TabsList>
        <TabsContent value="available" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGroups.map((group) => (
              <Card key={group.id} className="study-card">
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
            ))}
          </div>
        </TabsContent>
        <TabsContent value="my-groups">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="study-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Physics 101 Study Group</CardTitle>
                  <Badge>PHYS 101</Badge>
                </div>
                <CardDescription>Members: 5 (You're the leader)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Tuesdays & Thursdays, 4:00 PM</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Science Building - Room 203</span>
                  </div>
                </div>
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
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Schedule Meeting</Button>
                <Button variant="secondary">Manage</Button>
              </CardFooter>
            </Card>
            
            <Card className="study-card">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>Literature Analysis</CardTitle>
                  <Badge>LITR 305</Badge>
                </div>
                <CardDescription>Members: 8</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Fridays, 2:00 PM</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Globe className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Virtual (Zoom)</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Literature</span>
                  <span className="text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">Analysis</span>
                  <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">Weekly</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">View Details</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudyGroups;
