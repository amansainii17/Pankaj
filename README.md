# Light Decoration Website

**Owner:** Arvind Saini  
**Location:** House No. 0334, Jamner, Tehsil Makshudangarh, District Guna, M.P. – 473287  
**Email:** arvind.saini30061976@gmail.com

---

## Tech Stack

- **Framework:** Next.js 14 (React)
- **Styling:** CSS Modules + Google Fonts
- **Backend:** Next.js API Routes (Vercel Serverless Functions)
- **Deployment:** Vercel

---

## Pages & Features

| Section | Description |
|---------|-------------|
| Hero | Animated lights, stats, CTA buttons |
| Services | 6 service cards (Wedding, Birthday, Festival, Corporate, etc.) |
| Gallery | Filterable portfolio with animated light visuals |
| About | Business info, owner details, visual stats |
| Contact | Booking form with backend API |
| Footer | Links, contact info, service list |

---

## Deploy to Vercel (3 steps)

### Step 1 — Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/gta-light-decoration.git
git push -u origin main
```

### Step 2 — Connect to Vercel
1. Go to [vercel.com](https://vercel.com) → New Project
2. Import your GitHub repository
3. Vercel auto-detects Next.js — click **Deploy**

### Step 3 — (Optional) Enable Email Notifications
To receive an email when someone fills the booking form:
1. In Vercel Dashboard → Your Project → Settings → **Environment Variables**
2. Add:
   - `SMTP_USER` = your Gmail address
   - `SMTP_PASS` = Gmail App Password (see `.env.example` for instructions)
3. In `pages/api/contact.js`, uncomment the nodemailer section
4. Redeploy

---

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit booking inquiry |
| GET | `/api/health` | Health check |

### Contact API — Request Body
```json
{
  "name": "Rajesh Kumar",
  "phone": "+91 98765 43210",
  "email": "rajesh@email.com",
  "date": "2025-12-15",
  "service": "Wedding Decoration",
  "message": "Venue: Town Hall, 500 guests"
}
```

---

## Customization

- **Phone number:** Search `+91 79999 99999` → replace with actual number
- **Colors:** Edit `--gold`, `--deep` in `styles/globals.css`
- **Add photos:** Replace gallery visual items with `<img>` tags using real photos
