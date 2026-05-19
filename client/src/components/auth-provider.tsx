import { AuthUIProvider } from "@daveyplate/better-auth-ui"
import { ENV } from "@/lib/env";

// const BetterAuthLink = ({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) => (
//     <Link to={href} className={className}>
//         {children}
//     </Link>
// )

export function AuthProvider({ children }: { children: React.ReactNode }) {

    return (
        <>
            {children}
        </>
    )
}

{/* <AuthUIProvider
    authClient={authClient}
    navigate={navigate}
    social={{
        providers: ["google"]
    }}
    redirectTo={ENV.FRONTEND_URL}
    onSessionChange={() => {
        // Clear router cache (protected routes)
        navigate(0)
    }}
    Link={BetterAuthLink}

></AuthUIProvider> */}