
import React from 'react';
import ProfileHeader from '@/components/profile/ProfileHeader';
import ProfileSummary from '@/components/profile/ProfileSummary';
import AcademicInfo from '@/components/profile/AcademicInfo';
import CurrentCourses from '@/components/profile/CurrentCourses';
import LearningPreferences from '@/components/profile/LearningPreferences';
import ActivityTabs from '@/components/profile/ActivityTabs';

const Profile = () => {
  const [isEditing, setIsEditing] = React.useState(false);

  return (
    <div className="space-y-6">
      <ProfileHeader isEditing={isEditing} setIsEditing={setIsEditing} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Summary Card */}
        <ProfileSummary isEditing={isEditing} />

        {/* Main Profile Content */}
        <div className="lg:col-span-2 space-y-6">
          <AcademicInfo isEditing={isEditing} />
          <CurrentCourses isEditing={isEditing} />
          <LearningPreferences isEditing={isEditing} />
        </div>
      </div>

      <ActivityTabs />
    </div>
  );
};

export default Profile;
