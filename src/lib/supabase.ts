import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error('Invalid Supabase URL. Please click "Connect to Supabase" button to set up your project correctly.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);