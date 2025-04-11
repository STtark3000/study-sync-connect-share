
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Plus } from 'lucide-react';

interface CurrentCoursesProps {
  isEditing: boolean;
}

const CurrentCourses = ({ isEditing }: CurrentCoursesProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Current Courses</CardTitle>
      </CardHeader>
      <CardContent>
        {isEditing ? (
          <div className="space-y-4">
            <div className="flex gap-4 items-center">
              <Input defaultValue="CS 302 - Data Structures & Algorithms" className="flex-grow" />
              <Button variant="outline" size="sm">Remove</Button>
            </div>
            <div className="flex gap-4 items-center">
              <Input defaultValue="MATH 301 - Linear Algebra" className="flex-grow" />
              <Button variant="outline" size="sm">Remove</Button>
            </div>
            <div className="flex gap-4 items-center">
              <Input defaultValue="PHYS 201 - Physics for Engineers" className="flex-grow" />
              <Button variant="outline" size="sm">Remove</Button>
            </div>
            <Button variant="outline" size="sm" className="mt-2">
              <Plus className="mr-2 h-4 w-4" /> Add Course
            </Button>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex justify-between items-center py-2 border-b">
              <div className="flex gap-2 items-center">
                <Badge>CS 302</Badge>
                <span>Data Structures & Algorithms</span>
              </div>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <div className="flex gap-2 items-center">
                <Badge>MATH 301</Badge>
                <span>Linear Algebra</span>
              </div>
            </div>
            <div className="flex justify-between items-center py-2">
              <div className="flex gap-2 items-center">
                <Badge>PHYS 201</Badge>
                <span>Physics for Engineers</span>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CurrentCourses;
