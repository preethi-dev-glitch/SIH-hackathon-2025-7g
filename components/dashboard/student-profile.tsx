"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Save } from "lucide-react"

export function StudentProfile({ user }: { user: any }) {
  const [profile, setProfile] = useState({
    name: user.name,
    email: user.email,
    phone: "+91 98765 43210",
    location: "Rural Area, India",
    university: "State University",
    degree: "Bachelor of Technology",
    branch: "Computer Science",
    skills: ["JavaScript", "React", "Python", "SQL"],
    bio: "Passionate about learning and building tech solutions",
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleSave = () => {
    setIsEditing(false)
  }

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Your Profile</CardTitle>
            <CardDescription>Manage your personal information</CardDescription>
          </div>
          <Button onClick={() => setIsEditing(!isEditing)} variant={isEditing ? "default" : "outline"}>
            {isEditing ? "Cancel" : "Edit Profile"}
          </Button>
        </CardHeader>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <Input
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                disabled={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <Input
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                disabled={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <Input
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                disabled={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <Input
                value={profile.location}
                onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                disabled={!isEditing}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Education */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Education</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">University</label>
              <Input
                value={profile.university}
                onChange={(e) => setProfile({ ...profile, university: e.target.value })}
                disabled={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
              <Input
                value={profile.degree}
                onChange={(e) => setProfile({ ...profile, degree: e.target.value })}
                disabled={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Branch</label>
              <Input
                value={profile.branch}
                onChange={(e) => setProfile({ ...profile, branch: e.target.value })}
                disabled={!isEditing}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Skills */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Bio */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Bio</CardTitle>
        </CardHeader>
        <CardContent>
          <textarea
            value={profile.bio}
            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
            disabled={!isEditing}
            className="w-full p-3 border border-gray-300 rounded-lg text-sm disabled:bg-gray-50"
            rows={4}
          />
        </CardContent>
      </Card>

      {isEditing && (
        <Button onClick={handleSave} className="w-full bg-blue-600 hover:bg-blue-700">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      )}
    </div>
  )
}
