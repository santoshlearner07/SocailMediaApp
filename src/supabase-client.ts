import { createClient } from "@supabase/supabase-js";

const supabaseURL = "https://kbtpltmbwvwvklowljkt.supabase.co";
const supabaseAnonkey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;
export const supabase = createClient(supabaseURL, supabaseAnonkey);
