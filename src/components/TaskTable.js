import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import '../TaskTable.css';

const TaskTable = ({ tasks, loading, fetchTasks, setEditingTask, setDisplayDialog, deleteTask }) => {

    const handleDeleteTask = async (id) => {
        try {
            await deleteTask(id);
            fetchTasks();
            console.log('Tarea eliminada correctamente, con id:', id);
        } catch (error) {
            console.error('Error al eliminar la tarea', error);
        }
    };

    const handleEditTask = (task) => {
        setEditingTask({ ...task });
        setDisplayDialog(true);
        console.log('Editando tarea:', task);
    };

    return (
        <div className="task-table-container">
            <DataTable 
            value={tasks} 
            loading={loading} 
            paginator rows={5} 
            tableStyle={{ minWidth: '50rem' }} 
            className="p-datatable-gridlines p-datatable-striped" 
            sortField='created_at' 
            sortOrder={-1}>
                <Column field="id" header="ID"></Column>
                <Column field="title" header="Título"></Column>
                <Column field="description" header="Descripción"></Column>
                <Column field="completed" header="Estado" body={(rowData) => (rowData.completed ? 'Completado' : 'Pendiente')}></Column>
                <Column body={(rowData) => (
                    <div>
                        <Button label="Editar" icon="pi pi-pencil" className="p-button-text" onClick={() => handleEditTask(rowData)} />
                        <Button label="Eliminar" icon="pi pi-trash" className="p-button-text" onClick={() => handleDeleteTask(rowData.id)} />
                    </div>
                )} header="Acciones"></Column>
            </DataTable>
        </div>
    );
};

export default TaskTable;
