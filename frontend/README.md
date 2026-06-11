# 🎨 LiveLink Frontend - React & Vite Application Client

The frontend client of LiveLink provides an interactive, responsive web application for language learning, profile construction, recommendation filters, and real-time communications.

---

## 📖 Table of Contents
1. [Tech Stack and UI Frameworks](#-tech-stack-and-ui-frameworks)
2. [State Coordination Model](#-state-coordination-model)
3. [Configuration and Keys](#-configuration-and-keys)
4. [Client Routing and Navigation](#-client-routing-and-navigation)
5. [Directory Layout](#-directory-layout)
6. [Operational Details of Pages](#-operational-details-of-pages)
7. [Getting Started and Scripts](#-getting-started-and-scripts)

---

## 🛠️ Tech Stack and UI Frameworks

*   **Core Framework**: React 19 & Vite 7 (ES Modules)
*   **Routing Utility**: React Router v7 (`react-router-dom`)
*   **Styling System**: Tailwind CSS v4 & DaisyUI v5 (providing 32 switchable themes)
*   **Client State**: Zustand (stores global selected theme configurations)
*   **Server Cache State**: TanStack React Query (v5) & Axios (client API coordinator)
*   **Real-time Communications**: Stream Chat React SDK & Stream Video React SDK
*   **Aesthetics Utility**: Lucide React (Icons) & React Hot Toast (Success/Error feedback popups)

---

## 🔄 State Coordination Model

```text
                                  ┌────────────────────────┐
                                  │   Zustand Theme Store  │──(Persists to LocalStorage)
                                  └───────────┬────────────┘
                                              │ Theme Selection
                                              ▼
 ┌──────────────────────┐        ┌────────────────────────┐        ┌────────────────────────┐
 │    TanStack Query    │◄───────┤    React Application   ├───────►│  Stream Chat / Video   │
 │ (Server Cache Sync)  │  API   │      (Main View)       │ Socket │  (WebSocket SDK Rooms) │
 └──────────────────────┘  Req   └────────────────────────┘  Conn  └────────────────────────┘
```

*   **Zustand**: Handles visual layout customization (persisting selected theme configurations automatically).
*   **TanStack Query**: Syncs authentication, onboarding records, lists of friends, and recommendation indexes, and triggers cache refetches on connection mutations.
*   **Stream Chat & Video SDKs**: Configures active chat layouts, message listeners, local camera/audio captures, and webRTC socket streaming.

---

## ⚙️ Configuration and Keys

Create a `.env` configuration file in the root of the `/frontend` directory:

```env
VITE_STREAM_API_KEY=your_getstream_app_api_key
```

*Note: Frontend API calls are routed through Vite proxy settings (configured in `vite.config.js`) pointing to the local backend address `http://localhost:5001` to prevent CORS issues in development.*

---

## 🚦 Client Routing and Navigation

Routes are declared in [App.jsx](file:///c:/Users/piyus/Desktop/LiveLink/frontend/src/App.jsx) and wrapped in Layout and Route Guard components:

| Route Path | Associated Page Component | Layout Wrappers | Access Guards & Logic |
| :--- | :--- | :--- | :--- |
| `/` | `LandingPage` / `HomePage` | `Layout` (with sidebar) | Shows Splash/Landing page to visitors. Redirects logged-in users to `/onboarding` (if profile is incomplete) or `HomePage` (if profile is setup). |
| `/signup` | `SignUpPage` | None | Registration form page. Redirects to `/` if user is already authenticated. |
| `/login` | `LoginPage` | None | Secure login page. Redirects to `/` if user is already authenticated. |
| `/onboarding`| `OnBoardingPage` | None | Setup profile inputs. Accessible only by authenticated but non-onboarded users. |
| `/friends` | `FriendsPage` | `Layout` (with sidebar) | Shows list of user's active friends. Requires authentication & onboarding. |
| `/notifications`| `NotificationsPage`| `Layout` (with sidebar) | Shows pending incoming friend invites. Requires authentication & onboarding. |
| `/chat/:id` | `ChatPage` | `Layout` (no sidebar) | Direct message channel interface. Requires authentication & onboarding. |
| `/call/:id` | `CallPage` | None (Full Screen UI) | Live WebRTC video session page. Requires authentication & onboarding. |

---

## 📁 Directory Layout

```directory
frontend/src/
├── components/
│   ├── CallButton.jsx           # Button trigger to initiate video call room
│   ├── ChatLoader.jsx           # Spinner layout for loading conversation states
│   ├── FriendCard.jsx           # Renders connection details & chat/call links
│   ├── GlobalCursor.jsx         # Custom interactive visual tracker
│   ├── Layout.jsx               # Common page wrapper incorporating Sidebar / Navbar
│   ├── Navbar.jsx               # Persistent header with theme dropdown selector
│   ├── NoFriendsFound.jsx       # Empty state layout placeholder
│   ├── NoNotificationsFound.jsx # Empty state notifications placeholder
│   ├── PageLoader.jsx           # Global initial authentication load screen
│   ├── Sidebar.jsx              # Navigation menu for authenticated users
│   └── ThemeSelector.jsx        # Dropdown grid with 32 DaisyUI themes
├── pages/
│   ├── CallPage.jsx             # Stream Video calling screen with active layouts
│   ├── ChatPage.jsx             # Stream Chat window layout
│   ├── FriendsPage.jsx          # Social list of active contacts
│   ├── HomePage.jsx             # Discover dashboard (recommends learners & filters)
│   ├── LandingPage.jsx          # Interactive splash marketing introduction screen
│   ├── LoginPage.jsx            # Sign-in forms & cookie initialization
│   ├── NotificationsPage.jsx    # Action list for pending requests
│   ├── OnBoardingPage.jsx       # Mandatory onboarding fields setup
│   └── SignUpPage.jsx           # Registration forms & automatic DiceBear link
├── store/
│   └── useThemeStore.js         # Zustand configuration storage for user theme
├── App.jsx                      # Main routing & state setup
└── main.jsx                     # DOM rendering entry
```

---

## 📝 Operational Details of Pages

### 1. Discovery Dashboard (`HomePage`)
- Loads all available platform users from `/api/users`.
- Integrates local client-side filters for both **Native Language** and **Learning Language**.
- Monitors outgoing request caches using TanStack Query, disabling the "Send Friend Request" action on user cards where a request is already pending.

### 2. Onboarding Screen (`OnBoardingPage`)
- Renders input selectors for name, location, native language, learning language, and bio description.
- Submits data to `/api/auth/onboarding`, updating user status in MongoDB, and triggers routing refetches to unlock access to the main dashboard.

### 3. Dynamic Theme System (`ThemeSelector`)
- Injects `data-theme` values into the root element matching selections from **32 DaisyUI themes** (e.g., *light, dark, cupcake, synthwave, retro, cyberunk, valentine, aqua, dracula, forest, luxury, coffee, winter*, etc.).
- Zustand middleware syncs selections to `localStorage`, preventing theme resets on page refresh.

### 4. Communication channels (`ChatPage` & `CallPage`)
- **Chat**: Combines user IDs, sorts them alphabetically, and hashes them to construct a unique, deterministic Stream Channel ID (`livelink_user1_user2`). This ensures both users connect to the same historic socket feed.
- **Video Call**: Mounts the Stream Video SDK container. Pulls call tokens and channels from backend endpoints and renders local cameras, shared screens, audio indicators, and grid participant slots natively.

---

## 🚀 Getting Started and Scripts

1.  **Install dependencies:**
    ```bash
    npm install
    ```
2.  **Start development server:**
    ```bash
    npm run dev
    ```
3.  **Build production package:**
    ```bash
    npm run build
    ```
4.  **Preview production build locally:**
    ```bash
    npm run preview
    ```
5.  **Run lint checker:**
    ```bash
    npm run lint
    ```
