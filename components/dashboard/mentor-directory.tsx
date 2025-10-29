"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Star, MessageCircle, Search, Award } from "lucide-react"

const MENTORS = [
  {
    id: 1,
    name: "Rajesh Kumar",
    title: "Senior Software Engineer",
    company: "Google India",
    expertise: ["Web Development", "System Design", "Career Growth"],
    bio: "Helping rural students break into tech with practical guidance",
    rating: 4.9,
    reviews: 45,
    mentees: 12,
    availability: "Available",
    image: "👨‍💼",
  },
  {
    id: 2,
    name: "Priya Sharma",
    title: "Product Manager",
    company: "Flipkart",
    expertise: ["Product Management", "Analytics", "Leadership"],
    bio: "Passionate about mentoring the next generation of product leaders",
    rating: 4.8,
    reviews: 38,
    mentees: 8,
    availability: "Available",
    image: "👩‍💼",
  },
  {
    id: 3,
    name: "Amit Patel",
    title: "Data Scientist",
    company: "Microsoft",
    expertise: ["Machine Learning", "Python", "Data Analysis"],
    bio: "Dedicated to making AI accessible to students from all backgrounds",
    rating: 4.7,
    reviews: 32,
    mentees: 10,
    availability: "Available",
    image: "👨‍🔬",
  },
  {
    id: 4,
    name: "Neha Gupta",
    title: "UX Designer",
    company: "Adobe",
    expertise: ["UI/UX Design", "Design Thinking", "Prototyping"],
    bio: "Helping students create beautiful and functional designs",
    rating: 4.9,
    reviews: 41,
    mentees: 9,
    availability: "Available",
    image: "👩‍🎨",
  },
  {
    id: 5,
    name: "Vikram Singh",
    title: "Startup Founder",
    company: "TechStart India",
    expertise: ["Entrepreneurship", "Startups", "Business Strategy"],
    bio: "Guiding students to build their own ventures",
    rating: 4.8,
    reviews: 35,
    mentees: 7,
    availability: "Available",
    image: "👨‍💻",
  },
]

export function MentorDirectory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [connectedMentors, setConnectedMentors] = useState<number[]>([])

  const filteredMentors = MENTORS.filter(
    (mentor) =>
      mentor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      mentor.expertise.some((exp) => exp.toLowerCase().includes(searchTerm.toLowerCase())) ||
      mentor.company.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleConnect = (id: number) => {
    if (!connectedMentors.includes(id)) {
      setConnectedMentors([...connectedMentors, id])
    }
  }

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
        <Input
          placeholder="Search mentors by name, expertise, or company..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Mentor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredMentors.map((mentor) => (
          <Card key={mentor.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start gap-4">
                <div className="text-4xl">{mentor.image}</div>
                <div className="flex-1">
                  <CardTitle className="text-lg">{mentor.name}</CardTitle>
                  <CardDescription>{mentor.title}</CardDescription>
                  <p className="text-xs text-gray-500 mt-1">{mentor.company}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">{mentor.bio}</p>

              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{mentor.rating}</span>
                  <span className="text-gray-500">({mentor.reviews})</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <Award className="w-4 h-4" />
                  {mentor.mentees} mentees
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {mentor.expertise.map((exp) => (
                  <Badge key={exp} variant="secondary" className="text-xs">
                    {exp}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 pt-4 border-t border-gray-200">
                <Button
                  onClick={() => handleConnect(mentor.id)}
                  disabled={connectedMentors.includes(mentor.id)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  {connectedMentors.includes(mentor.id) ? "Connected" : "Connect"}
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Message
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
