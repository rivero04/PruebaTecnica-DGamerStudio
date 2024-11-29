# Gestor de Tareas - Prueba Técnica  

Aplicación frontend desarrollada en React que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una lista de tareas. La interfaz se construyó con PrimeReact y la conexión a la API se realizó utilizando Axios.  

---

## **Instrucciones**  

### **1. Clonar e instalar dependencias**  
```bash
git clone https://github.com/rivero04/PruebaTecnica-DGamerStudio.git
cd PruebaTecnica-DGamerStudio
npm install
```

### **2. Iniciar la aplicación**  
Si estás usando una versión más reciente (como `v17` o superior), es posible que encuentres el error relacionado con OpenSSL.

   Para solucionarlo, añade la opción `--openssl-legacy-provider` antes de ejecutar cualquier comando. Por ejemplo:

   ```bash
   NODE_OPTIONS=--openssl-legacy-provider npm start
```
**Modo desarrollo:**
```bash
npm start
```

**Modo producción:**
```bash
npm run build
```

## **Funcionalidades**  
- **Lista de tareas:** Visualiza todas las tareas en una tabla.
- **Crear tareas:** Agrega nuevas tareas con título y descripción.
- **Editar tareas:** Actualiza título, descripción o estado (completada/pendiente).
- **Eliminar tareas:** Borra tareas de forma sencilla y segura.

## **API utilizada**  
**Base URL:**  
`https://test.gmnlab.com/api`

**Autorización:**  
Todas las solicitudes deben incluir el header:
```makefile
Authorization: Bearer Zd1PKC1ONdSONCWLguaB
```

**Endpoints principales:**
- `GET /tasks` - Listar tareas.
- `POST /tasks` - Crear tarea.
- `PUT /tasks/{id}` - Actualizar tarea.
- `DELETE /tasks/{id}` - Eliminar tarea.
