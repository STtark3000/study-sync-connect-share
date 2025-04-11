
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
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  BookOpen, 
  Calendar, 
  Download, 
  Eye, 
  FileText, 
  Filter, 
  Heart, 
  Plus, 
  Search, 
  Share, 
  Star, 
  ThumbsUp, 
  Upload 
} from 'lucide-react';

interface ResourceItem {
  id: number;
  title: string;
  description: string;
  type: string;
  subject: string;
  course: string;
  author: {
    name: string;
    avatar: string;
  };
  dateAdded: string;
  verified: boolean;
  downloads: number;
  likes: number;
  tags: string[];
}

const resourcesData: ResourceItem[] = [
  {
    id: 1,
    title: "Calculus I Comprehensive Study Guide",
    description: "A complete guide covering limits, derivatives, and integrals with practice problems and solutions.",
    type: "PDF",
    subject: "Mathematics",
    course: "MATH 101",
    author: {
      name: "Alex Johnson",
      avatar: "/placeholder.svg"
    },
    dateAdded: "April 5, 2025",
    verified: true,
    downloads: 342,
    likes: 128,
    tags: ["Calculus", "Study Guide", "Practice Problems"]
  },
  {
    id: 2,
    title: "Organic Chemistry Reaction Mechanisms",
    description: "Visual guide to common organic chemistry reaction mechanisms with explanations and examples.",
    type: "PDF",
    subject: "Chemistry",
    course: "CHEM 301",
    author: {
      name: "Sarah Chen",
      avatar: "/placeholder.svg"
    },
    dateAdded: "March 28, 2025",
    verified: true,
    downloads: 215,
    likes: 87,
    tags: ["Organic Chemistry", "Reaction Mechanisms", "Visual Guide"]
  },
  {
    id: 3,
    title: "Introduction to Psychology - Lecture Notes",
    description: "Comprehensive notes from Introduction to Psychology covering all major topics and theories.",
    type: "Document",
    subject: "Psychology",
    course: "PSY 101",
    author: {
      name: "Emma Thompson",
      avatar: "/placeholder.svg"
    },
    dateAdded: "April 2, 2025",
    verified: true,
    downloads: 189,
    likes: 65,
    tags: ["Psychology", "Lecture Notes", "Theories"]
  },
  {
    id: 4,
    title: "Data Structures Algorithms Cheat Sheet",
    description: "Quick reference guide for common data structures and algorithms with time complexity analysis.",
    type: "PDF",
    subject: "Computer Science",
    course: "CS 302",
    author: {
      name: "David Kim",
      avatar: "/placeholder.svg"
    },
    dateAdded: "April 8, 2025",
    verified: true,
    downloads: 421,
    likes: 156,
    tags: ["Data Structures", "Algorithms", "Cheat Sheet"]
  },
  {
    id: 5,
    title: "Spanish Verb Conjugation Tables",
    description: "Complete conjugation tables for regular and irregular Spanish verbs across all tenses.",
    type: "Spreadsheet",
    subject: "Languages",
    course: "SPAN 202",
    author: {
      name: "Maria Rodriguez",
      avatar: "/placeholder.svg"
    },
    dateAdded: "March 15, 2025",
    verified: true,
    downloads: 132,
    likes: 58,
    tags: ["Spanish", "Verb Conjugation", "Reference"]
  },
  {
    id: 6,
    title: "Physics Formulas and Applications",
    description: "Comprehensive collection of physics formulas with explanations and real-world applications.",
    type: "PDF",
    subject: "Physics",
    course: "PHYS 201",
    author: {
      name: "James Wilson",
      avatar: "/placeholder.svg"
    },
    dateAdded: "April 10, 2025",
    verified: false,
    downloads: 97,
    likes: 41,
    tags: ["Physics", "Formulas", "Applications"]
  }
];

