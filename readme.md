Calendly Clone – Full Stack Scheduling Platform
A minimalist, high-performance scheduling application inspired by Calendly. This platform allows professionals to automate their meeting bookings through custom event types and real-time availability management.

🛠 Tech Stack
Frontend: React.js (Vite).

Backend: Node.js + Express.js.

Database: MySQL.

Communication: Axios for API requests.

Routing: React Router for navigation and dynamic public booking slugs.

✨ Features
Event Type Creation: Define custom meeting durations (e.g., 15-min, 30-min) with unique URLs.

Availability Management: An interactive dashboard to set and update weekly working hours.

Public Booking Links: Shareable links that allow clients to view available slots and book meetings.

Double Booking Prevention: Real-time logic to ensure time slots are locked once booked.

Meeting Management: A centralized view of all upcoming and past scheduled events.

⚙️ Setup & Installation
1. Database Configuration
Create a MySQL database named calendly_clone.

Initialize tables for users, event_types, availability, and bookings.

2. Backend Setup (/server)
Navigate to the server directory: cd server.

Install dependencies: npm install.

Create a .env file with your database credentials (DB_HOST, DB_USER, DB_PASS, DB_NAME).

Important: Ensure const app = express() is initialized before any app.use() calls to avoid initialization errors.

Run the server: npm run dev.

Note: If permissions are denied for nodemon, use npx nodemon src/app.js.

3. Frontend Setup (/client)
Navigate to the client directory: cd client.

Install dependencies: npm install.

Note: If you encounter vite: not found, ensure npm install has completed successfully to populate the node_modules folder.

Run the frontend: npm run dev.

📂 Root Folder Structure
calendly-clone/
│
├── client/                 # React Frontend
├── server/                 # Express Backend
├── README.md
└── .gitignore

📝 Assumptions
User Context: The system is currently configured for a single-user demo.

Notifications: Email and SMS notifications are skipped in the current version.

Storage: All scheduling data is persisted in a local MySQL instance.