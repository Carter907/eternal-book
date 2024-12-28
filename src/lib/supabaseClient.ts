import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nwsdsaunavhsxynnlkdx.supabase.co'
const publicKey = import.meta.env.VITE_SUPA_KEY;
export const supabase = createClient(supabaseUrl, publicKey);