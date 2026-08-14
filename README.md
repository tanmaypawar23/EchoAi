# EchoAi 🤖

EchoAi is an AI-powered chatbot application that lets users have real-time conversations with an AI. Built with a React frontend and a Node.js backend.

## ✨ Features

- Real-time AI chat conversations
- Clean, responsive user interface
- Simple and easy-to-use design

## 🖼️ Screenshots
<img width="2875" height="1517" alt="Screenshot 2026-08-15 000544" src="https://github.com/user-attachments/assets/380063c3-a84c-45c0-9510-8517d3d76280" />



## 🛠️ Tech Stack

**Frontend:** React.js, HTML, CSS, JavaScript
**Backend:** Node.js, Express.js
**DataBase: MongoDB

## 📂 Project Structure

EchoAi/
├── .gitignore
│
├── Backend/
│   ├── models/
│   │   └── Thread.js
│   ├── routes/
│   │   └── chat.js
│   ├── utils/
│   │   └── openai.js
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
│
└── Frontend/
    ├── .gitignore
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── vite.config.js
    ├── package.json
    ├── package-lock.json
    │
    ├── public/
    │   └── EchoAi_logo.png
    │
    └── src/
        ├── App.jsx
        ├── App.css
        ├── Chat.jsx
        ├── Chat.css
        ├── ChatWindow.jsx
        ├── ChatWindow.css
        ├── Sidebar.jsx
        ├── Sidebar.css
        ├── MyContext.jsx
        ├── index.css
        ├── main.jsx
        │
        └── assets/
            ├── EchoAi_logo.png
            ├── EchoAi_logo_fullName.png
            ├── EchoAi_logo_fullName2.png
            └── blacklogo.png

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- npm (comes with Node.js)

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/tanmaypawar23/EchoAi.git
   cd EchoAi
   ```

2. Set up the Backend

   ```bash
   cd Backend
   npm install
   npm start
   ```

3. Set up the Frontend

   ```bash
   cd Frontend
   npm install
   npm start
   ```

4. Open your browser and go to `http://localhost:3000` (or whichever port your app uses)

## 🔑 Environment Variables

Create a `.env` file inside the `Backend` folder and add the following (fill in your own values, never share real keys publicly):

```
API_KEY=your_api_key_here
PORT=5000
```

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo, make changes, and open a pull request.

## 📬 Contact
Tanmay Pawar

- GitHub: [@tanmaypawar23](https://github.com/tanmaypawar23)
