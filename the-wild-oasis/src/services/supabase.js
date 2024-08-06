
import { createClient } from '@supabase/supabase-js'
export const supabaseUrl = 'https://eixlbnnmlmihtlcxqaic.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpeGxibm5tbG1paHRsY3hxYWljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEzOTI5ODYsImV4cCI6MjAzNjk2ODk4Nn0.-_qudjA8PObsU1Qdz03o8acPoaNzK2FQwsyx-T6wjUY"
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;