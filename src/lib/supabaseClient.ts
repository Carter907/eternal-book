import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nwsdsaunavhsxynnlkdx.supabase.co'
console.log(JSON.stringify(process.env, null, 2));
const publicKey = import.meta.env.VITE_SUPA_KEY;
console.log(import.meta.env)
export const supabase = createClient(supabaseUrl, publicKey);