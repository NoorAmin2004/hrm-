import './index.css'
import './App.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { persistor } from './Redux/Store'
import { PersistGate } from 'redux-persist/integration/react'
import Layout from './layout/Layout'
import Login from './components/Login/Login'
import 'react-toastify/dist/ReactToastify.css';
import Check from './Pages/Checkin.jsx'
import Home from "./components/Home/Home.jsx"
import Progress from './components/Progress/Progress.jsx'
import Admin from './Pages/Admin.jsx'
import ProtectedRoute from './components/ProtectedRoute'
import ProtectedAdmin from './components/ProtectedRouteForAdmin.jsx'

import Attendance from './components/Attendance/Attendance.jsx'



function App() {


  return (
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor} >
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/dashboard' element={<Layout />}>
                <Route path='' element={<Check/>} />
                <Route path='Attendance' element={<ProtectedRoute ><Progress /></ProtectedRoute>} />
                <Route path='admin' element={<ProtectedRoute ><ProtectedAdmin ><Admin /></ProtectedAdmin></ProtectedRoute>} />
                <Route path='admin/attendance/:id' element={<ProtectedRoute ><ProtectedAdmin ><Attendance /></ProtectedAdmin></ProtectedRoute>} />
              </Route>
              <Route path='/login' element={<Login/>} />

            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
  )
}

export default App;
