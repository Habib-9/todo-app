# todo-app Backend

## Descripció

Aquest paquet conté la part **backend** de la To-Do List amb MEVN (MongoDB, Express, Node.js).
Proporciona una API RESTful per gestionar tasques amb operacions CRUD i es connecta a una base de dades MongoDB.

---

## Estructura de carpetes

```
backend/
├─ config/
│  └─ db.js              # Connexió a MongoDB
├─ controllers/
│  └─ taskController.js  # Lògica CRUD de Task
├─ models/
│  └─ Task.js            # Esquema Mongoose de Task
├─ routes/
│  └─ tasks.js           # Rutes /api/tasks
├─ importData.js         # Script per importar dades de prova
├─ .env                  # Variables d’entorn (no pujar al repositori)
├─ app.js                # Servidor Express
├─ package.json          # Dependències i scripts
└─ README.md             # Aquest document
```

---

## Instal·lació i configuració

1. **Clona el repositori** i ves al directori `backend/`:

   ```bash
   cd backend
   ```

2. **Crea un fitxer `.env`** a `backend/` amb aquests valors:

   ```dotenv
   MONGO_URI=mongodb://localhost:27017/todo_app
   PORT=5000
   ```

   — Canvia `MONGO_URI` si utilitzes un clúster Atlas:

   ```dotenv
   MONGO_URI=mongodb+srv://<usuari>:<contrasenya>@cluster0.mongodb.net/todo_app?retryWrites=true&w=majority
   ```

3. **Instal·la les dependències**:

   ```bash
   npm install
   ```

---

## Importar dades de prova

Per omplir la base de dades amb un conjunt inicial de tasques, executa:

```bash
node importData.js
```

Aquest script:

* Connecta a MongoDB.
* Elimina totes les tasques existents.
* Inserta tres tasques d’exemple:

  1. “Fer exercici” (pendiente)
  2. “Estudiar backend” (fet)
  3. “Enviar pràctica” (pendiente)

---

## Executar el servidor

Per engegar l’API:

```bash
npm run dev
```

— o bé:

```bash
node app.js
```

Això inicialitzarà Express al port definit (`5000` per defecte).
Veureu en consola:

```
✔️ MongoDB connected
✔️ Server running at http://localhost:5000
```

---

## Endpoints disponibles

| Mètode | Ruta             | Descripció                      | Cos petició (JSON)               |
| ------ | ---------------- | ------------------------------- | -------------------------------- |
| GET    | `/api/tasks`     | Llistar totes les tasques       | —                                |
| POST   | `/api/tasks`     | Crear una nova tasca            | `{ "title": "Text de la tasca"}` |
| PUT    | `/api/tasks/:id` | Marcar tasca com a feta/pending | `{ "done": true }`               |
| DELETE | `/api/tasks/:id` | Esborrar una tasca              | —                                |

---

## Patró MVVM (referència)

El frontend (no inclòs en aquest zip) segueix el patró MVVM amb Vue 3:

* **Model**: `model.js` fa `fetch('/api/tasks')`.
* **ViewModel**: `main.js` exposa `tasks`, `newTitle` i mètodes (`loadTasks()`, `addTask()`, etc.).
* **View**: `index.html` amb bindings de Vue.

---

## Git i commits

Hem realitzat diversos commits marcant fites originals:

1. Estructura de carpetes creada
2. Backend bàsic i ping
3. Model i controlador CRUD
4. Rutes CRUD configurades
5. Proves amb curl
6. ImportData i dades de prova
7. README final i estil

---

**Gràcies!**
Qualsevol dubte, estic a la teva disposició.
