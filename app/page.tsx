"use client"

import { useState } from "react"
import { LoginPage } from "@/components/auth/login-page"
import { StudentDashboard } from "@/components/dashboard/student-dashboard"
import { AdminPanel } from "@/components/admin/admin-panel"

export default function Home() {
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [userRole, setUserRole] = useState<"student" | "admin" | null>(null)

  const handleLogin = (user: any, role: "student" | "admin") => {
    setCurrentUser(user)
    setUserRole(role)
  }

  const handleLogout = () => {
    setCurrentUser(null)
    setUserRole(null)
  }

  if (!currentUser) {
    return <LoginPage onLogin={handleLogin} />
  }

  if (userRole === "admin") {
    return <AdminPanel user={currentUser} onLogout={handleLogout} />
  }

  return <StudentDashboard user={currentUser} onLogout={handleLogout} />
}
