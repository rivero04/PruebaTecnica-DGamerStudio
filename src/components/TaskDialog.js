import React from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import '../TaskDialog.css';

const TaskDialog = ({ editingTask, setEditingTask, fetchTasks, displayDialog, setDisplayDialog, updateTask }) => {

    const onInputChange = (event, field) => {
        const value = (event.target && event.target.value) || '';
        let editedtask = { ...editingTask };
        editedtask[field] = value;

        setEditingTask(editedtask);
    };

    const onCheckboxChange = (event) => {
        let editedtask = { ...editingTask };
        editedtask.completed = event.checked;

        setEditingTask(editedtask);
        console.log('Cambiando estado de la tarea:', editedtask);
    };

    const handleUpdateTask = async () => {
        try {
            await updateTask(editingTask);
            fetchTasks();
            setDisplayDialog(false);
            setEditingTask(null);
            console.log('Tarea actualizada correctamente:', editingTask);
        } catch (error) {
            console.error('Error al actualizar la tarae:', error);
        }
    };

    const EditandDelete = (
        <div>
            <Button label="Cancelar" icon="pi pi-times" onClick={() => setDisplayDialog(false)} className="p-button-text" />
            <Button label="Guardar" icon="pi pi-check" onClick={handleUpdateTask} />
        </div>
    );

    return (
        <Dialog visible={displayDialog} style={{ width: '450px' }} header="Detalles de la Tarea" modal className="p-fluid" footer={EditandDelete} onHide={() => setDisplayDialog(false)}>
            {editingTask && (
                <div>
                    <div className="p-field">
                        <label htmlFor="title">Titulo</label>
                        <InputText id="title" value={editingTask.title} onChange={(event) => onInputChange(event, 'title')} />
                    </div>
                    <div className="p-field">
                        <label htmlFor="description">Descripción</label>
                        <InputText id="description" value={editingTask.description} onChange={(event) => onInputChange(event, 'description')} />
                    </div>
                    <div className="p-field-checkbox">
                        <Checkbox inputId="completed" checked={editingTask.completed} onChange={onCheckboxChange} />
                        <label htmlFor="completed">Completada</label>
                    </div>
                </div>
            )}
        </Dialog>
    );
};

export default TaskDialog;
