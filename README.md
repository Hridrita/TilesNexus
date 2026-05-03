# TilesNexus 🏠

A tile browsing web application built with **Next.js 15**, **Better Auth**, and a **JSON Server** mock API deployed on Render. Browse premium tile collections, filter by category, view detailed product pages, and manage your user profile — with Google OAuth and email/password authentication.

---

## 🌐 Live Demo

> **Frontend:** https://tiles-nexus.vercel.app/
> **API Server:** https://tiles-nexus-server.onrender.com

---

## 📁 Project Structure

This project is split into two parts:

| Part | Description |
|------|-------------|
| `TilesNexus` (this) | Next.js 15 frontend + auth |
| `TilesNexus-Server` | JSON Server mock API deployed on Render |

---

## ✨ Features

### 🔐 Authentication (Better Auth)
- Email & Password sign up / login
- **Google OAuth** social login
- Session-based auth with `useSession` hook
- Protected routes via middleware (`/MyProfile`, `/Tiles/:id`)
- User profile update (name + avatar URL)
- Logout functionality from navbar

### 🏠 Home Page
- Full-width hero banner with animated text (Animate.css)
- **Live Tiles Marquee** — scrolling ticker showing all tile names and descriptions using `react-fast-marquee`
- **Featured Section** — displays trending tiles fetched from the `/trending-tiles` API endpoint in a responsive 4-column grid

### 📋 All Tiles Page
- Fetches all tiles from the JSON Server API
- **Real-time search** — filter tiles by name or category using HeroUI's `SearchField` component
- "No results" fallback state
- Responsive card list layout

### 🔍 Tile Detail Page (`/Tiles/[id]`)
- Dynamic route fetching single tile by ID
- Shows: image, title, description, category, dimensions, material, price
- **In Stock / Out of Stock** badge (green/red)
- Back button to All Tiles

### 👤 My Profile Page (Protected)
- Shows logged-in user's avatar, name, and email
- Edit name and profile image URL via form (`react-hook-form`)
- Updates user via `authClient.updateUser()`
- Toast notifications on success/error

### 🗂️ Navigation
- Sticky responsive navbar with mobile hamburger menu
- Active link highlighting via `NavLink` component
- Shows user avatar + name when logged in
- Login / Logout button

### 🦶 Footer
- Brand info + social links (Facebook, Twitter, Instagram, LinkedIn)
- Quick navigation links
- Contact info (address, phone, email)
- Newsletter email subscription input

---

## 🛠️ Tech Stack

### Frontend
| Tech | Purpose |
|------|---------|
| Next.js 15 (App Router) | Framework |
| React 19 | UI |
| Tailwind CSS + DaisyUI | Styling |
| Better Auth | Authentication |
| MongoDB (via Better Auth adapter) | User data storage |
| HeroUI | Search field component |
| react-hook-form | Form handling |
| react-toastify | Toast notifications |
| react-fast-marquee | Scrolling ticker |
| Animate.css | CSS animations |
| react-icons | Icon library |

### Mock API Server (TilesNexus-Server)
| Tech | Purpose |
|------|---------|
| json-server v1 beta | Auto-generated REST API from flat JSON |
| db.json | Data store |
| Render | Deployment |

---

## 🗃️ API Endpoints

Base URL: `https://tiles-nexus-server.onrender.com`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/tiles` | Get all tiles |
| GET | `/tiles/:id` | Get single tile by ID |
| GET | `/trending-tiles` | Get featured/trending tiles |

### Tile Data Shape

```json
{
  "id": "tile_001",
  "title": "Ceramic Blue Tile",
  "description": "Premium ceramic tile with glossy blue glaze finish.",
  "image": "https://...",
  "category": "Ceramic",
  "price": 45.99,
  "currency": "USD",
  "dimensions": "60x60 cm",
  "material": "Ceramic",
  "inStock": true
}
```

---

## 🔒 Route Protection

Middleware (`proxy.js`) protects:
- `/MyProfile` — requires active session
- `/Tiles/:path*` — requires active session

Unauthenticated users are redirected to `/login`.

---

## ⚙️ Environment Variables

Create a `.env.local` file in the project root:

```env
# MongoDB connection
MONGO_URI=your_mongodb_connection_string

# Better Auth
BETTER_AUTH_SECRET=your_secret_key
BETTER_AUTH_URL=http://localhost:3000

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/TilesNexus.git
cd TilesNexus
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create `.env.local` and fill in the values from the section above.

### 4. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## 🖥️ Running the JSON Server Locally

```bash
git clone https://github.com/your-username/TilesNexus-Server.git
cd TilesNexus-Server
npm install
npm run server
```

Server runs on `http://localhost:5000`.

> Update `src/lib/data.js` fetch URLs to `http://localhost:5000` for local development.

---

## 📦 Key Scripts

| Script | Command |
|--------|---------|
| Dev server | `npm run dev` |
| Production build | `npm run build` |
| Start production | `npm start` |

---

## 📸 Pages Overview

```
/                   → Home (banner + marquee + featured tiles)
/AllTiles           → Browse & search all tiles (protected)
/Tiles/[id]         → Tile detail page (protected)
/MyProfile          → User profile & edit (protected)
/login              → Login page
/register           → Register page
```

---

