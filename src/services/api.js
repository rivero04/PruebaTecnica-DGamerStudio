import axios from 'axios';

const API_URL = 'https://test.gmnlab.com/api/tasks';
const BEARER_TOKEN = 'Zd1PKC1ONdSONCWLguaB';

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        Authorization: `Bearer ${BEARER_TOKEN}`
    }
});

export const fetchTasks = async () => {
    const response = await axiosInstance.get('/');
    return response.data.response;
};

export const createTask = async (task) => {
    await axiosInstance.post('/', task);
};

export const updateTask = async (task) => {
    await axiosInstance.put(`/${task.id}`, task);
};

export const deleteTask = async (id) => {
    await axiosInstance.delete(`/${id}`);
};

export const fetchAllTasks = async (setLoading, setTasks) => {
    setLoading(true);
    try {
        const tasks = await fetchTasks();
        console.log('Tareas obtenidas:', tasks);
        setTasks(tasks);
    } catch (error) {
        console.error('Error al obtener tareas:', error);
    } finally {
        setLoading(false);
    }
};
