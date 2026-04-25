# 🌱 ZenGarden - Garden Planner

A simple web application for placing plants in a virtual garden with persistent storage.

## 🎯 What It Does

ZenGarden lets you:
- Create a personal garden plot
- Choose from trees, bushes, or flowers
- Place plants at different positions in your garden
- Save your garden layout (plants persist between sessions)

## 🚀 Live Demo

**[View Live Application](#)** *(Link coming after deployment)*

![ZenGarden Screenshot](./docs/screenshot.png) *(Screenshot coming soon)*

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework with MVC architecture
- **Sequelize ORM** - Database management
- **PostgreSQL** - Primary database
- **bcrypt** - Password encryption
- **express-session** - User session management

### Frontend  
- **Handlebars.js** - Server-side templating
- **Bootstrap 5** - Responsive UI framework
- **JavaScript** - Plant rendering and form handling

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- PostgreSQL database
- Git

### Quick Start
```bash
# Clone the repository
git clone <your-repo-url>
cd zenGarden

# Install dependencies  
npm install

# Create PostgreSQL database
createdb garden_db

# Set up environment variables (see .env.example)
cp .env.example .env
# Edit .env with your database credentials

# Seed the database
npm run seed

# Start development server
npm run watch

# Visit http://localhost:3001
```

## 🎮 Features

- **User Accounts** - Sign up and log in to save your work
- **Plant Selection** - Choose from 9 plant varieties across 3 categories
- **Garden Layout** - Position plants using a simple slider interface
- **Persistent Storage** - Your garden is automatically saved

### Plant Types Available
- **Trees**: Apple, Orange, Plum
- **Bushes**: Blueberry, Red Currants, Gooseberry  
- **Flowers**: Daisy, Cosmos, Aster

## 🏗️ Architecture

Built with MVC (Model-View-Controller) architecture:
- **Models**: User, Garden Plot, Plant, and association tables
- **Views**: Handlebars templates with responsive Bootstrap UI
- **Controllers**: RESTful API routes and authentication middleware

## 👥 Development Team

This application was collaboratively built by:
- Crystal Lisi
- Mike Jurek  
- Miranda Delapaz
- Scott Okamoto
- Samuel Wlodawski

## 📄 License

This project is open source and available under the [MIT License](LICENSE).