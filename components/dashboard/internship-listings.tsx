"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { MapPin, Briefcase, Clock, DollarSign, Search } from "lucide-react"

const INTERNSHIPS = [
  {
    id: 1,
    title: "Software Development Internship",
    company: "Tech Startup India",
    location: "Remote",
    duration: "3 months",
    stipend: "₹15,000/month",
    description: "Work on real-world projects using React and Node.js",
    skills: ["React", "Node.js", "MongoDB"],
    posted: "2 hours ago",
    applications: 12,
  },
  {
    id: 2,
    title: "Data Analytics Internship",
    company: "Analytics Pro",
    location: "Bangalore",
    duration: "6 months",
    stipend: "₹12,000/month",
    description: "Analyze business data and create insights",
    skills: ["Python", "SQL", "Tableau"],
    posted: "5 hours ago",
    applications: 8,
  },
  {
    id: 3,
    title: "UI/UX Design Internship",
    company: "Design Studio",
    location: "Remote",
    duration: "3 months",
    stipend: "₹10,000/month",
    description: "Design beautiful user interfaces for web and mobile",
    skills: ["Figma", "UI Design", "Prototyping"],
    posted: "1 day ago",
    applications: 15,
  },
  {
    id: 4,
    title: "Digital Marketing Internship",
    company: "Marketing Hub",
    location: "Delhi",
    duration: "2 months",
    stipend: "₹8,000/month",
    description: "Learn digital marketing strategies and campaigns",
    skills: ["SEO", "Social Media", "Analytics"],
    posted: "2 days ago",
    applications: 20,
  },
  {
    id: 5,
    title: "Content Writing Internship",
    company: "Content Creators",
    location: "Remote",
    duration: "3 months",
    stipend: "₹7,000/month",
    description: "Create engaging content for blogs and social media",
    skills: ["Writing", "SEO", "Research"],
    posted: "3 days ago",
    applications: 10,
  },
]

export function InternshipListings() {
  const [searchTerm, setSearchTerm] = useState("")
  const [appliedInternships, setAppliedInternships] = useState<number[]>([])

  const filteredInternships = INTERNSHIPS.filter(
    (internship) =>
      internship.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      internship.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleApply = (id: number) => {
    if (!appliedInternships.includes(id)) {
      setAppliedInternships([...appliedInternships, id])
    }
  }

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <Input
          placeholder="Search internships by title, company, or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Internship Cards */}
      <div className="grid gap-4">
        {filteredInternships.map((internship) => (
          <Card key={internship.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{internship.title}</CardTitle>
                  <CardDescription>{internship.company}</CardDescription>
                </div>
                <Badge variant={appliedInternships.includes(internship.id) ? "default" : "outline"}>
                  {appliedInternships.includes(internship.id) ? "Applied" : "Open"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">{internship.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  {internship.location}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock className="w-4 h-4" />
                  {internship.duration}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <DollarSign className="w-4 h-4" />
                  {internship.stipend}
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Briefcase className="w-4 h-4" />
                  {internship.applications} applied
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {internship.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <p className="text-xs text-gray-500">Posted {internship.posted}</p>
                <Button
                  onClick={() => handleApply(internship.id)}
                  disabled={appliedInternships.includes(internship.id)}
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  {appliedInternships.includes(internship.id) ? "Application Sent" : "Apply Now"}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
