import { useState } from "react";
import { TaskCard } from "../exercises/02-task-card";
import type { Task } from "../exercises/02-task-card";

const tasks: Task[] = [
    {
        id:1,
        title:"task 1",
        status:"in_progress",
        priority:"low"
    },
    {
        id:2,
        title: "Clean room", 
        status: "todo", 
        priority: "low"
    },
    {
        id:3,
        title: "Eat breakfast", 
        status: "done", 
        priority: "medium"
    }
]

export const App = () => {
    const [showCompleted, setShowCompleted] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const updateShowCompleted = () => {
        setShowCompleted(previous => !previous)
    }

    const visibleTasks = tasks.filter((task) => {
        const matchesSearch = task.title.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesVisibility = showCompleted && task.status === "done" || task.status !== "done"
        return (matchesSearch && matchesVisibility)
    }) 

    const visibleTasksLength = visibleTasks.length

    return (
        <div>
            <label htmlFor="input">Search Tasks</label>
            <input id="input" placeholder="search" value={searchQuery} onChange={(event) => {setSearchQuery(event.currentTarget.value)}} />
            <button onClick={() => setSearchQuery("")}>Clear Search</button>

            <button onClick={updateShowCompleted} >{showCompleted ? "Hide completed tasks" : "Show completed tasks"}</button>
             {visibleTasksLength === 0 ? (
                <p>No matching tasks</p>
             ):
             (
                <p>Matching tasks: {visibleTasksLength}</p>
             )}
             
            {visibleTasks
                .map((task) => {
                 return (
                    <TaskCard key={task.id} task={task} />
                )
            })}


        </div>
    )
}