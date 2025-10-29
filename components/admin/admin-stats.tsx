"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Briefcase, Award, TrendingUp } from "lucide-react"

export function AdminStats() {
  const stats = [
    {
      title: "Total Students",
      value: "1,234",
      description: "Active student accounts",
      icon: Users,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Active Internships",
      value: "45",
      description: "Currently listed positions",
      icon: Briefcase,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Mentors",
      value: "89",
      description: "Verified mentors",
      icon: Award,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Applications",
      value: "3,456",
      description: "Total applications received",
      icon: TrendingUp,
      color: "bg-orange-100 text-orange-600",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                  <div className={`p-2 rounded-lg ${stat.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
          <CardDescription>Latest updates from the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { action: "New internship posted", company: "Tech Startup India", time: "2 hours ago" },
              { action: "Student registered", name: "Rahul Kumar", time: "4 hours ago" },
              { action: "Mentor joined", name: "Dr. Priya Sharma", time: "1 day ago" },
              { action: "Application received", position: "Software Developer", time: "1 day ago" },
            ].map((activity, idx) => (
              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                  <p className="text-xs text-gray-500">{activity.company || activity.name || activity.position}</p>
                </div>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
