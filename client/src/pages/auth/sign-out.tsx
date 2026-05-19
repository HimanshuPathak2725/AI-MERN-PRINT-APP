import Logo from "@/components/logo"
import { authClient } from "@/lib/auth-client"
import { useMutation } from "@tanstack/react-query"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AUTH_ROUTES } from "@/routes/routes"
import { Spinner } from "@/components/ui/spinner"

export default function SignOutPage() {
    // const navigate = useNavigate()

    // const { mutateAsync: signOut, isPending } = useMutation({
    //     mutationFn: () => authClient.signOut(),
    //     onSuccess: () => {
    //         navigate(AUTH_ROUTES.SIGN_IN)
    //     }
    // })

    // useEffect(() => {
    //     signOut()
    // }, [signOut])

    return (
        <main className="container h-screen mx-auto flex grow flex-col items-center
     justify-center gap-3">
            <div className="flex items-center gap-2">
                <Logo className="text-2xl" />
            </div>

            Logout Page

            {/* {!isPending ? (
                <div className="flex items-center gap-2">
                    <Spinner />
                    <p>Signing out...</p>
                </div>
            ) : (
                <p>Signed out</p>
            )} */}
        </main>
    )
}