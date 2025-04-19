# Daily LBJ
Daily LBJ is a full-stack web app that uses OpenAI's GPT-4 to generate a unique fact about LeBron James based on the current date. The frontend cycles through Cavaliers, Heat, and Lakers themes (with matching jersey numbers: 23 → 6 → 23) to reflect LeBron’s career progression. The app uses a Node.js + Express backend and dynamically fetches AI-generated facts from the OpenAI API.

---

## Features

- AI-generated LeBron James fact of the day
- Frontend cycles team colors and jersey numbers every 5 seconds
- Responsive, Lakers-inspired UI built with HTML/CSS/JS
- Backend securely fetches GPT-4 content using OpenAI API
- No frontend API key exposure

---

##  How to Run the App Locally

> You’ll need **Node.js** (v16 or higher recommended) and an **OpenAI API key**

### 1. Clone the Repository

git clone https://github.com/YOUR_USERNAME/daily-lbj.git
cd daily-lbj


### 2. Install Dependencies
npm install

This will install:
express
dotenv
cors
openai

### 3. Setup your .evn file and OPENAI_API_KEY

### 4. Run npm start in the terminal and navigate to http://localhosthost:3000 in your browser