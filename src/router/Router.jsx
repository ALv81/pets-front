import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../components/auth/Login"
import Register from "../components/auth/Register"
import Panel from "../components/Panel"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register"  element={<Register />} />
            <Route path="/panel"  element={<Panel />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router