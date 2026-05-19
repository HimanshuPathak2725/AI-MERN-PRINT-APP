import { Navigate, Outlet } from 'react-router-dom';
import { AUTH_ROUTES, PROTECTED_ROUTES } from './routes';
import { authClient } from '@/lib/auth-client';
import { Spinner } from '@/components/ui/spinner';



const RouteGuard = ({ requireAuth }: { requireAuth: boolean }) => {
    const isPending = false;
    const data = { user: null };
    if (isPending) {
        return (
            <div className="flex h-screen w-full items-center justify-center">
                <Spinner className="size-12" />
            </div>
        );
    }
    //if (requireAuth && !data?.user) return <Navigate to={AUTH_ROUTES.SIGN_IN} replace />;
    //if (!requireAuth && data?.user) return <Navigate to={PROTECTED_ROUTES.HOME} replace />;


    return <Outlet />;
};

export default RouteGuard;
