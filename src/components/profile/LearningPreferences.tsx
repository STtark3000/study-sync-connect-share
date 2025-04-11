
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface LearningPreferencesProps {
  isEditing: boolean;
}

const LearningPreferences = ({ isEditing }: LearningPreferencesProps) => {
  return (
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
  );
};

export default LearningPreferences;
