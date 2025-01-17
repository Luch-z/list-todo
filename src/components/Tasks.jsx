import { CheckIcon, ChevronRightIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
    const navigate = useNavigate();

    function onSeeDetailsClick(task) {
        const query = new URLSearchParams();
        query.set("title", task.title);
        query.set("description", task.description);
        navigate(`/task?${query.toString()}`);
        //navigate(`/task?title=${task.title}&description=${task.description}`);
    }
    return (
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((tasks) => (
                <li key={tasks.id} className="flex gap-2">
                   
                    <button
                        onClick={() => onTaskClick(tasks.id)}
                        className={`bg-slate-400 w-full flex items-center gap-2 text-white p-2 rounded-md text-left ${
                            tasks.isComplete && "line-through"
                        }`}
                    >
                        {tasks.isComplete && <CheckIcon/>}
                        {tasks.title}
                    </button>
                    <Button onClick={() => onSeeDetailsClick(tasks)}>
                        <ChevronRightIcon />
                    </Button>
                    <Button onClick={() => onDeleteTaskClick(tasks.id)}>
                        <Trash2Icon />
                    </Button>
                </li>
            ))}
        </ul>
    );
}

export default Tasks;
