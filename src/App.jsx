import Navbar from "./components/Navbar"
import Chatroom from "./pages/Chatroom"
import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Privateroute from "./routes/Privateroute"
import { AuthProvider } from "./context/AuthContext"

function App() {

  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/chat" exact element={<Privateroute>
            <Chatroom />
          </Privateroute>} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App
