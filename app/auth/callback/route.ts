import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import type { NextRequest } from 'next/server';
import type { Database } from '@/lib/schema';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  console.log('code?', code);

  if (code) {
    const supabase = createRouteHandlerClient<Database>({ cookies });
    const { data, error } = await supabase.auth.exchangeCodeForSession(code);
    console.log('hmm?', data, error);
  }

  console.log('redirect to?', requestUrl.origin);
  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin);
}
