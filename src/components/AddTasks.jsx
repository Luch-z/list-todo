import { useState } from "react";
import Input from "./Input";

function AddTasks({ onAddTaskSubmit }) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            <Input
                type="text"
                placeholder="Titulo da tarefa"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <Input
                type="text"
                placeholder="Descrição da tarefa"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <button
                onClick={() => {
                    if (!title.trim() || !description.trim()) {
                        return alert("Preencha os campos vazios!");
                    } else {
                        onAddTaskSubmit(title, description);
                        setTitle("");
                        setDescription("");
                    }
                }}
                className="w-full bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
            >
                Adicionar
            </button>
        </div>
    );
}

export default AddTasks;
