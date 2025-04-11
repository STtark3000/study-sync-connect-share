
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Clock, Calendar, Star, Search, Filter } from 'lucide-react';

interface Mentor {
  id: number;
  name: string;
  avatar: string;
  major: string;
  year: string;
  subjects: string[];
  rating: number;
  about: string;
  availability: string;
}

const mentors: Mentor[] = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "/placeholder.svg",
    major: "Computer Science",
    year: "Senior",
    subjects: ["Programming", "Data Structures", "Algorithms"],
    rating: 4.9,
    about: "I've been tutoring CS courses for 2 years and am passionate about making complex concepts accessible to everyone.",
    availability: "Weekday evenings"
  },
  {
    id: 2,
    name: "Sarah Chen",
    avatar: "/placeholder.svg",
    major: "Biochemistry",
    year: "Graduate Student",
    subjects: ["Organic Chemistry", "Biochemistry", "Cell Biology"],
    rating: 4.7,
    about: "Pre-med advisor with extensive lab experience. I specialize in helping students succeed in challenging science courses.",
    availability: "Weekends"
  },
  {
    id: 3,
    name: "Marcus Williams",
    avatar: "/placeholder.svg",
    major: "Mathematics",
    year: "Junior",
    subjects: ["Calculus", "Linear Algebra", "Statistics"],
    rating: 4.8,
    about: "Math tutor focused on building strong fundamentals. I believe anyone can excel at math with the right approach.",
    availability: "Monday, Wednesday, Friday afternoons"
  },
  {
    id: 4,
    name: "Priya Patel",
    avatar: "/placeholder.svg",
    major: "English Literature",
    year: "Senior",
    subjects: ["Essay Writing", "Literary Analysis", "Creative Writing"],
    rating: 5.0,
    about: "Writing center consultant specializing in essay structure, argumentation, and editing.",
    availability: "Tuesdays and Thursdays"
  },
  {
    id: 5,
    name: "David Rodriguez",
    avatar: "/placeholder.svg",
    major: "Physics",
    year: "Graduate Student",
    subjects: ["Mechanics", "Electromagnetism", "Modern Physics"],
    rating: 4.6,
    about: "Lab assistant and teaching fellow for introductory physics courses. I focus on practical applications and problem-solving.",
    availability: "Weekday mornings"
  },
  {
    id: 6,
    name: "Emma Thompson",
    avatar: "/placeholder.svg",
    major: "Psychology",
    year: "Senior",
    subjects: ["Research Methods", "Cognitive Psychology", "Statistics"],
    rating: 4.8,
    about: "Research assistant experienced in experimental design and data analysis. I can help with both coursework and research projects.",
    availability: "Flexible schedule"
  }
];

const Mentorship = () => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [subjectFilter, setSubjectFilter] = React.useState("all");

  const filteredMentors = mentors.filter(mentor => {
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          mentor.subjects.some(subject => subject.toLowerCase().includes(searchQuery.toLowerCase())) ||
                          mentor.major.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSubject = subjectFilter === "all" || 
                           mentor.subjects.some(subject => subject.toLowerCase().includes(subjectFilter.toLowerCase()));
    
    return matchesSearch && matchesSubject;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Peer Mentorship</h1>
          <p className="text-muted-foreground">Connect with experienced students who can guide you through challenging courses.</p>
        </div>
        <Button>Become a Mentor</Button>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search by name, subject, or major..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select 
          value={subjectFilter}
          onValueChange={setSubjectFilter}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by subject" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Subjects</SelectItem>
            <SelectItem value="programming">Programming</SelectItem>
            <SelectItem value="chemistry">Chemistry</SelectItem>
            <SelectItem value="calculus">Mathematics</SelectItem>
            <SelectItem value="writing">Writing</SelectItem>
            <SelectItem value="physics">Physics</SelectItem>
            <SelectItem value="psychology">Psychology</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Mentors List */}
      <Tabs defaultValue="find">
        <TabsList>
          <TabsTrigger value="find">Find Mentors</TabsTrigger>
          <TabsTrigger value="my-mentors">My Mentors</TabsTrigger>
          <TabsTrigger value="mentoring">Students I'm Mentoring</TabsTrigger>
        </TabsList>
        <TabsContent value="find" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMentors.map((mentor) => (
              <Card key={mentor.id} className="study-card">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={mentor.avatar} />
                      <AvatarFallback>{mentor.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{mentor.name}</CardTitle>
                      <CardDescription>
                        {mentor.major} • {mentor.year}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {mentor.subjects.map((subject, index) => (
                        <Badge key={index} variant="secondary">{subject}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <Star className="mr-2 h-4 w-4 text-amber-500" />
                      <span>{mentor.rating} rating</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>{mentor.availability}</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground line-clamp-3">{mentor.about}</p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Request Mentorship</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="my-mentors">
          <Card>
            <CardHeader>
              <div className="flex items-start gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>DR</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle>David Rodriguez - Your Physics Mentor</CardTitle>
                  <CardDescription>Next session: Friday, 10:00 AM • Physics Building</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Expertise</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Mechanics</Badge>
                  <Badge variant="secondary">Electromagnetism</Badge>
                  <Badge variant="secondary">Modern Physics</Badge>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Past Sessions</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-sm border-b pb-2">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>May 4, 2025</span>
                    </div>
                    <span>Covered: Forces and Motion</span>
                  </div>
                  <div className="flex justify-between items-center text-sm border-b pb-2">
                    <div className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                      <span>April 27, 2025</span>
                    </div>
                    <span>Covered: Intro to Physics</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Message</Button>
              <Button>Schedule Session</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="mentoring">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>JL</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Jamie Lee</CardTitle>
                    <CardDescription>Freshman • Computer Science major</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Focusing on</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Programming Fundamentals</Badge>
                    <Badge variant="secondary">Data Structures</Badge>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-2">Next Session</h4>
                  <div className="flex items-center text-sm">
                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Tomorrow at 2:00 PM • Library Study Room</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Message</Button>
                <Button variant="secondary">Update Schedule</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>MS</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>Michael Smith</CardTitle>
                    <CardDescription>Sophomore • Computer Science major</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Focusing on</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Algorithms</Badge>
                    <Badge variant="secondary">OOP Concepts</Badge>
                  </div>
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-2">Next Session</h4>
                  <div className="flex items-center text-sm">
                    <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                    <span>Friday at 3:30 PM • Virtual (Zoom)</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Message</Button>
                <Button variant="secondary">Update Schedule</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Mentorship;
