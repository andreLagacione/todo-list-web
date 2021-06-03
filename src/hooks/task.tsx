import React, { createContext, useCallback, useContext, useState } from 'react';

export interface Task {
    title: string;
    isComplete: boolean;
}

interface TaskContextData {
    tasks: Task[];
    createTask(taskName: string): Promise<void>;
}

const TaskContext = createContext<TaskContextData>({} as TaskContextData);

export const TaskProvider: React.FC = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const createTask = useCallback(async (taskName: string) => {
        const newTask = {
            title: taskName,
            isComplete: false
        };
        const updateTasks = [...tasks, newTask];
        await setTasks(updateTasks);
    }, []);

    return (
        <TaskContext.Provider value={{ tasks, createTask }}>
            {children}
        </TaskContext.Provider>
    );
}

export function useTask(): TaskContextData {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error('useTask must be used within an TaskContext');
    }

    return context;
}
