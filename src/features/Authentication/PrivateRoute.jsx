import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import Spinner from '../../ui/Spinner';

function PrivateRoute({ element }) {
    const { isAuthenticated, loading } = useAuth();
    const location = useLocation();

    if(loading){
        return <div className="h-screen bg-gray-900 flex items-center justify-center">
            <Spinner />
        </div>
    }

    if (!isAuthenticated) {
        // Redirect to the login page, passing the current location so it can be returned to
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return element;
}

export default PrivateRoute;


