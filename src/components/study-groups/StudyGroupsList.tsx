
import React from 'react';
import StudyGroupCard from './StudyGroupCard';
import MyStudyGroupCard from './MyStudyGroupCard';

interface StudyGroup {
  id: number;
  name: string;
  course: string;
  schedule: string;
  location: string;
  members: number;
  tags: string[];
}

interface StudyGroupsListProps {
  activeTab: string;
  filteredGroups: StudyGroup[];
}

const StudyGroupsList = ({ activeTab, filteredGroups }: StudyGroupsListProps) => {
  if (activeTab === 'available') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGroups.map((group) => (
          <StudyGroupCard key={group.id} group={group} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <MyStudyGroupCard
        title="Physics 101 Study Group"
        course="PHYS 101"
        members={5}
        isLeader={true}
        schedule="Tuesdays & Thursdays, 4:00 PM"
        location="Science Building - Room 203"
      />
      
      <MyStudyGroupCard
        title="Literature Analysis"
        course="LITR 305"
        members={8}
        schedule="Fridays, 2:00 PM"
        location="Virtual (Zoom)"
        isVirtual={true}
        tags={['Literature', 'Analysis', 'Weekly']}
      />
    </div>
  );
};

export default StudyGroupsList;
