import { Routes, Route } from 'react-router';
import AuthLayout from './layouts/AuthLayout.jsx'
import PageNotFound from '../shared/pages/PageNotFound.jsx'
import LoginPage from '../features/auth/pages/LoginPage.jsx'
import RegisterPage from '../features/auth/pages/RegisterPage.jsx'

function AppRoutes() {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path='/LoginPage' element={<LoginPage />} />
                <Route path='/RegisterPage' element={<RegisterPage />} />
            </Route>

            <Route path='/*' element={<PageNotFound />} />
        </Routes>
    );
}

export default AppRoutes;