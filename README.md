# ** README**

## ✨ Features

### 🎭 Frontend
- **Smooth Animations**: Framer Motion powered animations
- **Dark/Light Mode**: Theme switching with CSS variables
- **Interactive Background**: Canvas-based particle system
- **Custom Cursor**: Animated mouse cursor with hover effects
- **Responsive Design**: Mobile-first, fully responsive
- **Modern UI**: Glass morphism, gradients, shadows

### ⚙️ Backend
- **Spring Boot API**: RESTful endpoints
- **Contact Form**: Email notifications & database storage
- **Project Management**: CRUD operations for projects
- **File Upload**: Image hosting with ImgBB
- **Security**: CORS, input validation, rate limiting

### 🚀 Performance
- **Optimized Build**: Vite for fast compilation
- **Code Splitting**: Dynamic imports for faster loading
- **Lazy Loading**: Images and components
- **PWA Ready**: Installable as app

## 📁 Project Structure

```
portfolio/
├── frontend/                
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── styles/         # Global styles
│   │   ├── utils/          # Utility functions
│   │   └── assets/         # Images, fonts
│   └── vite.config.js      # Vite configuration
│
├── backend/                 # Spring Boot
│   ├── src/main/java/com/portfolio/
│   │   ├── controller/     # REST controllers
│   │   ├── service/        # Business logic
│   │   ├── repository/     # Data access
│   │   ├── model/          # Entity classes
│   │   └── config/         # Configuration
│   └── application.properties
│
└── README.md               # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ & npm
- Java 17+
- MySQL

### Frontend Setup
```bash
# Clone repository
git clone https://github.com/yourusername/portfolio.git
cd portfolio/frontend

# Install dependencies
npm install

# Set environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

### Backend Setup
```bash
cd backend

# Configure database in application.properties
# Use H2 for development (no setup needed)

# Run Spring Boot
./mvnw spring-boot:run
# or
mvn spring-boot:run
```

## 🛠️ Built With

### Frontend Stack
- [React 19](https://reactjs.org/) - UI Library
- [Vite](https://vitejs.dev/) - Build Tool
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [Lucide React](https://lucide.dev/) - Icons
- [React Hot Toast](https://react-hot-toast.com/) - Notifications

### Backend Stack
- [Spring Boot 3](https://spring.io/projects/spring-boot) - Java Framework
- [Spring Data JPA](https://spring.io/projects/spring-data-jpa) - Database
- [Spring Security](https://spring.io/projects/spring-security) - Authentication
- [MySQL/PostgreSQL](https://www.mysql.com/) - Database


## 🎯 Key Components

### 1. Animated Background
- Canvas-based particle system
- Mouse interaction
- Performance optimized

### 2. Custom Cursor
- Smooth animation
- Hover state changes
- Performance focused

### 3. Project Showcase
- Filterable projects
- Lazy loading images
- Case study details

### 4. Contact System
- Form validation
- Email notifications
- Database storage

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| POST | `/api/contact` | Submit contact form |
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/{id}` | Get project by ID |
| POST | `/api/upload` | Upload images |

## 🚢 Deployment

### Frontend (Netlify)
```bash
# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Backend (Railway)
```bash
# Install Railway CLI
npm i -g @railway/cli

# Deploy
railway up
```

### Docker (Optional)
```dockerfile
# Build and run with Docker
docker build -t portfolio .
docker run -p 3000:80 portfolio
```

## 📊 Performance

| Metric | Score |
|--------|-------|
| Lighthouse Performance | 95+ |
| First Contentful Paint | < 1s |
| Time to Interactive | < 3s |
| Bundle Size | < 250KB |

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for amazing animations
- [Lucide Icons](https://lucide.dev/) for beautiful icons
- [Vite](https://vitejs.dev/) for fast builds
- [Spring Boot](https://spring.io/) for robust backend


⭐️ If you found this project helpful, please give it a star!
```

```
