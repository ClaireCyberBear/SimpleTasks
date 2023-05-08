import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const supabase = createClient(
  "https://xbvvgikhghtslwidtllf.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhidnZnaWtoZ2h0c2x3aWR0bGxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyMzEwNTksImV4cCI6MTk5ODgwNzA1OX0.wkQLtFcLkpbk--bfrLWSmlz3Mkvnq39cbJbElyVSKQU"
);

export default supabase;
