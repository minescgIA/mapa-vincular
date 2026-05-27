# Mapa Vincular — Web Report

Next.js 15 + TypeScript + Tailwind CSS. Informe web interactivo de 5 pestañas
entregado por URL única por cliente. No hay auth, no hay CRUD. Es display-only.

## Commands

- `pnpm dev` — Servidor local (localhost:3000)
- `pnpm build` — Build de producción (correr antes de deploy)
- `pnpm type-check` — Verificar tipos sin compilar (`tsc --noEmit`)

## Tech Stack

Next.js 16 App Router + TypeScript strict + Tailwind CSS v4 + react-markdown +
@tailwindcss/typography + Airtable REST API + Vercel

## Architecture

### Data Flow
URL `/reporte/[id]` → Server Component → `lib/airtable.ts` → Airtable REST API
→ ReportData → HeaderCard + TabNav → HTML al cliente

### Key Patterns
- Server Components por defecto. Solo `TabNav.tsx` necesita "use client" (maneja estado activo de pestaña).
- No hay mutations. Solo fetch GET a Airtable por record ID.
- `lib/airtable.ts` es el único archivo que toca Airtable. Nunca hacer fetch desde componentes.
- Revalidación: `next: { revalidate: 300 }`. El contenido no cambia una vez generado.
- Si `estado_pago !== 'generated' && estado_pago !== 'delivered'`: renderizar `<StatusGate>`.

### Directory
- `app/reporte/[id]/` — Página del informe + loading + not-found
- `components/report/` — HeaderCard, TabNav, TabContent, StatusGate
- `components/ui/` — Badge, Divider
- `lib/` — airtable.ts + types.ts

## Design System

### CSS Variables (definidas en globals.css)
- `--color-bg: #FDF8F3` — fondo de página
- `--color-surface: #FFFFFF` — cards
- `--color-primary: #3D1C7A` — títulos, tabs activos
- `--color-accent: #C97B9C` — badges, separadores
- `--color-secondary: #F0E6FF` — fondo de badges
- `--color-text: #5A4170` — cuerpo del análisis
- `--color-muted: #9B7FA8` — subtítulos, tabs inactivos
- `--color-border: #F0DFF5` — bordes

### Typography
- Headings: Cormorant Garamond (serif), 400/600, italic para nombres propios
- Body: Lato (sans-serif), 400/600
- Importar desde Google Fonts en globals.css

### Style
- Border radius: 12px (cards), 20px (badges/tabs)
- Shadows: `0 1px 8px rgba(61,28,122,0.06)`
- Spacing base: 8px (escala: 8, 16, 24, 32, 48px)
- Max width: 672px — estrecho para lectura profunda en mobile
- Sin bordes duros. Sin sombras agresivas. Estética de ritual íntimo.

## Environment Variables

| Variable | Descripción |
|----------|-------------|
| `AIRTABLE_BASE_ID` | ID de la base (desde la URL de Airtable) |
| `AIRTABLE_API_KEY` | Personal access token de Airtable |
| `NEXT_PUBLIC_SITE_URL` | URL de producción (ej. https://mapavincular.com) |

## Reglas No Negociables

1. TypeScript strict mode. Cero `any`. Todos los tipos en `lib/types.ts`.
2. Solo `lib/airtable.ts` hace fetch a Airtable. Componentes reciben datos como props.
3. Solo `TabNav.tsx` es "use client". Todo lo demás es Server Component.
4. Mobile-first obligatorio. El informe se abre desde WhatsApp en el celular.
   Testear cada componente en 375px antes de declararlo terminado.
5. Nunca hardcodear record IDs, API keys ni URLs. Todo via env vars.
6. Nunca commitear `.env.local`. Está en .gitignore.
