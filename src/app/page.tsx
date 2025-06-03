"use client"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface Task {
  id: number
  title: string
  completed: boolean
}

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  const [title, setTitle] = useState("")

  const fetchTasks = async () => {
    const res = await fetch("/api/tasks")
    const data = await res.json()
    setTasks(data)
  }

  const addTask = async () => {
    if (!title) return
    await fetch("/api/tasks", {
      method: "POST",
      body: JSON.stringify({ title }),
    })
    setTitle("")
    fetchTasks()
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  return (
    <main className="max-w-xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">📝 Task Manager</h1>
      <div className="flex gap-2 mb-4">
        <Input placeholder="Enter task..." value={title} onChange={(e) => setTitle(e.target.value)} />
        <Button onClick={addTask}>Add</Button>
      </div>
      <ul className="space-y-2">
        {tasks.map(task => (
          <li key={task.id} className="bg-gray-100 p-3 rounded">
            {task.title}
          </li>
        ))}
      </ul>
    </main>
  )
}
