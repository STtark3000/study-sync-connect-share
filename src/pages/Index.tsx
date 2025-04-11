
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Users, GraduationCap, FileText, CheckCircle } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header/Navigation */}
      <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-30">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
          <Link to="/" className="text-xl font-bold text-study-purple">StudySync</Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/#features" className="text-sm font-medium hover:text-primary">Features</Link>
            <Link to="/#how-it-works" className="text-sm font-medium hover:text-primary">How it Works</Link>
            <Link to="/#testimonials" className="text-sm font-medium hover:text-primary">Testimonials</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link to="/dashboard">Log in</Link>
            </Button>
            <Button asChild>
              <Link to="/dashboard">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-study-purple">
                Connect, Collaborate, and Excel Together
              </h1>
              <p className="text-xl text-gray-700 max-w-2xl">
                Join StudySync to find study groups, connect with mentors, and share academic resources with students who share your academic interests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link to="/dashboard">
                    Join StudySync <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/#features">Learn More</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="/placeholder.svg" 
                alt="StudySync Hero" 
                className="rounded-lg shadow-xl"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-study-purple mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              StudySync offers powerful tools to enhance your academic journey through collaboration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="study-card bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Study Groups</h3>
              <p className="text-gray-700">
                Find and create study groups based on your courses, schedule, and learning preferences.
              </p>
            </div>

            <div className="study-card bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="h-12 w-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                <GraduationCap className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Peer Mentorship</h3>
              <p className="text-gray-700">
                Connect with experienced students who can guide you through challenging courses.
              </p>
            </div>

            <div className="study-card bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Resource Sharing</h3>
              <p className="text-gray-700">
                Share and access verified notes, guides, and study materials for your courses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-study-purple mb-4">How StudySync Works</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Getting started is easy. Follow these simple steps to begin your collaborative learning journey.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-12">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="h-14 w-14 rounded-full bg-primary flex items-center justify-center text-white text-xl font-bold">
                1
              </div>
              <div className="md:flex-1">
                <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
                <p className="text-gray-700">
                  Sign up and tell us about your academic interests, courses, and learning style preferences.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center text-white text-xl font-bold">
                2
              </div>
              <div className="md:flex-1">
                <h3 className="text-xl font-semibold mb-2">Discover and Connect</h3>
                <p className="text-gray-700">
                  Browse study groups, find mentors, or explore resources that match your academic needs.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="h-14 w-14 rounded-full bg-accent flex items-center justify-center text-accent-foreground text-xl font-bold">
                3
              </div>
              <div className="md:flex-1">
                <h3 className="text-xl font-semibold mb-2">Collaborate and Succeed</h3>
                <p className="text-gray-700">
                  Join discussions, participate in study sessions, and share your knowledge with the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-study-purple text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Learning Experience?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of students who are already excelling with StudySync.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/dashboard">
              Get Started Now <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-lg font-bold mb-4">StudySync</h3>
              <p>Connecting students for collaborative learning and academic success.</p>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Features</h4>
              <ul className="space-y-2">
                <li><Link to="/study-groups" className="hover:text-white">Study Groups</Link></li>
                <li><Link to="/mentorship" className="hover:text-white">Mentorship</Link></li>
                <li><Link to="/resources" className="hover:text-white">Resources</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-white">About Us</Link></li>
                <li><Link to="/" className="hover:text-white">Contact</Link></li>
                <li><Link to="/" className="hover:text-white">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-sm font-semibold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-white">Twitter</Link></li>
                <li><Link to="/" className="hover:text-white">Instagram</Link></li>
                <li><Link to="/" className="hover:text-white">LinkedIn</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} StudySync. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
