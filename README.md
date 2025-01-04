# Destiny

## How To Use

after git clone
```
cd FrontEnd/my-destiny
vi .env
```
Edit Connection Settings
> ```
> # Personality Analyze API
> ANALYZE_URL=https://example.com/analyze
> 
> # PostgreSQL Connection String
> DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
> ```
```
npm install
npx prisma migrate dev --preview-feature --name init
npx prisma generate
```

