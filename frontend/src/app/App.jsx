import '../App.css'
import HomePage from '../features/discovery/pages/HomePage.jsx'
import Header from "../shared/layouts/Header"
import Sidebar from "../shared/layouts/Sidebar"
import AppRoutes from './router.jsx'

function App() {

    return (
        <>
            <AppRoutes />

            <header>
                <Header />
            </header>
            <Sidebar />

            <h1>Hello BIM Stream</h1>

            <HomePage />
        </>
    )
}

export default App
