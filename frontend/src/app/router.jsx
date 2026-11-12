import { Routes, Route } from 'react-router';
import AppLayout from './layouts/AppLayout.jsx'
import AuthLayout from './layouts/AuthLayout.jsx';

    // error 404 page
import PageNotFound from '../shared/pages/PageNotFound.jsx'

    // AUTH
import LoginPage from '../features/auth/pages/LoginPage.jsx'
import RegisterPage from '../features/auth/pages/RegisterPage.jsx'

    // DISCOVERY
import HomePage from '../features/discovery/pages/HomePage.jsx';

    // ADMIN
// import ModerationPage from '..features/admin/pages/ModerationPage.jsx';

    // PROFILE
// import ProfilePage from '../features/profile/pages/ProfilePage.jsx';

    // MESSAGES
// import MessagesPages from '../features/messages/pages/MessagesPages';

    // VIDEOS
// import VideoPage from '../features/videos/pages/VideoPages';

function AppRoutes() {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                        {/* AUTH */}
                    {/* vers le login  */}
                <Route path='/LoginPage' element={<LoginPage />} />
                    {/* vers le register */}
                <Route path='/RegisterPage' element={<RegisterPage />} />
            </Route>

            <Route element={<AppLayout />}>
                    {/* pour l'acceuil */}
                <Route path='/' element={<HomePage /> }/>
                
                    {/* pour l'admin 
                <Route path='/ModerationPage' element={<ModerationPage /> }/> */}

                    {/* pour le profil
                Route path='/ProfilePage' element={<ProfilePage />} */}

                    {/* pour les videos
                Route path'/VideoPage' element={<VideoPage />} */}

                    {/* pour les messages
                Route path='MessagesPage' element={<MessagesPage />} */}

            </Route>

                {/* Quand la route (lien) n'est pas reconnu */}
            <Route path='/*' element={<PageNotFound />} />
        </Routes>
    );
}

export default AppRoutes;