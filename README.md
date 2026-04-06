# 💰 Finance Data Processing & Access Control Backend

## 📌 Project Overview

This project is a backend system for a **Finance Dashboard Application**.
It allows users to manage financial records (income & expenses) with **role-based access control**.

The system supports:

* User management with roles
* Financial records CRUD operations
* Dashboard analytics (income, expense, balance)
* Secure backend logic

---

## 🚀 Features Implemented

* ✅ **User and Role Management**

  * Admin, Analyst, Viewer roles
  * Role-based permissions

* ✅ **Financial Records CRUD**

  * Create, Read, Update, Delete records

* ✅ **Record Filtering**

  * (Basic filtering supported)

* ✅ **Dashboard Summary APIs**

  * Total Income
  * Total Expense
  * Net Balance

* ✅ **Role-Based Access Control**

  * Admin → Full access
  * Analyst → Read + insights
  * Viewer → Read-only

* ✅ **Input Validation & Error Handling**

* ✅ **Database Integration**

  * MongoDB (Atlas)

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB Atlas
* **API Testing:** Postman

---

## 📁 Project Structure

```
finance-backend/
│
├── config/          # Database connection
├── controllers/     # Business logic
├── middleware/      # Auth & role checks
├── models/          # Database schemas
├── routes/          # API routes
├── .env.example     # Environment variables sample
├── app.js           # Main server file
└── package.json
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the Repository

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

### 3️⃣ Create `.env` File

Create a file named `.env` in root folder:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

👉 Use your MongoDB Atlas connection string

---

### 4️⃣ Run the Server

```bash
node app.js
```

---

### 5️⃣ Open in Browser

```
http://localhost:5000/
```

You should see:

```
API Running
```

---

## 🧪 API Testing (Postman)

Use Postman to test APIs.

### 🔑 Important Header

For protected routes, add:

```
userId: <your_user_id>
```

---

### 📌 Main APIs

#### 👤 User APIs

* POST `/users` → Create user
* GET `/users` → Get all users

#### 💰 Records APIs

* POST `/records` → Create record
* GET `/records` → Get records
* PUT `/records/:id` → Update record
* DELETE `/records/:id` → Delete record

#### 📊 Dashboard API

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

## 🔐 Access Control Logic

| Role    | Permissions     |
| ------- | --------------- |
| Admin   | Full access     |
| Analyst | Read + insights |
| Viewer  | Read only       |

---

## ⚠️ Important Notes

* `.env` file is not included for security reasons
* You must create your own MongoDB connection
* Role-based access is implemented via middleware
* Authentication is simplified (header-based)

---

## ⚡ Advantages

* Simple and clean architecture
* Easy to understand and extend
* Role-based security implemented
* Modular code structure
* Real-world backend concepts

---

## ❌ Limitations

* No authentication (login/signup not implemented)
* No pagination
* Basic validation only
* No deployment (local server)

---

## 🚀 Future Improvements

* Add JWT Authentication
* Add pagination & filtering
* Deploy API (Render / AWS)
* Add Swagger documentation
* Improve validation

---

## 🧠 Technical Decisions

* Used **Node.js + Express** for simplicity and speed
* Used **MongoDB** for flexible schema
* Used **middleware for role-based access control**
* Simplified authentication to focus on backend logic

---

## 📌 Submission Details

* GitHub Repository: (add your link)
* API Documentation: (Postman public link)

---

## 🎯 Evaluation Criteria Covered

* ✔ Backend Design
* ✔ API Structure
* ✔ Role-Based Access
* ✔ Data Modeling
* ✔ Error Handling
* ✔ Code Quality
* ✔ Documentation

---

## 💡 Final Note

This project focuses on demonstrating **backend engineering fundamentals**, including:

* API design
* Data handling
* Access control
* Clean code structure

---

## 👨‍💻 Author

**Parth Bhagwate**

---

⭐ If you like this project, feel free to star the repository!
