import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://douqbxfmnweaqtofllcq.supabase.co';
const supabaseKey = 'sb_publishable_5Z6bCqB_Z0UhPHNRMT-q9A_kPq-5G7V';

export const supabase = createClient(supabaseUrl, supabaseKey);