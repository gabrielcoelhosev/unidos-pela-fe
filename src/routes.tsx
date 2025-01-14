import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from './components/Header/index.tsx';
import Home from './pages/Home/index.tsx';
import Sobre from './pages/Sobre/index.tsx';
import Contato from './pages/Contato/index.tsx';
import Portifolio from "./pages/Portifolio/index.tsx";
import NotFound from "./pages/Notfound/index.tsx";

function UseRoutes(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/contato" element={<Contato/>}/>
                <Route path="/portifolio" element={<Portifolio/>}/>

                <Route  path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default UseRoutes;