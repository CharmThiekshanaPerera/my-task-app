"use client"
import { useEffect, useState } from "react"

interface Task {
  id: number
  title: string
  completed: boolean
}

export default function AdminPanel() {
  const [tasks, setTasks] = useState<Task[]>([])

  const fetchTasks = async () => {
    const res = await fetch("/api/tasks")
    const data = await res.json()
    setTasks(data)
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <main className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">🔧 Admin Panel</h1>
      <ul className="space-y-2">
        {tasks.map(task => (
          <li key={task.id} className="bg-gray-100 p-3 rounded flex justify-between items-center">
            <span>{task.title}</span>
            <span className="text-sm text-gray-500">ID: {task.id}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}