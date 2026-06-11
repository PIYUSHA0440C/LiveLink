# 🌐 LiveLink - Full-Stack Language Exchange and Communication Platform

LiveLink is a premium full-stack web application designed for language exchange and real-time communication. It provides profile-based partner discovery, native & learning language customization, friend request flows, and real-time chat and WebRTC video calling. 

The application utilizes a decoupled client-server architecture, powered by a React client and an Express/Node.js REST API, with MongoDB for persistence and GetStream for low-latency messaging and video services.

---

## 🚀 Quick Links
*   [Key Features](#-key-features)
*   [Tech Stack](#-tech-stack)
*   [Architecture Diagram](#-architecture-diagram)
*   [Directory Structure](#-directory-structure)
*   [Getting Started](#-getting-started)
*   [Sub-Module Docs](#-sub-module-docs)

---

## ⚡ Key Features

*   **👤 Guided Onboarding**: Users define their profile with native and learning languages, location, bio, and dynamic profile avatars (powered by DiceBear).
*   **🤝 Friend Request Workflow**: Comprehensive connection management ensuring secure, non-duplicate invitation states (`pending`, `accepted`) before chat access is unlocked.
*   **💬 Real-Time Chat**: Direct message channels built using Stream Chat React SDK, leveraging deterministic, sorted channel IDs for stable peer conversation.
*   **📞 WebRTC Video Calling**: Live video rooms powered by Stream Video React SDK, featuring integrated layout controls, video/audio toggles, and screen-sharing interfaces.
*   **🎨 32 Dynamic UI Themes**: Global theme selection utilizing DaisyUI and persisted locally via Zustand state stores.
*   **🔒 Secure JWT Session Control**: Token-based authentication using HTTP-only cookies and secure password hashing via `bcryptjs`.

---

## 🛠️ Tech Stack

| Layer | Technologies Used |
| :--- | :--- |
| **Frontend** | React 19, Vite, React Router 7, TanStack Query, Zustand, Axios, React Hot Toast |
| **Styling & UI** | Tailwind CSS 4, DaisyUI 5, Lucide Icons |
| **Backend** | Node.js, Express, JSON Web Token (JWT), bcryptjs, Cookie Parser, Cors |
| **Database** | MongoDB & Mongoose ODM |
| **Real-time Services**| Stream Chat React SDK, Stream Video React SDK |

---

## 🏗️ Architecture Diagram

```text
                              +-------------------------------+
                              |    FRONTEND (React Client)    |
                              |  +-------------------------+  |
                              |  |  TanStack Query Cache   |  |
                              |  +------------+------------+  |
                              |               |               |
                              |  +------------v------------+  |
                              |  | Stream Chat & Video SDK |  |
                              |  +------------+------------+  |
                              +---------------|---------------+
                                              |
                     HTTP + JWT Cookies       | Socket & WebRTC Connections
                     +------------------------+------------------+
                     |                                           |
                     v                                           v
       +----------------------------+             +----------------------+
       |    BACKEND (Express API)   |             |     EXTERNAL API     |
       |  +----------------------+  |             | (GetStream Services) |
       |  | JWT Middleware Gate  |  |             +----------------------+
       |  +-----------+----------+  |                        ^
       |              |             |                        |
       |  +-----------v----------+  |    Verify & Issue      |
       |  | User/Chat Controllers|--+------------------------+
       |  +-----------+----------+  |    Stream JWT Tokens
       +--------------|-------------+
                      |
                      v
             +------------------+
             |     DATABASE     |
             | (MongoDB Atlas)  |
             +------------------+
```


---

## 📁 Directory Structure

```text
LiveLink/
├── backend/                  # Node.js + Express API
│   ├── src/
│   │   ├── controllers/      # Auth, Chat, and User business logic
│   │   ├── lib/              # Database & Stream clients connection helpers
│   │   ├── middleware/       # JWT Cookie authentication verification
│   │   ├── models/           # Mongoose schemas (User, FriendRequest)
│   │   └── routes/           # Express router endpoints
│   └── package.json
│
├── frontend/                 # React 19 + Vite Client
│   ├── src/
│   │   ├── components/       # Common layouts (Navbar, Sidebar, Theme Selector)
│   │   ├── pages/            # Page Views (Onboarding, Home, Notifications, Chat, Call)
│   │   ├── store/            # Zustand global state store
│   │   └── App.jsx           # App routing and theme wrapper
│   └── package.json
│
└── package.json              # Workspace script controls
```

---

## ⚙️ Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- [MongoDB](https://www.mongodb.com/) (Local server or Atlas cloud instance)
- [GetStream Account](https://getstream.io/) (For real-time service keys)

### Installation & Run

1.  **Install dependencies across workspace projects:**
    ```bash
    npm run build
    ```
2.  **Configure environment variables:**
    *   Create a `.env` file inside `backend/` (Refer to [Backend README](./backend/README.md#key-configuration-env))
    *   Create a `.env` file inside `frontend/` (Refer to [Frontend README](./frontend/README.md#environment-variables))

3.  **Run modules in separate terminal instances:**

    **Start API Backend:**
    ```bash
    cd backend
    npm run dev
    ```

    **Start Web Frontend:**
    ```bash
    cd frontend
    npm run dev
    ```

---

## 📄 Sub-Module Docs

*   **[Backend Documentation](./backend/README.md)**: Details on API endpoints, database schemas, and token authentication middleware.
*   **[Frontend Documentation](./frontend/README.md)**: Details on React routing guards, theme systems, and real-time SDK configuration.
