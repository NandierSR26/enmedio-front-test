import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../hooks/useReduxFunctions'

export const PublicRoutes = () => {

    const { username, status } = useAppSelector( state => state.auth )

    if( status === 'authenticated' ){
        return <Navigate to={'/home'} />
    }

    return <Outlet />
}