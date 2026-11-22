import Store from '../assets/storeApp.png'
import Admin from '../assets/adminDashboard.png'
import Sfera from '../assets/Sfera_App.png'

export const projects = [
    {
        id: 1,
        platform: 'Web',
        image: Sfera,
        title: 'Course Management System',
        description: `A course management platform where administrators manage students, teachers, announcements, services 
        and exam results through a centralized admin panel. The system also supports uploading mock exam results via Excel. 
        Students can register, view their exam results by date, manage their profiles, and reset forgotten passwords via email.`,
        technologies: ['Java 25', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'Hibernate', 'MySQL', 'Thymeleaf'],
        app_url: 'https://sferan1.az',
        github_url: 'https://github.com/N-Emil/Course_Management_System'
    },

    {
        id: 2,
        platform: 'Desktop',
        image: Store,
        title: 'Store Application',
        description: `A Java Swing-based Store Management System built without external frameworks, using MVC architecture, 
        CSV data persistence, and automated stock control. It supports product management, sales tracking, and inventory updates 
        through a user-friendly desktop interface.`,
        technologies: ['Java Core', 'OOP', 'MVC', 'Java Swing', 'File I/O', 'CSV Parsing'],
        app_url: 'https://github.com/N-Emil/Store-Application/archive/refs/tags/v1.0.0.zip',
        github_url: 'https://github.com/N-Emil/Store-Application'
    },

    {
        id: 3,
        platform: 'Web',
        image: Admin,
        title: 'Admin Dashboard',
        description: `A modular and secure Admin Dashboard built with React, featuring protected routing, path aliasing, and 
        environment-based authentication. The dashboard provides a structured interface for managing application data and 
        administrative operations.`,
        technologies: ['React', 'React Router', 'Context API', 'State Management', 'Tailwind CSS', 'Vite'],
        app_url: 'https://admin-dashboard-two-gules-13.vercel.app/register',
        github_url: 'https://github.com/N-Emil/Admin-Dashboard'
    }
]