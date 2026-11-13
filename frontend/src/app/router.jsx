import { Routes, Route } from "react-router";
import AppLayout from "./layouts/AppLayout.jsx";
import AuthLayout from "./layouts/AuthLayout.jsx";
import PageNotFound from "../shared/pages/PageNotFound.jsx"; // path to 404 page
import LoginPage from "../features/auth/pages/LoginPage.jsx";
import RegisterPage from "../features/auth/pages/RegisterPage.jsx";
import HomePage from "../features/discovery/pages/HomePage.jsx"; // uncomment when home page is present
import ModerationPage from "../features/admin/pages/ModerationPage.jsx"; // uncomment when moderation page is present
import { ProfilePage } from '../features/profile/pages/ProfilePage'; // uncomment when profile page is present
import MessagesPage from "../features/messages/pages/MessagesPage.jsx"; // uncomment when message page is present
import VideoPage from "../features/videos/pages/VideoPage"; //uncomment when video page is present

function AppRoutes() {
    return (
        <Routes>
            {/* Routes to authentification files*/}
            <Route element={<AuthLayout />}>
                <Route path='/LoginPage' element={<LoginPage />} />
                <Route path='/RegisterPage' element={<RegisterPage />} />
            </Route>

            {/* Routes to the rest of the application */}
            <Route element={<AppLayout />}>
                <Route path='/' element={<HomePage />} />
                <Route path='/ModerationPage' element={<ModerationPage />} />
                <Route path='/ProfilePage' element={<ProfilePage />} />
                <Route path='/VideoPage' element={<VideoPage />} />
                <Route path='MessagesPage' element={<MessagesPage />} />
            </Route>
            {/* Route to not found pages */}
            <Route path='/*' element={<PageNotFound />} />
        </Routes>
    );
}

export default AppRoutes;
