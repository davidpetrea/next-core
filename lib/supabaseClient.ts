import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from './schema';

const supabase = createClientComponentClient<Database>();

export default supabase;
