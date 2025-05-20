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

Si no feu servir nodemon, podeu substituir npm run dev per:

bash
Copiar
Editar
node app.js


Podeu obrir directament frontend/index.html al navegador, o bé servir-lo amb un servidor estàtic, per exemple:

bash
Copiar
Editar
cd frontend
python3 -m http.server 3000
i obrir http://localhost:3000.

Nota: El frontend fa les peticions a
http://localhost:5000/api/tasks
així que heu d’assegurar-vos que el backend estigui escoltant en el port 5000.

Endpoints de l’API
GET /api/tasks — Llistar totes les tasques

POST /api/tasks — Crear una tasca (enviar { "title": "Text" })

PUT /api/tasks/:id — Actualitzar una tasca (enviar { "done": true })

DELETE /api/tasks/:id — Esborrar una tasca

Patró MVVM
L’aplicació frontend segueix el patró MVVM amb Vue 3:

Model: gestionat a frontend/js/model.js per fer les peticions API.

ViewModel + View: combinats a frontend/js/main.js, exposen dades reactives i mètodes a la plantilla de index.html.

Git i commits
Hem realitzat més de 4 commits durant el desenvolupament, marcant passos clau:

Estructura de carpetes creada

Backend bàsic amb connexió i ping

Model i controlador CRUD

Rutes configurades

Proves amb curl passades

Frontend MVVM amb Vue

Estils CSS aplicats

README completat

Versió final i entrega

