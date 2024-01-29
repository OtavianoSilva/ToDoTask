import React, { ReactNode, createContext, useState } from 'react';

interface TaskProps {
    id: number;
    title: string;
    state: boolean;
    day: number;
    month: number;
    year: number;
    hour: number;
    minutes: number;
    category: string;
}

interface TaskContextProps {
    task: TaskProps;
    selectTask: (task: TaskProps) => void;
    clearTask: () => void;
}

export const TaskContext = createContext<TaskContextProps>({
    task: {
        id: 0, title: '', state: false, day: 0, month: 0, year: 0, hour: 0, category: ''
    },
    selectTask: () => { }, clearTask: () => { }
});

interface TaskProviderProps {
    children: ReactNode;
}

function TaskProvider({ children }: TaskProviderProps) {
    const [task, setTask] = useState<TaskProps>({ id: 0, title: '', state: false, day: 0, month: 0, year: 0, hour: 0, minutes: 0, category: '' });

    function selectTask(task: TaskProps) {
        setTask(task);
    }

    function clearTask() {
        setTask({ id: 0, title: '', state: false, day: 0, month: 0, year: 0, hour: 0, minutes: 0, category: '' });
    }

    return (
        <TaskContext.Provider value={{ task, selectTask, clearTask }}>
            {children}
        </TaskContext.Provider>
    );
}

export default TaskProvider;