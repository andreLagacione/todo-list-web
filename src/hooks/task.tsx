import React, { createContext, useCallback, useContext, useState } from 'react';
import { ConfirmModalControl } from '../components/confirm-modal';
import { ToastContainer, toast } from 'react-toastify';

export enum TaskState {
    complete = 'COMPLETE',
    incomplete = 'INCOMPLETE',
}

export interface Task {
    id: string;
    description: string;
    state: TaskState;
    createdAt: Date;
    completedAt: Date | null;
}

interface TaskContextData {
    tasks: Task[];
    editTaskTitle: Task;
    confirmModalControl: ConfirmModalControl;
    controlLoaderDeleteTask: boolean;
    controlLoaderTaskList: boolean;
    createTask(taskName: string): Promise<void>;
    updateTask(task: Task): Promise<void>;
    editTask(task: Task): Promise<void>;
    controlConfirmModal(data: ConfirmModalControl): Promise<void>;
    deleteTask(taskId: string): Promise<void>;
    FilterTask(filterBy: string, orderBy: string): Promise<void>;
}

const TaskContext = createContext<TaskContextData>({} as TaskContextData);

export const TaskProvider: React.FC = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [editTaskTitle, setEditTaskTitle] = useState<Task>({} as Task);
    const [confirmModalControl, setConfirmModalControl] = useState<ConfirmModalControl>({} as ConfirmModalControl);
    const [controlLoaderDeleteTask, setControlLoaderDeleteTask] = useState<boolean>(false);
    const [controlLoaderTaskList, setControlLoaderTaskList] = useState<boolean>(false);

    const createTask = useCallback(async (taskName: string) => {
        const newTask = {
            id: '' + (Math.random() * 10000),
            description: taskName,
            state: TaskState.incomplete,
            createdAt: new Date(),
            completedAt: null,
        };

        await setTasks([...tasks, newTask]);

    }, []);

    const updateTask = useCallback(async (task: Task) => {
        
    }, []);

    const editTask = useCallback(async (task: Task) => {
        setEditTaskTitle(task);
    }, []);

    const controlConfirmModal = useCallback(async (data: ConfirmModalControl) => {
        setConfirmModalControl(data);
    }, []);

    const deleteTask = useCallback(async (taskId: string) => {
        setControlLoaderDeleteTask(true);

        setTimeout(() => {
            setControlLoaderDeleteTask(false);
            setConfirmModalControl({ isOpen: false, taskId });
            toast.success('Task deleted!');
        }, 3000);
    }, []);

    const FilterTask = useCallback(async (filterBy: string ,orderBy: string) => {
        setControlLoaderTaskList(true);

        setTimeout(() => {
            setControlLoaderTaskList(false);
        }, 3000);
    }, []);
    
    return (
        <TaskContext.Provider
            value={{
                tasks,
                editTaskTitle,
                confirmModalControl,
                controlLoaderDeleteTask,
                controlLoaderTaskList,
                createTask,
                updateTask,
                editTask,
                controlConfirmModal,
                deleteTask,
                FilterTask
            }}
        >
            {children}
            
            <ToastContainer />
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
