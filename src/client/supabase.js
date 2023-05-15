import { createClient } from "@supabase/supabase-js";
const supabase = createClient(REACT_APP_SUPABASE_URL, REACT_APP_ANON_KEY);
export default supabase;
