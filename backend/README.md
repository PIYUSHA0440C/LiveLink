# 🖥️ LiveLink Backend - Node.js & Express RESTful API

The backend module of LiveLink serves as a secure, stateless API server built using **Node.js**, **Express**, and **Mongoose**. It acts as the authority for user registration, onboarding profile updates, friend connection state management, and real-time chat/video token issuance.

---

## 📖 Table of Contents
1. [Tech Stack and Architecture](#-tech-stack-and-architecture)
2. [Configuration Setup (`.env`)](#-configuration-setup-env)
3. [Database Models and Schemas](#-database-models-and-schemas)
4. [Authentication and Request Middleware](#-authentication-and-request-middleware)
5. [API Endpoints Reference](#-api-endpoints-reference)
6. [Getting Started and Script Run](#-getting-started-and-script-run)

---

## 🛠️ Tech Stack and Architecture

*   **Runtime Environment**: Node.js (ES Modules `"type": "module"`)
*   **Web Framework**: Express (handling routes, cookies, and CORS)
*   **Database Integration**: MongoDB Atlas with Mongoose ODM
*   **Security Suite**: `bcryptjs` (for secure salt hashing) & `jsonwebtoken` (session encryption)
*   **Real-time integration**: `stream-chat` Node.js library for sync actions

---

## ⚙️ Configuration Setup (`.env`)

Create a local configuration file named `.env` in the `/backend` directory:

```env
PORT=5001
MONGO_URI=mongodb+srv://<db_user>:<db_pass>@<cluster_uri>/livelink_db?retryWrites=true&w=majority
STREAM_API_KEY=your_getstream_api_key
STREAM_API_SECRET=your_getstream_api_secret
JWT_SECRET_KEY=your_custom_jwt_secret_key_base64_encoded
NODE_ENV=development
```

---

## 🗄️ Database Models and Schemas

### 1. User Model ([User.js](file:///c:/Users/piyus/Desktop/LiveLink/backend/src/models/User.js))
Stores user identity, settings, onboarding state, and reference links to friends:

```json
{
  "fullName": { "type": "String", "required": true },
  "email": { "type": "String", "required": true, "unique": true },
  "password": { "type": "String", "required": true, "minlength": 6 },
  "bio": { "type": "String", "default": "" },
  "profilePic": { "type": "String", "default": "" },
  "nativeLanguage": { "type": "String", "default": "" },
  "learningLanguage": { "type": "String", "default": "" },
  "location": { "type": "String", "default": "" },
  "isOnboarded": { "type": "Boolean", "default": false },
  "friends": [{ "type": "ObjectId", "ref": "User" }]
}
```

### 2. FriendRequest Model ([FriendRequest.js](file:///c:/Users/piyus/Desktop/LiveLink/backend/src/models/FriendRequest.js))
Tracks user social connections lifecycle states (`pending`, `accepted`):

```json
{
  "sender": { "type": "ObjectId", "ref": "User", "required": true },
  "recipient": { "type": "ObjectId", "ref": "User", "required": true },
  "status": { "type": "String", "enum": ["pending", "accepted"], "default": "pending" },
  "createdAt": { "type": "Date", "default": "Date.now" },
  "updatedAt": { "type": "Date", "default": "Date.now" }
}
```

---

## 🔒 Authentication and Request Middleware

### JWT Verification Flow ([auth.middleware.js](file:///c:/Users/piyus/Desktop/LiveLink/backend/src/middleware/auth.middleware.js))

The route protection logic validates token authenticity via a custom middleware handler:

```text
  Client                     Middleware                    Database                 Endpoint
    |                            |                            |                        |
    |----(1) Request API-------->|                            |                        |
    |    with 'jwt' Cookie       |                            |                        |
    |                            |--[2] Check Cookie 'jwt'    |                        |
    |                            |    |                       |                        |
    |                            |    +-- Missing? ---------> | Return 401 Unauthorized|
    |                            |    |                       |                        |
    |                            |    +-- Found?              |                        |
    |                            |         |                  |                        |
    |                            |         v                  |                        |
    |                            |      Verify JWT Secret     |                        |
    |                            |      |                     |                        |
    |                            |      +-- Invalid? -------> | Return 401 Unauthorized|
    |                            |      |                     |                        |
    |                            |      +-- Valid?            |                        |
    |                            |           v                |                        |
    |                            |--[3] Find User by ID------>|                        |
    |                            |    (select -password)      |                        |
    |                            |<--[4] Returns User Object--|                        |
    |                            |                            |                        |
    |                            |--[5] Attach User Object    |                        |
    |                            |    to req.user             |                        |
    |                            |                            |                        |
    |                            |----(6) next()-------------------------------------->| Process Request
    v                            v                            v                        v
```

---

## 🔌 API Endpoints Reference

All API routing resides under `/api`. Below is the detailed breakdown:

### 🔑 Authentication Routes (`/api/auth`)

*   **`POST /signup`**
    *   **Payload**: `{ "fullName": "Jane Doe", "email": "jane@example.com", "password": "securepassword" }`
    *   **Description**: Registers new user, generates a random avatar link via DiceBear API, connects/upserts the profile records directly into GetStream Chat database, signs a JWT session cookie (`jwt`), and returns `201 Created` with user JSON.
*   **`POST /login`**
    *   **Payload**: `{ "email": "jane@example.com", "password": "securepassword" }`
    *   **Description**: Validates email presence, hashes and checks password with bcrypt, signs and issues a secure `jwt` session cookie expiring in 7 days, and returns `200 OK`.
*   **`POST /logout`**
    *   **Description**: Clears the client-side session cookie `jwt` and returns `200 OK`.
*   **`PUT /onboarding`** (Auth required)
    *   **Payload**: `{ "fullName": "Jane Doe", "bio": "Hello!", "nativeLanguage": "English", "learningLanguage": "Spanish", "location": "USA" }`
    *   **Description**: Configures onboarding details and sets `isOnboarded: true`.
*   **`GET /me`** (Auth required)
    *   **Description**: Validates user token, reads current details, and returns user details.

### 👥 User Relationship Routes (`/api/users`)

*   **`GET /`** (Auth required)
    *   **Description**: Retrieves recommended profiles. Returns users where user is NOT the current logged-in user, is already onboarded, and is not current friends.
*   **`GET /friends`** (Auth required)
    *   **Description**: Retrieves array list of User documents corresponding to current user's `friends` field.
*   **`POST /friend-request/:id`** (Auth required)
    *   **Description**: Creates a new `FriendRequest` with status `pending`. Checks for duplicates and self-targeting.
*   **`POST /friend-request/:id/accept`** (Auth required)
    *   **Description**: Accepts target friend request. Updates request status to `accepted` and updates both users' `friends` lists.
*   **`GET /friend-request`** (Auth required)
    *   **Description**: Retrieves all pending requests sent to the user.
*   **`GET /outgoing-friend-requests`** (Auth required)
    *   **Description**: Retrieves active pending requests sent by the current user.

### 💬 Chat Room Tokens (`/api/chat`)

*   **`GET /token`** (Auth required)
    *   **Description**: Generates an encrypted credentials authorization token via the GetStream Node client using the client user ID. Essential for client-side Stream SDK logins.

---

## 🚀 Getting Started and Script Run

1.  **Install local dependencies:**
    ```bash
    npm install
    ```
2.  **Run in development reload mode (using `nodemon`):**
    ```bash
    npm run dev
    ```
3.  **Run in production node environment:**
    ```bash
    npm start
    ```
