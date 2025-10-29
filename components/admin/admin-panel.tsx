"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LogOut, BarChart3 } from "lucide-react"
import { InternshipManagement } from "./internship-management"
import { MentorManagement } from "./mentor-management"
import { AdminStats } from "./admin-stats"

export function AdminPanel({ user, onLogout }: { user: any; onLogout: () => void }) {
  const [activeTab, setActiveTab] = useState("stats")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Academia Admin</h1>
            <p className="text-sm text-gray-500">Manage internships, mentors, and students</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
              <div>
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
                <p className="text-xs text-gray-500">Administrator</p>
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
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="stats">
              <BarChart3 className="w-4 h-4 mr-2" />
              Statistics
            </TabsTrigger>
            <TabsTrigger value="internships">Internships</TabsTrigger>
            <TabsTrigger value="mentors">Mentors</TabsTrigger>
          </TabsList>

          {/* Statistics Tab */}
          <TabsContent value="stats">
            <AdminStats />
          </TabsContent>

          {/* Internships Tab */}
          <TabsContent value="internships">
            <InternshipManagement />
          </TabsContent>

          {/* Mentors Tab */}
          <TabsContent value="mentors">
            <MentorManagement />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
