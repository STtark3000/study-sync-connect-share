
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Plus } from 'lucide-react';

const CreateStudyGroupDialog = () => {
  return (
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
  );
};

export default CreateStudyGroupDialog;
