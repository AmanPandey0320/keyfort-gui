'use client';

import createCache from '@emotion/cache';

export const emotionCache = createCache({ key: 'css', prepend: true });

'use client';

import { CacheProvider } from '@emotion/react';
import { ReactNode } from 'react';

export default function EmotionProvider({ children }: { children: ReactNode }) {
  return <CacheProvider value={emotionCache}>{children}</CacheProvider>;
}