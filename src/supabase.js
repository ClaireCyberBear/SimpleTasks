import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xbvvgikhghtslwidtllf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhidnZnaWtoZ2h0c2x3aWR0bGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMzEwNTksImV4cCI6MTk5ODgwNzA1OX0.wkQLtFcLkpbk--bfrLWSmlz3Mkvnq39cbJbElyVSKQU";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
