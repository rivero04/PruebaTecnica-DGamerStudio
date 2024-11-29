import React, { useState, useEffect } from 'react';
import { fetchAllTasks, createTask, updateTask, deleteTask } from './services/api';
import TaskForm from './components/TaskForm';
import TaskTable from './components/TaskTable';
import TaskDialog from './components/TaskDialog';
import './App.css';

const App = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({ title: '', description: '', completed: false });
    const [editingTask, setEditingTask] = useState(null);
    const [loading, setLoading] = useState(true);
    const [displayDialog, setDisplayDialog] = useState(false);

    useEffect(() => {
        fetchAllTasks(setLoading, setTasks);
    }, []);

    return (
        <div className="app-container">
            <h2 className="app-title">Administrador de Tareas</h2>
            <div className="content-container">
                <TaskForm 
                newTask={newTask}
                setNewTask={setNewTask}
                fetchTasks={() => fetchAllTasks(setLoading, setTasks)}
                createTask={createTask} />

                <TaskTable
                tasks={tasks}
                loading={loading}
                fetchTasks={() => fetchAllTasks(setLoading, setTasks)}
                setEditingTask={setEditingTask}
                setDisplayDialog={setDisplayDialog}
                deleteTask={deleteTask} />
            </div>

            <TaskDialog
            editingTask={editingTask}
            setEditingTask={setEditingTask}
            fetchTasks={() => fetchAllTasks(setLoading, setTasks)}
            displayDialog={displayDialog}
            setDisplayDialog={setDisplayDialog}
            updateTask={updateTask} />
        </div>
    );
};

export default App;
