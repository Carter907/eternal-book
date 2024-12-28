import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nwsdsaunavhsxynnlkdx.supabase.co'
const publicKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!!
export const supabase = createClient(supabaseUrl, publicKey);