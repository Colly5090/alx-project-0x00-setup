# 🚀 React Genesis: Mastering Next.js Setup

This project mimics core features of Airbnb’s UI, including property listings with images, ratings, and interactive components — all built using **Next.js**, **TypeScript**, **Tailwind CSS**, and best practices in modern front-end development.

---

## 🧰 Requirements

- Node.js (v16 or later)
- npm or yarn
- Visual Studio Code (or any preferred IDE)
- Next.js v13+
- TypeScript
- Tailwind CSS
- ESLint

---

## ⚙️ Scaffolding a New Project

Run the setup command:

```bash
npx create-next-app@latest alx-project-0x00 --typescript

```

Select Options During Setup

- ✅ ESLint → Yes

- ✅ Tailwind CSS → Yes

- ✅ Import alias (@/\*) → Yes

- ❌ Use /src directory → No

- ❌ Use App Router → No

## 📁 Directory Structure

alx-project-0x00/
├── components/
│ ├── Card.tsx
│ └── Pill.tsx
│
├── interfaces/
│ └── index.ts
│
├── pages/
│ ├── index.tsx
│ ├── landing.tsx
│ └── about.tsx
│
├── public/
│ └── assets/
│ └── images/
│ ├── house.png
│ └── star.png

## 🧭 Basic Routing

- pages/index.tsx → Home page

- pages/landing.tsx → Listing page

- pages/about.tsx → About page

- Each file in the pages folder corresponds to a route in the browser.