const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [subjectFilter, setSubjectFilter] = useState("all");
  const [resourceTypeFilter, setResourceTypeFilter] = useState("all");
  const [resources, setResources] = useState(resourcesData);

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesSubject = subjectFilter === "all" || resource.subject.toLowerCase() === subjectFilter.toLowerCase();
    
    const matchesType = resourceTypeFilter === "all" || resource.type.toLowerCase() === resourceTypeFilter.toLowerCase();
    
    return matchesSearch && matchesSubject && matchesType;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Academic Resources</h1>
          <p className="text-muted-foreground">Access and share study materials, guides, and notes for your courses.</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Upload className="mr-2 h-4 w-4" /> Upload Resource
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[525px]">
            <DialogHeader>
              <DialogTitle>Upload Academic Resource</DialogTitle>
              <DialogDescription>
                Share your study materials with the community. All resources will be reviewed by subject mentors before being published.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <label htmlFor="title">Resource Title</label>
                <Input id="title" placeholder="Enter a descriptive title for your resource" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="course">Course</label>
                <Input id="course" placeholder="e.g., MATH 201, BIO 305" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="subject">Subject</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="chemistry">Chemistry</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="biology">Biology</SelectItem>
                    <SelectItem value="computerscience">Computer Science</SelectItem>
                    <SelectItem value="psychology">Psychology</SelectItem>
                    <SelectItem value="languages">Languages</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <label htmlFor="description">Description</label>
                <textarea 
                  className="min-h-[100px] rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  id="description" 
                  placeholder="Provide a brief description of what your resource covers"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="tags">Tags (comma separated)</label>
                <Input id="tags" placeholder="e.g., Study Guide, Midterm Prep, Formulas" />
              </div>
              <div className="grid gap-2">
                <label htmlFor="file">Upload File</label>
                <Input id="file" type="file" />
                <p className="text-xs text-muted-foreground">Accepted formats: PDF, DOC, DOCX, PPT, PPTX, XLS, XLSX (Max 10MB)</p>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline">Cancel</Button>
              <Button>Submit for Review</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input 
            placeholder="Search resources..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Select 
            value={subjectFilter}
            onValueChange={setSubjectFilter}
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              <SelectItem value="mathematics">Mathematics</SelectItem>
              <SelectItem value="chemistry">Chemistry</SelectItem>
              <SelectItem value="physics">Physics</SelectItem>
              <SelectItem value="computer science">Computer Science</SelectItem>
              <SelectItem value="psychology">Psychology</SelectItem>
              <SelectItem value="languages">Languages</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={resourceTypeFilter}
            onValueChange={setResourceTypeFilter}
          >
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="pdf">PDF</SelectItem>
              <SelectItem value="document">Document</SelectItem>
              <SelectItem value="spreadsheet">Spreadsheet</SelectItem>
              <SelectItem value="presentation">Presentation</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Resources Tabs */}
      <Tabs defaultValue="browse">
        <TabsList>
          <TabsTrigger value="browse">Browse Resources</TabsTrigger>
          <TabsTrigger value="my-resources">My Resources</TabsTrigger>
          <TabsTrigger value="saved">Saved Resources</TabsTrigger>
        </TabsList>
        <TabsContent value="browse" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredResources.map((resource) => (
              <Card key={resource.id} className="study-card">
                <CardHeader>
                  <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                      <div className="p-2 rounded-md bg-primary/10">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{resource.title}</CardTitle>
                        <CardDescription>{resource.course}</CardDescription>
                      </div>
                    </div>
                    <Badge variant={resource.verified ? "default" : "outline"}>
                      {resource.verified ? "Verified" : "Pending"}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={resource.author.avatar} />
                      <AvatarFallback>{resource.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm">{resource.author.name}</span>
                    <div className="text-sm text-muted-foreground">•</div>
                    <span className="text-sm text-muted-foreground">{resource.dateAdded}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Download className="h-4 w-4 mr-1" />
                    <span>{resource.downloads}</span>
                    <div className="mx-3">•</div>
                    <ThumbsUp className="h-4 w-4 mr-1" />
                    <span>{resource.likes}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Eye className="h-4 w-4 mr-2" /> Preview
                  </Button>
                  <div className="flex gap-2">
                    <Button variant="outline" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Share className="h-4 w-4" />
                    </Button>
                    <Button size="sm">
                      <Download className="h-4 w-4 mr-2" /> Download
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="my-resources">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <div className="p-2 rounded-md bg-primary/10">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Psychology 101 Final Exam Notes</CardTitle>
                      <CardDescription>PSY 101</CardDescription>
                    </div>
                  </div>
                  <Badge>Verified</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Comprehensive notes covering the entire semester for the final exam.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Psychology</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Final Exam</span>
                  <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Notes</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Uploaded on April 1, 2025</span>
                  <div className="mx-3">•</div>
                  <Download className="h-4 w-4 mr-1" />
                  <span>78 downloads</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Edit</Button>
                <Button variant="destructive">Delete</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="saved">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <div className="p-2 rounded-md bg-primary/10">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Calculus I Comprehensive Study Guide</CardTitle>
                      <CardDescription>MATH 101</CardDescription>
                    </div>
                  </div>
                  <Badge>Verified</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">A complete guide covering limits, derivatives, and integrals with practice problems and solutions.</p>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>AJ</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">Alex Johnson</span>
                  <div className="text-sm text-muted-foreground">•</div>
                  <span className="text-sm text-muted-foreground">Saved on April 8, 2025</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" /> View
                </Button>
                <Button size="sm">
                  <Download className="h-4 w-4 mr-2" /> Download
                </Button>
              </CardFooter>
            </Card>
            
            <Card>
              <CardHeader>
                <div className="flex justify-between">
                  <div className="flex gap-2 items-center">
                    <div className="p-2 rounded-md bg-primary/10">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">Data Structures Algorithms Cheat Sheet</CardTitle>
                      <CardDescription>CS 302</CardDescription>
                    </div>
                  </div>
                  <Badge>Verified</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Quick reference guide for common data structures and algorithms with time complexity analysis.</p>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-6 w-6">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>DK</AvatarFallback>
                  </Avatar>
                  <span className="text-sm">David Kim</span>
                  <div className="text-sm text-muted-foreground">•</div>
                  <span className="text-sm text-muted-foreground">Saved on April 10, 2025</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" /> View
                </Button>
                <Button size="sm">
                  <Download className="h-4 w-4 mr-2" /> Download
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Resources;
