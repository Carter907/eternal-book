import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nwsdsaunavhsxynnlkdx.supabase.co'
console.log(JSON.stringify(process.env, null, 2));
const publicKey = process.env.SUPA_KEY!!;
console.log(publicKey);
export const supabase = createClient(supabaseUrl, publicKey);