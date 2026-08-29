# Intuitui Labs Web

**Intuitui Labs** is a Systems Intelligence & Humane Innovation Studio focused on transforming Sri Lankan workflows through research, design, and elegant technology.

## 🧠 Core Concept
A research-innovation studio operating at the intersection of systemic insight, human-centered design, and applied AI.

## 🎨 Aesthetics: Systems Clarity
- **Vibe:** Humane, Wise, Professional, Clean, Credible, Intelligent.
- **Visuals:** Systems diagrams, clear typography, structured grids, data visualization.

## 🛠️ Tech Stack
- **Framework:** Astro
- **Styling:** Tailwind CSS

## ▶️ Run locally

Install dependencies with pnpm:

```bash
pnpm install
```

Start the local development server with hot reload. This command also reuses the standard local address and replaces a stale Astro process if one is already registered:

```bash
pnpm dev
```

Then open [http://127.0.0.1:4321](http://127.0.0.1:4321).

Stop the development server when you are finished:

```bash
pnpm dev:stop
```

Check its status:

```bash
pnpm dev:status
```

Create a production build:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

Useful checks:

```bash
pnpm check-types
pnpm lint
pnpm test
```

The public project showcase is configured in `src/lib/projects.ts`. Add a project there and set `visible: true` when it is ready to appear on `/projects`.

## 📂 Project Structure
- `src/pages`: Application routes.
- `src/components`: Reusable UI components.
- `src/layouts`: Page layouts.
- `docs`: Strategic documentation and blueprints.
