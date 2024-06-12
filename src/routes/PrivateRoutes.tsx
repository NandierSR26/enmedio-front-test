import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../hooks/useReduxFunctions'


export const PrivateRoutes = () => {

    const { status } = useAppSelector( state => state.auth )

    if (status === 'not-authenticated') {
        return <Navigate to={'/'} />
    }

    return <Outlet />
}