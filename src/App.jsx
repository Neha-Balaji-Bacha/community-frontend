
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar.jsx";

import LoginPage from "./pages/LoginPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import CommunitiesPage from "./pages/CommunitiesPage.jsx";
import CommunityDetailPage from "./pages/CommunityDetailPage.jsx";
import CreateCommunityPage from "./pages/CreateCommunityPage.jsx";
import EventsPage from "./pages/EventsPage.jsx";
import CreateEventPage from "./pages/CreateEventPage.jsx";
import EventDetailPage from "./pages/EventDetailPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import MemberDashboardPage from "./pages/MemberDashboardPage.jsx";
import HostDashboardPage from "./pages/HostDashboardPage.jsx";
import LogoutPage from "./pages/LogoutPage.jsx";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { setUserDetails } from "./store/slices/authSlice.js";
import { setExistingDetails } from "./store/slices/communitySlice.js";
import { setExistingEventsDetails } from "./store/slices/eventSlice.js";

import ProtectedRoute from "./pages/ProtectedRoute.jsx";
import ProtectedLoginAndRegisterRoute from "./pages/ProtectedLoginAndRegisterRoute.jsx";
import { API_URL } from "./config";

import ForgotPassword from "./pages/ForgotPassword.jsx";
import { Navigate } from "react-router-dom";

// ensure cookies are sent globally
axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await axios.get(`${API_URL}/api/user/me`, {
          withCredentials: true,
        });

        if (!res?.data?.data?.user) throw new Error("No user");

        const {
          user,
          joinedCommunities,
          hostedCommunities,
          rsvpedEvents,
          myCreatedEvents,
        } = res.data.data;

        dispatch(setUserDetails(user));
        dispatch(
          setExistingDetails({
            joinedCommunities: joinedCommunities || [],
            hostedCommunities: hostedCommunities || [],
          })
        );
        dispatch(
          setExistingEventsDetails({
            rsvpedEvents: rsvpedEvents || [],
            myCreatedEvents: myCreatedEvents || [],
          })
        );
      } catch (e) {
        dispatch(setUserDetails(null));
        dispatch(setExistingDetails({ joinedCommunities: [], hostedCommunities: [] }));
        dispatch(setExistingEventsDetails({ rsvpedEvents: [], myCreatedEvents: [] }));
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/login" element={<ProtectedLoginAndRegisterRoute><LoginPage /></ProtectedLoginAndRegisterRoute>} />
        <Route path="/register" element={<ProtectedLoginAndRegisterRoute><RegisterPage /></ProtectedLoginAndRegisterRoute>} />
        <Route path="/logout" element={<LogoutPage />} />

        <Route path="/" element={<HomePage />} />
        <Route path="/communities" element={<CommunitiesPage />} />
        <Route path="/communities/specific/:id" element={<ProtectedRoute><CommunityDetailPage /></ProtectedRoute>} />
        <Route path="/communities/create" element={<ProtectedRoute><CreateCommunityPage /></ProtectedRoute>} />

        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/specific/:id" element={<ProtectedRoute><EventDetailPage /></ProtectedRoute>} />
        <Route path="/events/create" element={<ProtectedRoute><CreateEventPage /></ProtectedRoute>} />

        <Route path="/profile" element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
        <Route path="/dashboard" element={<ProtectedRoute><MemberDashboardPage /></ProtectedRoute>} />
        <Route path="/host/dashboard" element={<ProtectedRoute><HostDashboardPage /></ProtectedRoute>} />


        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;

