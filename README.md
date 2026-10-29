# FashionConnect

FashionConnect is a fashion designer discovery and booking marketplace designed for customers and independent fashion designers in Nigeria.

## Current status

The first frontend foundation is in place: responsive editorial-style homepage, designer discovery cards, specialty/location/budget filters, saved-card interactions for the current session, and a clear “how it works” flow. The displayed designer profiles and ratings are sample content for layout demonstration; they are not verified live accounts.

Authentication, live Supabase data, bookings, quotations, order tracking, and the admin dashboard are planned next. Do not treat the demo profiles as real listings.

## Brand direction

- Warm cream: `#F5EFE5`
- Deep burgundy: `#651F35`
- Charcoal: `#292725`
- Typography: Playfair Display + DM Sans

## Technology

- React + Vite
- Supabase Auth, Postgres, and Storage (integration to be completed)
- Vercel deployment
- React Router and Lucide icons

## Run locally

1. Install Node.js (18+ recommended).
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and enter your Supabase project URL and anon/publishable key.
4. Run `npm run dev`.
5. Run `npm run build` to create the production build.

The current homepage can render before Supabase is configured. No real sign-in or booking is active yet.

## MVP scope

- Customer and designer registration
- Designer profiles and portfolio uploads
- Search by location, specialty, and budget
- Booking requests with outfit details, references, budget, and deadline
- Designer quotations and order status tracking
- Admin verification and moderation
- Direct payment arrangements between customer and designer at launch; no platform checkout or payment collection in the MVP

## Security principles

- Enable Row Level Security on every exposed Supabase table.
- Customers must only access their own private bookings and quotes.
- Designers must only manage their own profiles and portfolio.
- Admin privileges must be assigned server-side, never by a user-editable profile field.
- Keep service-role keys out of browser code.
- Keep booking attachments and verification documents private.
- Do not mark an order as paid based on an off-platform payment claim without a clearly defined verification process.

## Suggested implementation order

1. Supabase schema, RLS, and authentication.
2. Designer profiles, categories, portfolio storage, search, and verification.
3. Booking requests and quotations.
4. Quote acceptance transaction and order status history.
5. Customer/designer dashboards and admin tools.
6. End-to-end testing, accessibility checks, and Vercel deployment.