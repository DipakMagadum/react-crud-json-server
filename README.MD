# User CRUD App

This project is a simple CRUD (Create, Read, Update, Delete) application built using React.
For the backend, I’ve used **json-server** to simulate a real API.

The main goal of this project is to understand how frontend and backend interact, especially how data is fetched, displayed, and modified.

---

##  What this project does

* Fetches user data from a mock API
* Displays the data in a clean UI
* Allows adding new users
* Supports updating existing user details
* Enables deleting users

---

##  Tech Stack

* React (Hooks: useState, useEffect)
* json-server (Mock API)
* Tailwind CSS (for styling)

---

##  How it works

The project uses `json-server` to create a local API using a `db.json` file.
React then fetches this data using `fetch()` and displays it on the UI.

Whenever a user is added, updated, or deleted, the changes are reflected in the JSON file, just like a real backend.

---

##  Setup Instructions

1. Clone the repository

```bash
git clone <your-repo-link>
cd user-crud-app
```

2. Install dependencies

```bash
npm install
```

3. Start json-server

```bash
npx json-server --watch db.json --port 3000
```

4. Run React app

```bash
npm run dev
```

---

##  Note

This project is part of my React learning journey.
I’ll continue improving it by adding better UI, validations, and more features.

---

##  Future Improvements

* Form validation
* Better UI/UX
* Search and filter users
* Pagination

---

##  Final Thought

This project helped me understand how CRUD operations work in real applications and how frontend communicates with an API.
