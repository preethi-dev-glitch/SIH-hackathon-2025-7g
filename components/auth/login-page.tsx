"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, Briefcase } from "lucide-react"

export function LoginPage({ onLogin }: { onLogin: (user: any, role: "student" | "admin") => void }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [isSignUp, setIsSignUp] = useState(false)
  const [selectedRole, setSelectedRole] = useState<"student" | "admin">("student")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && password) {
      const user = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        name: name || email.split("@")[0],
        role: selectedRole,
        createdAt: new Date().toISOString(),
      }
      onLogin(user, selectedRole)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Academia</h1>
          </div>
          <p className="text-gray-600">Bridging Industry & Students</p>
          <p className="text-sm text-gray-500 mt-2">Empowering rural students with opportunities</p>
        </div>

        {/* Login Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>{isSignUp ? "Create Account" : "Welcome Back"}</CardTitle>
            <CardDescription>{isSignUp ? "Join our community of learners" : "Sign in to your account"}</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="student" className="mb-6">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="student" onClick={() => setSelectedRole("student")}>
                  <Users className="w-4 h-4 mr-2" />
                  Student
                </TabsTrigger>
                <TabsTrigger value="admin" onClick={() => setSelectedRole("admin")}>
                  <Briefcase className="w-4 h-4 mr-2" />
                  Admin
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <form onSubmit={handleSubmit} className="space-y-4">
              {isSignUp && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <Input
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                {isSignUp ? "Create Account" : "Sign In"}
              </Button>
            </form>

            <div className="mt-4 text-center">
              <button
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                {isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
              </button>
            </div>
          </CardContent>
        </Card>

        {/* Features */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="bg-white rounded-lg p-3 mb-2">
              <BookOpen className="w-6 h-6 text-blue-600 mx-auto" />
            </div>
            <p className="text-xs text-gray-600">Learn</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-3 mb-2">
              <Briefcase className="w-6 h-6 text-blue-600 mx-auto" />
            </div>
            <p className="text-xs text-gray-600">Intern</p>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-lg p-3 mb-2">
              <Users className="w-6 h-6 text-blue-600 mx-auto" />
            </div>
            <p className="text-xs text-gray-600">Connect</p>
          </div>
        </div>
      </div>
    </div>
  )
}
