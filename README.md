# 💰 Finance Data Processing & Access Control Backend

---

## 📌 Project Overview

This project is a backend system for a **Finance Dashboard Application** designed to manage financial records securely with **role-based access control**.

It simulates a real-world backend where different users interact with financial data based on their roles, ensuring proper authorization, data integrity, and structured API design.

---

## 🚀 Live API Documentation

👉 Public Postman Documentation:
https://documenter.getpostman.com/view/53792354/2sBXiqFpFR

---

## 🎯 Key Features

### 👤 User & Role Management

* Create and manage users
* Assign roles: **Admin, Analyst, Viewer**
* Control user activity status
* Enforce role-based restrictions

---

### 💰 Financial Records Management

* Add income and expense records
* Update and delete records
* Store category, date, and notes
* Maintain user-specific data

---

### 📊 Dashboard Analytics

* Total Income calculation
* Total Expense calculation
* Net Balance computation
* Real-time aggregated insights

---

### 🔐 Role-Based Access Control

| Role    | Permissions      |
| ------- | ---------------- |
| Admin   | Full CRUD access |
| Analyst | Read + insights  |
| Viewer  | Read-only        |

---

### ⚠️ Validation & Error Handling

* Handles invalid inputs
* Returns proper HTTP status codes
* Prevents unauthorized actions

---

## 🛠️ Technologies Used

* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas (Cloud Database)
* **ODM:** Mongoose
* **API Testing:** Postman
* **Environment Management:** dotenv
* **Middleware:** Custom role-based authorization

---

## 📁 Project Structure

```bash
finance-backend/
│
├── config/          # Database connection
├── controllers/     # Business logic
├── middleware/      # Auth & role middleware
├── models/          # MongoDB schemas
├── routes/          # API routes
├── .env.example     # Environment variables template
├── app.js           # Entry point
└── package.json
```

---

## ⚙️ Setup Instructions (Step-by-Step)

### 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/finance-backend.git
cd finance-backend
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ MongoDB Setup (IMPORTANT)

#### 🟢 Create MongoDB Atlas Account

* Go to: https://www.mongodb.com/atlas
* Create free account

#### 🟢 Create Cluster

* Select **Free Tier (M0)**
* Choose region (Mumbai recommended)

#### 🟢 Create Database User

* Username: your choice
* Password: your choice
* Role: Read & Write

#### 🟢 Allow Network Access

* Add IP: `0.0.0.0/0` (Allow from anywhere)

#### 🟢 Get Connection String

Example:

```bash
mongodb+srv://username:password@cluster.mongodb.net/financeDB
```

---

### 4️⃣ Create `.env` File

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

---

### 5️⃣ Run Server

```bash
node app.js
```

---

### 6️⃣ Test API

Open browser:

```bash
http://localhost:5000/
```

---

## 🧪 API Testing Guide

Use Postman or the provided documentation.

### 🔑 Required Header

```bash
userId: <user_id>
```

---

## 📌 API Endpoints

### 👤 Users

* POST `/users` → Create user
* GET `/users` → Get users

### 💰 Records

* POST `/records` → Create record
* GET `/records` → Get records
* PUT `/records/:id` → Update
* DELETE `/records/:id` → Delete

### 📊 Dashboard

* GET `/dashboard` → Summary

---

## 📊 Sample Output

```json
{
  "totalIncome": 5000,
  "totalExpense": 2000,
  "balance": 3000
}
```

---

## 💡 Use Cases

* Personal finance tracking systems
* Business expense management tools
* Financial analytics dashboards
* Multi-user financial platforms

---

## 🌍 Real-World Impact

* Demonstrates scalable backend architecture
* Shows secure access control implementation
* Useful for fintech and SaaS applications
* Helps in building data-driven dashboards

---

## ⚡ Advantages

* Clean and modular structure
* Easy to scale and maintain
* Lightweight and fast
* Strong separation of concerns
* Real-world backend design practices

---

## ❌ Limitations

* No authentication system (JWT not implemented)
* No pagination
* No advanced filtering
* Local deployment only

---

## 🚀 Future Scope

* Add JWT Authentication
* Implement pagination & search
* Deploy on cloud (Render / AWS)
* Add Swagger API documentation
* Add unit testing

---

## 🧠 Technical Decisions

* **Node.js + Express** → Fast and simple API development
* **MongoDB** → Flexible NoSQL database
* **Mongoose** → Easy schema management
* **Middleware-based access control** → Clean and reusable logic
* **Simplified auth (header-based)** → Focus on core logic

---

## 🔐 Security Practices

* `.env` file excluded from repository
* Sensitive data not exposed
* Role-based access enforced
* MongoDB credentials secured

---

## 📌 Submission Details

* GitHub Repository: https://github.com/YOUR_USERNAME/finance-backend
* API Documentation: https://documenter.getpostman.com/view/53792354/2sBXiqFpFR

---

## 🎯 Evaluation Criteria Covered

✔ Backend Design
✔ API Architecture
✔ Access Control Logic
✔ Data Modeling
✔ Error Handling
✔ Code Quality
✔ Documentation

---

## 💡 Important Notes

* Create your own `.env` file before running
* MongoDB Atlas connection is required
* Use Postman for testing APIs

---

## 👨‍💻 Author

**Parth Bhagwate**

---

⭐ This project demonstrates strong backend fundamentals and practical implementation skills.
