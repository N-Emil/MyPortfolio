import Store from '../assets/storeApp.png'
import Admin from '../assets/adminDashboard.png'

export const projects = [
    {
        id: 1,
        image: Store,
        title: 'Store Application',
        description: `A Java Swing-based Store Management System implementing MVC architecture with CSV data persistence and 
        automated stock control.`,
        app_url: 'https://github.com/N-Emil/Store-Application/archive/refs/tags/v1.0.0.zip',
        github_url: 'https://github.com/N-Emil/Store-Application'
    },

    {
        id: 2,
        image: Admin,
        title: 'Admin Dashboard',
        description: `A modular and secure Admin Dashboard built. Features protected routing, 
        path aliasing, and environment-based authentication.`,
        app_url: 'https://admin-dashboard-two-gules-13.vercel.app/register',
        github_url: 'https://github.com/N-Emil/Admin-Dashboard'
    }
]