import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../hooks/useReduxFunctions'


export const PrivateRoutes = () => {

    const { status } = useAppSelector( state => state.auth )
    console.log({status})

    if (status === 'not-authenticated') {
        return <Navigate to={'/login'} />
    }

    return <Outlet />
}