import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
// import { Components } from 'views'; // Commented out for now
import { routes } from './routes'
const Navigator = () => {
  return (
    <>
      <Routes>
        {/* The Components route is commented out for now */}
        {/* <Route path="/components" element={<Components />} /> */}

        {/* Map over the routes array and render each route */}
        {routes.map(route => (
          <Route
            key={route.name} // Use the route's name as the key
            path={route.path} // Use the route's path
            element={
              route.protected ? ( // If the route is protected, render a PrivateRoute component
                <PrivateRoute pageName={route.name} /* roles={route.roles} */>{route.element}</PrivateRoute>
              ) : (
                // If the route is public, render a PublicRoute component
                <PublicRoute>{route.element}</PublicRoute>
              )
            }
          />
        ))}

        {/* Render a "not found" message if the user visits an unknown path */}
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </>
  )
}

export default Navigator
