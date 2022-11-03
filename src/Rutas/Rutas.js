import {Home} from '../Home/Home'
import {Historia} from '../Historia/Historia'
import {Integrantes} from '../Integrantes/Integrantes'
import {Musica} from '../Musica/Musica'
import { Routes, Route} from "react-router-dom"
import {Menu} from '../Menu/Menu'

export function Rutas(){
    return (
        <div className="App">
          <Menu></Menu>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="historia" element={<Historia />} />
            <Route path="integrante" element={<Integrantes />} />
            <Route path="musica" element={<Musica />} />
          </Routes>
        </div>
      );

}