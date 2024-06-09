import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "../Pages/register";
import Footer from "../Components/footer";
import Header from "../Components/header/header";
import Notfound from "../Pages/notFound";
import PrivateRoute, { UserRoute } from "../PrivateRoute";
import Discover from "../Pages/discover";
import CreateLocal from "../Components/createLocal/createLocal";
import ResetPassword from "../Pages/resetPassword";
import ResetPasswordConfirmation from "../Pages/resetPasswordConfirmation";
import ActivateUser from "../Pages/activateUser";

function RoutesPages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route
            path="/discover"
            element={
              <>
                <Header />
                <Discover />
              </>
            }
          />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route
            path="/createlocal"
            element={
              <>
                <CreateLocal />
                <Footer />
              </>
            }
          />
        </Route>
        <Route element={<UserRoute />}>
          <Route path="/" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route
            path="/password/reset/confirm/:uid/:token"
            element={<ResetPasswordConfirmation />}
          />
          <Route path="/activate/:uid/:token" element={<ActivateUser />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesPages;
