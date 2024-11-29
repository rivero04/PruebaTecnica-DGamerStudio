import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import '../TaskForm.css';

const TaskForm = ({ newTask, setNewTask, fetchTasks, createTask }) => {

    const handleCreateTask = async () => {
        if (!newTask.title || !newTask.description) {
            alert('Por favor, completa todos los campos');
            return;
        }
        try {
            await createTask(newTask);
            fetchTasks();
            setNewTask({ title: '', description: '', completed: false });
            console.log('Tarea creada correctamenrte:', newTask);
        } catch (error) {
            console.error('Error al crear la tarea', error);
        }
    };

    return (
        <div className="task-form-container">
            <h2>Agrega una Nueva Tarea</h2>
            <div>
                <div>
                    <label htmlFor="title">Título</label>
                    <InputText id="title" value={newTask.title} onChange={(event) => setNewTask({ ...newTask, title: event.target.value })}/>
                </div>
                <div>
                    <label htmlFor="description">Descripción</label>
                    <InputText id="description" value={newTask.description} onChange={(event) => setNewTask({ ...newTask, description: event.target.value })}/>
                </div>
                <div>
                    <Button label="Crear Tarea" icon="pi pi-plus" onClick={handleCreateTask} className="buttonform" />
                </div>
            </div>
        </div>
    );
};

export default TaskForm;
