# 📝 MERN To-Do App

A full-stack **To-Do List** application built using the **MERN stack**:  
**MongoDB**, **Express.js**, **React**, and **Node.js**.

This app allows users to add, view, and delete tasks in a clean, responsive UI, with real-time interaction with a MongoDB database.

---

## 🚀 Features

- ✅ Add new to-do items
- 📋 View existing to-do items
- ❌ Delete items instantly
- 🔄 Real-time UI updates using Axios
- ☁️ MongoDB Atlas for cloud-based database

---

## 📦 Tech Stack-MERN
## 📁 Project Structure
todo-mern-app/ ├── client/ # React frontend │ ├── src/ │ │ ├── App.js │ │ └── App.css │ └── package.json ├── server/ # Node + Express backend │ ├── index.js │ └── .env ├── .gitignore └──


---

## 🛠️ Local Setup Instructions

### 1. Clone the repository
----in terminal 
git clone https://github.com/YOUR_USERNAME/TodoTask.git
cd TodoTask


### 2. Backend Setup
--in terminal
cd server
npm install
Create a .env file in server/ with the following:

MONGO_URI=your_mongodb_connection_string
Run backend server: in terminal
node index.js

### 3. Frontend Setup
in terminal
cd ../client
npm install
npm start


App will run on http://localhost:3000
Backend runs on http://localhost:5000
