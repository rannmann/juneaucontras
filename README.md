# Juneau Contra Dancers Website

A modern, CMS-enabled website for the Juneau Folk Dance Community.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm start
   ```
   The site will be available at http://localhost:8080

3. Build for production:
   ```bash
   npm run build
   ```

## Decap CMS Setup

### For Netlify Deployment:

1. Deploy to Netlify
2. Enable Identity service in Netlify dashboard
3. Enable Git Gateway in Netlify Identity settings
4. Invite users via Netlify Identity tab

### For Other Hosting:

You'll need to configure a different backend for Decap CMS. See the [Decap CMS documentation](https://decapcms.org/docs/backends-overview/) for options.

## Content Management

- Access the CMS at `/admin/` after deployment
- Schedule entries are stored in `src/content/schedule/`
- Static pages can be edited through the CMS

## Adding Schedule Entries Manually

Create a new markdown file in `src/content/schedule/` with this format:

```markdown
---
title: "Dance Title"
date: 2025-MM-DD
time: "7:30 PM"
location: "The Arts and Culture Center"
band: "Band name with caller Name"
cost: "$10"
cancelled: false
---

Optional description here.
```