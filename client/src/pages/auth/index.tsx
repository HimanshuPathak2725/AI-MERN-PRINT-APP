import Logo from "@/components/logo"

export default function AuthPage() {
  //const { pathname } = useParams()

  return (
    <main className="container h-screen mx-auto flex grow flex-col items-center
     justify-center gap-3">
      <div className="flex items-center gap-2">
        <Logo className="text-2xl" />
      </div>

      Auth Page
      {/* <AuthView
        pathname={pathname} /> */}
    </main>
  )
}