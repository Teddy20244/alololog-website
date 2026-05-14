# Alolo Logistics LLC Website

Deploy-ready React/Vite website for **Alololog.com**.

## Local setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy on Vercel

1. Create a GitHub repository.
2. Upload these files.
3. Go to Vercel and import the GitHub repository.
4. Deploy the project.
5. Add domains:
   - alololog.com
   - www.alololog.com
6. In your domain registrar DNS, add the records Vercel provides.

Suggested default Vercel DNS:
- A record: `@` → `76.76.21.21`
- CNAME record: `www` → `cname.vercel-dns.com`

## Next items to customize

- Replace `Add business phone number`
- Add real business email when ready
- Add UEI/CAGE once confirmed
- Add capability statement PDF download
- Add contact form integration
