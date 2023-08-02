import React from 'react'
import { BrowserRouter as Router, Routes , Route, Link} from 'react-router-dom'
import Uno from './Uno'
import Dos from './Dos'


const MiRouter  = () => {
    return (
       <>
       <Router>
        <div>
            <Link to = '/uno'><button> Ir al Uno </button></Link>
            <Link to = '/dos'><button> Ir al Dos </button></Link>
        </div>

            <Routes>
                <Route path='/uno' element={<Uno/>} ></Route>
                <Route path='/dos' element={<Dos/>} ></Route>
            </Routes>
       </Router>
       </>




    )
}

export default MiRouter