import Home from '../pages/home'
import About from '../pages/about'
import Accomodation from '../pages/accomodation'
import Error from '../pages/error'
import { Route, Routes } from 'react-router-dom'

function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/accomodation/:id" element={<Accomodation />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default AppRouter