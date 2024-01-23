import React, { ReactNode, createContext, useState } from 'react';

interface TaskProps {
    id: number;
    title: string;
    state: boolean;
}

interface TaskContextProps {
    task: TaskProps;
    selectTask: (task: TaskProps) => void;
    clearTask: () => void;
}

export const TaskContext = createContext<TaskContextProps>({ task: { id: 0, title: '', done: false }, selectTask: () => { }, clearTask: () => { } });

interface TaskProviderProps {
    children: ReactNode;
}

function TaskProvider({ children }: TaskProviderProps) {
    const [task, setTask] = useState<TaskProps>({ id: 0, title: '', done: false });

    function selectTask(task: TaskProps) {
        setTask(task);
    }

    function clearTask() {
        setTask({ id: 0, title: '', done: false });
    }

    return (
        <TaskContext.Provider value={{ task, selectTask, clearTask }}>
            {children}
        </TaskContext.Provider>
    );
}

export default TaskProvider;