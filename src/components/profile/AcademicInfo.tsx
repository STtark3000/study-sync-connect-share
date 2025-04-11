
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';

interface AcademicInfoProps {
  isEditing: boolean;
}

const AcademicInfo = ({ isEditing }: AcademicInfoProps) => {
  return (
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
  );
};

export default AcademicInfo;
