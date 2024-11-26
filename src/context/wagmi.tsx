import { wagmiAdapter, projectId } from '../wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react'
import { mainnet, arbitrum } from '@reown/appkit/networks'
import { type ReactNode } from 'react'
import { WagmiProvider, type Config } from 'wagmi'

// Set up queryClient
const queryClient = new QueryClient()

if (!projectId) {
    throw new Error('Project ID is not defined')
}

// Set up metadata
const metadata = {
    name: 'appkit-example',
    description: 'AppKit Example',
    url: 'https://appkitexampleapp.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// Create the modal
const modal = createAppKit({
    adapters: [wagmiAdapter],
    projectId,
    networks: [mainnet, arbitrum],
    defaultNetwork: mainnet,
    metadata: metadata,
    features: {
        analytics: true // Optional - defaults to your Cloud configuration
    }
})

function ContextProvider({ children }: { children: ReactNode; cookies: string | null }) {
    // const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config)

    return (
        <WagmiProvider config={wagmiAdapter.wagmiConfig as Config}>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        </WagmiProvider>
    )
}

export default ContextProvider