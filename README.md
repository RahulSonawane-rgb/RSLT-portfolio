# RSLT | Visual Strategy & Production Architecture

> **"We don't just make content. We engineer growth."**

![RSLT Build Status](https://img.shields.io/badge/Build-Production%20Ready-gold?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Vite-black?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-gray?style=for-the-badge)

## 📡 Overview

**RSLT (Result Media)** is a high-performance portfolio and lead-generation platform for a Mumbai-based visual strategy agency. 

This repository houses the frontend architecture, designed to simulate a cinematic experience (Cinematic UI) while maintaining blazing-fast load times (Vite/React). It features a custom "Admin-Free" CMS using local storage logic and a dual-channel notification system via EmailJS.

---

## ⚡ Key Features

### 1. The "Prime" UI System
- **Cinematic Hero Section:** Custom Ken Burns effect with Framer Motion and physics-based light leaks.
- **Dynamic Navbar:** Morphing UI that transitions from a transparent HUD to a floating glass capsule upon scroll.
- **Live Camera Simulation:** Real-time recording timer and "REC" indicators to simulate a camera viewfinder.

### 2. Performance Engineering
- **Video Optimization:** Local asset delivery for zero-buffer playback (bypassing Instagram iframe blocks).
- **Responsive Geometry:** Fluid typography scaling (`clamp()`) ensuring integrity from iPhone SE to 4K Monitors.

### 3. Lead Architecture (EmailJS)
- **Dual-Channel Notification:** - **Admin Channel:** Sends detailed technical brief + WhatsApp direct link to Agency Partners (Rahul & Shubham).
  - **Client Channel:** Instantly dispatches a branded, HTML5 "Welcome Kit" email to the lead.

### 4. Admin Lite
- **Secure Route:** Hidden `/admin` route protected by hardcoded authentication.
- **LocalStorage CMS:** Allows instant updating of portfolio links without code redeployment.

---

## 🛠️ Tech Stack

* **Core:** React 18, TypeScript, Vite
* **Styling:** Tailwind CSS, Glassmorphism
* **Animation:** Framer Motion (Orchestration & Gestures)
* **Backend Services:** EmailJS (Serverless SMTP), React Router DOM

---

## 🚀 Installation & Setup

1.  **Clone the Repository**
    ```bash
    git clone [https://github.com/yourusername/rslt-portfolio.git](https://github.com/yourusername/rslt-portfolio.git)
    cd rslt-portfolio
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Configure Environment**
    Update `src/components/Contact.tsx` with your EmailJS credentials:
    * `SERVICE_ID`
    * `PUBLIC_KEY`
    * `TEMPLATE_ID`

4.  **Run Development Server**
    ```bash
    npm run dev
    ```

---

## 📂 Project Structure

rslt-portfolio/
├── public/              # Static Assets (Videos, Logos)
├── src/
│   ├── components/      # Modular UI Components (Navbar, Hero, Work...)
│   ├── data/            # Static Data / Admin Defaults
│   └── App.tsx          # Main Route Logic
└── index.html           # Entry Point
---

## 📝 License

This project is proprietary to **RSLT Media**. 
Code structure is open-sourced under the [MIT License](LICENSE). 
Brand assets and video content are **Copyright © 2026 RSLT Media**.

---

*Engineered in India.*