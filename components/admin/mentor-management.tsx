"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, Edit2, Trash2, CheckCircle, XCircle } from "lucide-react"

const MENTORS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    title: "Senior Software Engineer",
    company: "Google India",
    expertise: "Web Development",
    mentees: 12,
    status: "Verified",
  },
  {
    id: 2,
    name: "Priya Sharma",
    title: "Product Manager",
    company: "Flipkart",
    expertise: "Product Management",
    mentees: 8,
    status: "Verified",
  },
  {
    id: 3,
    name: "Amit Patel",
    title: "Data Scientist",
    company: "Microsoft",
    expertise: "Machine Learning",
    mentees: 10,
    status: "Pending",
  },
]

export function MentorManagement() {
  const [mentors, setMentors] = useState(MENTORS)
  const [showForm, setShowForm] = useState(false)

  const handleVerify = (id: number) => {
    setMentors(mentors.map((mentor) => (mentor.id === id ? { ...mentor, status: "Verified" } : mentor)))
  }

  const handleReject = (id: number) => {
    setMentors(mentors.filter((mentor) => mentor.id !== id))
  }

  return (
    <div className="space-y-6">
      {/* Header with Add Button */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Manage Mentors</h2>
          <p className="text-sm text-gray-500">Verify and manage mentor profiles</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Mentor
        </Button>
      </div>

      {/* Add Form */}
      {showForm && (
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle>Add New Mentor</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Full Name" />
              <Input placeholder="Title" />
              <Input placeholder="Company" />
              <Input placeholder="Expertise" />
              <Input placeholder="Email" />
              <Input placeholder="Phone" />
            </div>
            <textarea placeholder="Bio" className="w-full p-3 border border-gray-300 rounded-lg text-sm" rows={4} />
            <div className="flex gap-2">
              <Button className="bg-blue-600 hover:bg-blue-700">Save Mentor</Button>
              <Button variant="outline" onClick={() => setShowForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Mentors Table */}
      <Card>
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Name</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Title</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Company</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Expertise</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Mentees</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {mentors.map((mentor) => (
                  <tr key={mentor.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{mentor.name}</td>
                    <td className="py-3 px-4 text-gray-600">{mentor.title}</td>
                    <td className="py-3 px-4 text-gray-600">{mentor.company}</td>
                    <td className="py-3 px-4 text-gray-600">{mentor.expertise}</td>
                    <td className="py-3 px-4 text-gray-600">{mentor.mentees}</td>
                    <td className="py-3 px-4">
                      <Badge
                        className={
                          mentor.status === "Verified" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                        }
                      >
                        {mentor.status}
                      </Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        {mentor.status === "Pending" && (
                          <>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleVerify(mentor.id)}
                              className="text-green-600"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => handleReject(mentor.id)}
                              className="text-red-600"
                            >
                              <XCircle className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                        <Button size="sm" variant="ghost">
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
