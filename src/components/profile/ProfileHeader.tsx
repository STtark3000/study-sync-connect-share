
import React from 'react';
import { Button } from '@/components/ui/button';
import { Edit, Save } from 'lucide-react';

interface ProfileHeaderProps {
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileHeader = ({ isEditing, setIsEditing }: ProfileHeaderProps) => {
  return (
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
  );
};

export default ProfileHeader;
