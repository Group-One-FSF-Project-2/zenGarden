# Deployment Guide

This guide covers deploying ZenGarden to popular hosting platforms.

## Quick Deploy Options

### 🚀 Railway (Recommended)
1. Connect your GitHub repository to [Railway](https://railway.app)
2. Add PostgreSQL service 
3. Set environment variables:
   - `DB_URL` (automatically provided by Railway PostgreSQL)
   - `SESSION_SECRET` (generate a random string)
4. Deploy automatically on push

### 🔵 Heroku
```bash
# Install Heroku CLI and login
heroku create your-app-name
heroku addons:create heroku-postgresql:hobby-dev
heroku config:set SESSION_SECRET="your-random-secret-key"
git push heroku main
heroku run npm run seed
```

### 🟢 Render
1. Connect GitHub repository to [Render](https://render.com)
2. Create PostgreSQL database
3. Set environment variables:
   - `DB_URL` (from PostgreSQL service)
   - `SESSION_SECRET`
4. Add build command: `npm install`
5. Add start command: `npm start`

## Environment Variables Required

```
DB_URL=postgresql://username:password@host:port/database
SESSION_SECRET=your-super-secret-random-string
```

## Post-Deployment

1. Run database migrations/seeds if needed
2. Test the application thoroughly
3. Update README with live demo link
4. Monitor application logs for any issues

## Development vs Production

- **Development**: Uses individual DB variables (DB_NAME, DB_USER, DB_PASSWORD)
- **Production**: Uses single DB_URL for easier deployment