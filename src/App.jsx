import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import Home from './pages/Home'
import Todo from './pages/Todo'
import Login from './pages/Login'
import PageNotFound from './ui/PageNotFound'
import SignUp from './pages/SignUp'
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './features/Authentication/AuthProvider'
import PrivateRoute from './features/Authentication/PrivateRoute'
function App() {
 

  return (
    <>
      <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route element={<PrivateRoute element={<AppLayout />} />}>
                            <Route path="/" element={<Home />} />
                            <Route path="/todos" element={<Todo />} />
                        </Route>
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
            <Toaster
      position='top-center'
      gutter={12}
      containerStyle={{
        margin: '8px',
        maxWidth: '100%', // Ensure container does not overflow
        padding: '0 8px', // Adjust padding for small screens
      }}
      toastOptions={{
        success: {
          duration: 3000,
          style: {
            backgroundColor: '#4CAF50',  // Green color for success
            color: '#FFFFFF',            // White text
            fontSize: '16px',            // Font size
            padding: '12px 16px',        // Padding for smaller screens
          },
        },
        error: {
          duration: 4000,
          style: {
            backgroundColor: '#F44336',  // Red color for error
            color: '#FFFFFF',            // White text
            fontSize: '16px',            // Font size
            padding: '12px 16px',        // Padding for smaller screens
          },
        },
        style: {
          fontSize: '16px',
          maxWidth: '100%',             // Make max-width responsive
          padding: '16px 24px',
          backgroundColor: '#F9FAFB',   // Light gray background
          color: '#1F2937',             // Dark gray text
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // Add some shadow for better visibility
          borderRadius: '4px',          // Rounded corners
          margin: '8px',                // Margin for small screens
        },
      }}
    />
    </>
  )
}

export default App

      