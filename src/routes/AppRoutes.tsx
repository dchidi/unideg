import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loading from "../components/ui/Loading";
// import Scholarship from "../pages/Scholarship";
import HowItWorks from "../pages/HowItWorks";

// Lazy load components
const Programs = lazy(() => import("../pages/Programs"));
const Home = lazy(() => import("../pages/Home"));
const Login = lazy(() => import("../pages/Login"));
const ProfileDashboard = lazy(() => import("../components/profile/Dashboard"));
const ProfileInbox = lazy(() => import("../components/profile/Inbox"));
const ProfileApplication = lazy(
  () => import("../components/profile/Application")
);
const ManageProfile = lazy(() => import("../components/profile/ManageProfile"));
const ProfileLayout = lazy(
  () => import("../components/layouts/profile/ProfileLayout")
);
const Error404 = lazy(() => import("../pages/Error404"));
const ProtectedRoute = lazy(() => import("./ProtectedRoute"));

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/programs" element={<Programs />} />
          {/* <Route path="/scholarship" element={<Scholarship />} /> */}
          <Route path="/how-it-works" element={<HowItWorks />} />

          {/* Protected Dashboard Routes */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfileLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<ProfileDashboard />} />
            <Route path="dashboard" element={<ProfileDashboard />} />
            <Route path="application" element={<ProfileApplication />} />
            <Route path="inbox" element={<ProfileInbox />} />
            <Route path="profile " element={<ManageProfile />} />
            {/* <Route path="profile" element={<Profile />} /> */}
          </Route>

          {/* Catch-all Route for 404 */}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AppRoutes;
