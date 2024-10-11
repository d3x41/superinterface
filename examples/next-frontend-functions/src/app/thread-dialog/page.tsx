'use client'

import { useState } from 'react'
import {
  SuperinterfaceProvider,
  ThreadDialog,
  AssistantNameContext,
} from '@superinterface/react'
import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

export default function Page() {
  const [queryClient] = useState(() => (
    new QueryClient({
      defaultOptions: {
        queries: {
          // With SSR, we usually want to set some default staleTime
          // above 0 to avoid refetching immediately on the client
          staleTime: 10000,
        },
      },
    })
  ))

  return (
    <QueryClientProvider client={queryClient}>
      <Theme
        accentColor="blue"
        grayColor="gray"
        appearance="light"
        radius="medium"
        scaling="100%"
      >
        <SuperinterfaceProvider
          variables={{
            publicApiKey: '37245be8-902a-440e-aaae-c56151fe8acc',
            assistantId: '6db2c5cb-b85a-4158-958b-09c9dcb5f4cb',
          }}
          baseUrl="http://localhost:3000/api/cloud"
        >
          <AssistantNameContext.Provider value="Function caller">
            <ThreadDialog />
          </AssistantNameContext.Provider>
        </SuperinterfaceProvider>
      </Theme>
    </QueryClientProvider>
  )
}
