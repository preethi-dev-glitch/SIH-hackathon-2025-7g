"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { LogOut, Briefcase, Users, BookOpen, Bell } from "lucide-react"
import { InternshipListings } from "./internship-listings"
import { MentorDirectory } from "./mentor-directory"
import { StudentProfile } from "./student-profile"

export function StudentDashboard({ user, onLogout }: { user: any; onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState("overview")
  const [notifications, setNotifications] = useState(3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">Academia</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell className="w-6 h-6 text-gray-600 cursor-pointer" />
              {notifications > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs">{notifications}</Badge>
              )}
            </div>
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div>
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">{user.email}</p>
              </div>
              <Button variant="ghost" size="sm" onClick={onLogout}>
                <LogOut className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="internships">
              <Briefcase className="w-4 h-4 mr-2" />
              Internships
            </TabsTrigger>
            <TabsTrigger value="mentors">
              <Users className="w-4 h-4 mr-2" />
              Mentors
            </TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Active Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-blue-600">5</p>
                  <p className="text-xs text-gray-500 mt-1">Pending review</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Mentors Connected</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-green-600">2</p>
                  <p className="text-xs text-gray-500 mt-1">Active mentorship</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium text-gray-600">Profile Completion</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-purple-600">75%</p>
                  <p className="text-xs text-gray-500 mt-1">Complete your profile</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Updates */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Internship Updates</CardTitle>
                <CardDescription>Latest opportunities in your field</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    title: "Software Development Internship",
                    company: "Tech Startup India",
                    location: "Remote",
                    posted: "2 hours ago",
                  },
                  {
                    title: "Data Analytics Internship",
                    company: "Analytics Pro",
                    location: "Bangalore",
                    posted: "5 hours ago",
                  },
                  {
                    title: "UI/UX Design Internship",
                    company: "Design Studio",
                    location: "Remote",
                    posted: "1 day ago",
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{item.title}</p>
                      <p className="text-sm text-gray-600">{item.company}</p>
                      <p className="text-xs text-gray-500 mt-1">{item.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">{item.posted}</p>
                      <Button size="sm" className="mt-2 bg-blue-600 hover:bg-blue-700">
                        Apply
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Internships Tab */}
          <TabsContent value="internships">
            <InternshipListings />
          </TabsContent>

          {/* Mentors Tab */}
          <TabsContent value="mentors">
            <MentorDirectory />
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <StudentProfile user={user} />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
