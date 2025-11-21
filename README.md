# Tracks API

En REST-webbtjänst byggd med **Nest.js** och **MongoDB** för att hantera en musiksamling.  
Stöder full CRUD-funktionalitet (Create, Read, Update, Delete).

---

## Installation och körning lokalt

### 1. Klona repot

```bash
git clone https://github.com/Zeydz/Fullstack_Med_Ramverk-moment2.git
```

### 2. Installera nödvändiga paket

```bash
npm install
```

### 3. Skapa `.env`-fil i root för Databas-URL.

```bash
touch .env
```
Fyll i med databas (**MongoDB**) & port information:

```env
MONGO_URL=mongodb+srv://<username>:<password>@<cluster-url>/musicdb?retryWrites=true&w=majority
PORT=3000
```
### 3. Starta servern i utvecklingsläge

```bash
npm run start:dev
```
Servern körs nu via **localhost** med vald PORT i `.env`:
```
http://localhost:PORT
```
---

## API-endpoints

| Metod | Endpoint       | Beskrivning                  | Body (JSON) |
|-------|----------------|------------------------------|-------------|
| GET   | `/tracks`      | Hämta alla tracks            | –           |
| GET   | `/tracks/:id`  | Hämta en specifik track      | –           |
| POST  | `/tracks`      | Skapa en ny track            | `{ "title": "...", "artist": "...", "yearReleased": 2000, "addedToPlaylist": false, "genre": "..." }` |
| PATCH | `/tracks/:id`  | Uppdatera track              | `{ "title": "...", "artist": "...", "yearReleased": 2000, "addedToPlaylist": false, "genre": "..." }` |
| DELETE| `/tracks/:id`  | Ta bort track                | –           |

---

### Exempel på API-anrop i Thunder Client

#### 1. Skapa en ny track (POST)
- **URL:** `http://localhost:3000/tracks`
- **Method:** POST
- **Headers:**  
  `Content-Type: application/json`
- **Body (JSON):**
```json
{
  "title": "Bohemian Rhapsody",
  "artist": "Queen",
  "yearReleased": 1975,
  "addedToPlaylist": false,
  "genre": "Rock"
}
```

#### 2. Hämta alla tracks (GET)
- **URL:** `http://localhost:3000/tracks`
- **Method:** GET
- **Headers:** inga
- **Body (JSON):** ingen

#### 3. Hämta en track med ID (GET)
- **URL:** `http://localhost:3000/tracks/id`
- **Method:** GET
- **Headers:** inga
- **Body (JSON):** ingen

#### 4. Uppdatera en track (PATCH)
- **URL:** `http://localhost:3000/tracks/id`
- **Method:** GET
- **Headers:**  
  `Content-Type: application/json`
- **Body (JSON):**
```json
{
  "addedToPlaylist": true,
  "genre": "Jazz"
}
```

#### 5. Ta bort en track (DELETE)
- **URL:** `http://localhost:3000/tracks/id`
- **Method:** DELETE
- **Headers:** inga
- **Body (JSON):** ingen

---

### Validering
* **title:** får ej vara tom eller endast mellanslag
* **artist:** får ej vara tom eller endast mellanslag
* **yearReleased:** måste vara ett nummer, minimum 1000
* **addedToPlaylist:** boolean (valfritt)
* **genre:** valfri text (valfritt)

---

Skapad av **Joakim Möller (jomo2306)**
