Velsync Task 03 — CI/CD Pipeline with GitHub Actions & Render

A simple Node.js backend deployed using a fully automated CI/CD pipeline.
Whenever code is pushed to the main branch, GitHub Actions builds and deploys the latest version to Render.

🔗 Live API

https://velsync-task-03.onrender.com

📌 Overview

Built a lightweight Express.js API

Configured GitHub Actions for automatic deployment

Render Web Service hosts the live backend

CI/CD pipeline ensures zero manual deployment

📁 Project Structure
src/
 ├── app.js
 └── index.js

.github/workflows/
 └── deploy.yml

package.json
README.md

🚀 API Endpoint
GET /

Returns backend health status.

Example:

{
  "status": "success",
  "message": "Your Node backend is running smoothly.",
  "timestamp": "ISO timestamp"
}

⚙️ GitHub Actions Workflow

.github/workflows/deploy.yml

name: CI-CD

on:
  push:
    branches: ["main"]

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: "18"
      - run: npm install
      - run: npm test || echo "No tests"
      - uses: render-actions/cli-deploy@v1
        with:
          api_key: ${{ secrets.RENDER_API_KEY }}
          service_id: srv-d4qliachg0os738c7csg

🔐 Required GitHub Secret

Add this in:

Settings → Secrets → Actions

RENDER_API_KEY

📎 Important Links

Live API: https://velsync-task-03.onrender.com

Repository: https://github.com/SwapnilSP000/Velsync_TASK_03
