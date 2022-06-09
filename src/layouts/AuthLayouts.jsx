import { Outlet } from 'react-router-dom';
import "../build/css/app.css"

const AuthLayouts = () => {
    return (
        <>
            <header className='senara-header'> 
            <h4 className='h4'>Hola</h4>
            
            
            </header>
            
            <Outlet />
        </>
    )
}

export default AuthLayouts