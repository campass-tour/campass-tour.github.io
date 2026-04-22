---
title: System Architecture
sidebar_position: 3
---

import InteractiveArchitectureDiagram from '@site/src/components/mdx/InteractiveArchitectureDiagram';
import ArchitectureCards from '@site/src/components/mdx/ArchitectureCards';
import PivotComparison from '@site/src/components/mdx/PivotComparison';

# Architectural Evolution: From Prototype to Production

To balance rapid user testing with long-term scalability, the development of Campass is split into two strategic phases. This page outlines the architecture for both our initial client-side prototype and our upcoming full-stack production environment.

---

## Phase 1: Client-side Prototype (React/Vite)
**Status:** Completed & Deployed | [Visit Prototype Site →](https://campass-tour.github.io/prototype/)

The prototype architecture was engineered for **zero-latency exploration**. By leveraging GitHub Pages for static hosting and the Browser's LocalStorage for state, we eliminated backend overhead to focus entirely on validating the core "Treasure Hunt" UX and 3D rendering performance.

### 1.1 The Prototype Blueprint
This diagram visualizes the decoupled, client-centric structure of our initial build. Hover over the hotspots to explore how we managed state without a database.

<InteractiveArchitectureDiagram />

### 1.2 Engineering Pillars
The prototype relies on three key technical pillars to achieve an "app-like" experience within a static environment:

<ArchitectureCards />

---

## Phase 2: Fullstack Production (Next.js)
**Status:** Frontend Refactored / Backend in Progress | [Visit Beta Preview →](https://campass-psi.vercel.app/)

We have successfully refactored the entire frontend into the **Next.js App Router** architecture. This transition marks our shift from a local-only prototype to a robust, cloud-connected platform. While the frontend is live, we are currently developing the server-side modules to support global persistence and real-time social features.

### 2.1 The Roadmap to Production
The following table outlines our transition from a stateless prototype to a fully integrated full-stack system. 

<PivotComparison />

| Feature | Phase 1: Prototype (Static) | Phase 2: Next.js (Fullstack) |
| :--- | :--- | :--- |
| **Hosting** | GitHub Pages (Static) | Vercel (App Router) |
| **Data Storage** | LocalStorage (Browser) | PostgreSQL / Vercel KV |
| **Asset Management** | Pre-bundled Static Files | Vercel Blob (Dynamic CDN) |
| **Social / Persistence** | Local Memory Only | Real-time WebSockets / Supabase |

### 2.2 Ready for Scalability
By utilizing **Modular Application Hooks** in the prototype phase, our codebase is already decoupled. Migrating from `localStorage` methods to a `Prisma + PostgreSQL` backend is a streamlined process, requiring minimal changes to our UI components while unlocking multi-device synchronization and global leaderboards.