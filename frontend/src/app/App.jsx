import '../App.css'
import HomePage from '../features/discovery/pages/HomePages'
import Header from "../shared/layouts/Header"
import Sidebar from "../shared/layouts/Sidebar"

function App() {

    return (
        <>
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
