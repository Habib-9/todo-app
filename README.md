# todo-app

## Descripció

To‑Do List amb MEVN (MongoDB, Express, Vue, Node.js).  
Una aplicació bàsica per gestionar tasques amb backend REST i frontend amb Vue.js usant el patró MVVM.

---

## Estructura de carpetes

todo-app/
├─ backend/
│ ├─ config/
│ │ └─ db.js
│ ├─ controllers/
│ │ └─ taskController.js
│ ├─ models/
│ │ └─ Task.js
│ ├─ routes/
│ │ └─ tasks.js
│ ├─ .env
│ ├─ app.js
│ └─ package.json
├─ frontend/
│ ├─ css/
│ │ └─ styles.css
│ ├─ js/
│ │ ├─ model.js
│ │ ├─ view.js
│ │ ├─ viewmodel.js
│ │ └─ main.js
│ └─ index.html
├─ README.md
└─ .gitignore


---

## Instal·lació i execució

### Backend

```bash
cd backend
npm install
npm run dev

Frontend
Obre frontend/index.html al navegador.

---

Endpoints de l’API
GET /api/tasks — Llistar totes les tasques

POST /api/tasks — Crear una tasca

PUT /api/tasks/:id — Actualitzar tasca

DELETE /api/tasks/:id — Esborrar tasca

---

Patró MVVM
L’aplicació frontend segueix el patró MVVM amb Vue 3:

Model: gestionat a js/model.js per fer les peticions API.

ViewModel: a js/viewmodel.js exposa dades i mètodes reactivament a Vue.

View: la part visual està a index.html i js/view.js, gestionant la interacció amb DOM.


### Paso 4: Guardar y salir

- En nano: presiona `Ctrl + O` para guardar y luego `Ctrl + X` para salir.

### Paso 5: Añadir, hacer commit y subir los cambios a GitHub

```bash
git add README.md
git commit -m "README completat"
git push origin main
