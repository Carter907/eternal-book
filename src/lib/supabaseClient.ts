import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nwsdsaunavhsxynnlkdx.supabase.co'

export const supabase = createClient(supabaseUrl,
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im53c2RzYXVuYXZoc3h5bm5sa2R4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzNjA2OTEsImV4cCI6MjA1MDkzNjY5MX0.X2SspuDIZTQEsC1Q08kH9ygf74qjZaw_PnS77aev2AY')