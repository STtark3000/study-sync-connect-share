
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import CreateStudyGroupDialog from '@/components/study-groups/CreateStudyGroupDialog';
import SearchFilters from '@/components/study-groups/SearchFilters';
import StudyGroupsList from '@/components/study-groups/StudyGroupsList';

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
  const [activeTab, setActiveTab] = useState("available");
  const [groups] = useState(sampleGroups);

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
        <CreateStudyGroupDialog />
      </div>

      {/* Search and Filter */}
      <SearchFilters 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedSubject={selectedSubject}
        setSelectedSubject={setSelectedSubject}
      />

      {/* Study Groups Tabs */}
      <Tabs defaultValue="available" onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="available">Available Groups</TabsTrigger>
          <TabsTrigger value="my-groups">My Groups</TabsTrigger>
        </TabsList>
        <TabsContent value="available" className="space-y-4">
          <StudyGroupsList 
            activeTab="available" 
            filteredGroups={filteredGroups} 
          />
        </TabsContent>
        <TabsContent value="my-groups">
          <StudyGroupsList 
            activeTab="my-groups" 
            filteredGroups={[]} 
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default StudyGroups;
