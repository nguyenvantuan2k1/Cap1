import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ymrnbnvfyemszijmmxax.supabase.co';
const supabaseAnonKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inltcm5ibnZmeWVtc3ppam1teGF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjQ2MDIwMDcsImV4cCI6MTk4MDE3ODAwN30.bGV_DEBl3he086vnXK2oiv3TABorO6bgfs1E5dBPOec';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
