export type Task = {
    id: number
    title: string
    status: "todo" | "in_progress" | "done"
    priority: "low" | "medium" | "high"
}

type TaskCardProps = {
    task: Task
}

export const TaskCard = (props: TaskCardProps) => {
    return (
        <article>
            <h2>{props.task.title}</h2>
            <p>{props.task.status}</p>
            <p>{props.task.priority}</p>
            {props.task.status === "done" && (
                <p>Completed</p>
            )}
        </article>
    )
}