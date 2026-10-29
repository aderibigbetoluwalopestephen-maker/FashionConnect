# Supabase migrations

The application database schema has not yet been applied to a Supabase project. Add versioned SQL migrations here before enabling live marketplace data.

Planned core tables:
- profiles
- designer_profiles
- categories
- designer_categories
- portfolio_items
- booking_requests
- booking_attachments
- quotes
- orders
- order_status_history
- reviews
- designer_verification_requests
- reports

Before launch, every exposed table must have Row Level Security policies. Protect admin privileges using server-managed authorization. Configure Storage policies for public portfolio media and private booking/verification uploads. Implement quote acceptance and order creation as one database transaction/RPC to prevent duplicate or inconsistent orders.

No service-role key should ever be included in frontend configuration.