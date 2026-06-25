import  { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Loader from './components/Loader'
import ProtectedRoute from './components/ProtectedRoute'
import UserLayout from './layouts/UserLayout'
import AdminLayout from './layouts/AdminLayout'

// pages
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import LostItems from './pages/LostItems'
import FoundItems from './pages/FoundItems'
import LostItemDetails from './pages/LostItemDetails'
import FoundItemDetails from './pages/FoundItemDetails'
import ReportLostItem from './pages/ReportLostItem'
import ReportFoundItem from './pages/ReportFoundItem'
import MyReports from './pages/MyReports'
import MyClaims from './pages/MyClaims'
import Profile from './pages/Profile'
import Notifications from './pages/Notifications'
import AdminDashboard from './pages/AdminDashboard'
import UserManagement from './pages/UserManagement'
import ClaimManagement from './pages/ClaimManagement'
import Analytics from './pages/Analytics'

export default function RoutesApp() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedRoute><UserLayout /></ProtectedRoute>}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/lost" element={<LostItems />} />
          <Route path="/found" element={<FoundItems />} />
          <Route path="/lost/:id" element={<LostItemDetails />} />
          <Route path="/found/:id" element={<FoundItemDetails />} />
          <Route path="/report/lost" element={<ReportLostItem />} />
          <Route path="/report/found" element={<ReportFoundItem />} />
          <Route path="/my/reports" element={<MyReports />} />
          <Route path="/my/claims" element={<MyClaims />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
        </Route>

        <Route element={<ProtectedRoute adminOnly><AdminLayout /></ProtectedRoute>}>
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/claims" element={<ClaimManagement />} />
          <Route path="/admin/analytics" element={<Analytics />} />
        </Route>

        <Route path="*" element={<div style={{padding:40}}>Page not found</div>} />
      </Routes>
    </Suspense>
  )
}
