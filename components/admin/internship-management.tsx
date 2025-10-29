"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, Edit2, Trash2, Eye } from "lucide-react"

const INTERNSHIPS = [
  {
    id: 1,
    title: "Software Development Internship",
    company: "Tech Startup India",
    location: "Remote",
    stipend: "₹15,000/month",
    applications: 12,
    status: "Active",
  },
  {
    id: 2,
    title: "Data Analytics Internship",
    company: "Analytics Pro",
    location: "Bangalore",
    stipend: "₹12,000/month",
    applications: 8,
    status: "Active",
  },
  {
    id: 3,
    title: "UI/UX Design Internship",
    company: "Design Studio",
    location: "Remote",
    stipend: "₹10,000/month",
    applications: 15,
    status: "Active",
  },
]

export function InternshipManagement() {
  const [internships, setInternships] = useState(INTERNSHIPS)
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="space-y-6">
      {/* Header with Add Button */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Manage Internships</h2>
          <p className="text-sm text-gray-500">Add, edit, or remove internship listings</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)} className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Internship
        </Button>
      </div>

      {/* Add Form */}
      {showForm && (
        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle>Add New Internship</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="Job Title" />
              <Input placeholder="Company Name" />
              <Input placeholder="Location" />
              <Input placeholder="Stipend" />
              <Input placeholder="Duration" />
              <Input placeholder="Skills Required" />
            </div>
            <textarea
              placeholder="Job Description"
              className="w-full p-3 border border-gray-300 rounded-lg text-sm"
              rows={4}
            />
            <div className="flex gap-2">
              <Button className="bg-blue-600 hover:bg-blue-700">Save Internship</Button>
              <Button variant="outline" onClick={() => setShowForm(false)}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Internships Table */}
      <Card>
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Title</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Company</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Location</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Stipend</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Applications</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Status</th>
                  <th className="text-left py-3 px-4 font-medium text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {internships.map((internship) => (
                  <tr key={internship.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4 font-medium text-gray-900">{internship.title}</td>
                    <td className="py-3 px-4 text-gray-600">{internship.company}</td>
                    <td className="py-3 px-4 text-gray-600">{internship.location}</td>
                    <td className="py-3 px-4 text-gray-600">{internship.stipend}</td>
                    <td className="py-3 px-4 text-gray-600">{internship.applications}</td>
                    <td className="py-3 px-4">
                      <Badge className="bg-green-100 text-green-800">{internship.status}</Badge>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost">
                          <Eye className="w-4 h-4" />
                        </Button>
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
