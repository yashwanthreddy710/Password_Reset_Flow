import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/Register";
import LoginForm from "./components/Login";
import PasswordReset from "./components/PasswordReset";
import ResetPasswordForm from "./components/ResetPasswordForm";


function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} /> 
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/reset-password/:token" element={<ResetPasswordForm />} />
        </Routes>
      </Router>

    </div>
  )

}

export default App;
