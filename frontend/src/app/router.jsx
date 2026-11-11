import { Routes, Route } from 'react-router';
import AuthLayout from './layouts/AuthLayout.jsx'
import PageNotFound from '../features/auth/pages/PageNotFound.jsx'
import LoginPage from '../features/auth/pages/LoginPage.jsx'
import RegisterPage from '../features/auth/pages/RegisterPage.jsx'

function AppRoutes() {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                {/* <Route path='/' element={<LoginPage /> }/> */}
                <Route path='/LoginPage' element={<LoginPage />} />
                <Route path='/RegisterPage' element={<RegisterPage />} />
                <Route path='/*' element={<PageNotFound />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;