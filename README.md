# 🌦️ Weather Forecast App

A modern and responsive **Weather Forecast Application** built with **React + Vite + Tailwind CSS**, using the **OpenWeatherMap API**.  
It allows users to search for any city and view **current weather**, **hourly forecast**, and **weekly forecast** in a clean and user-friendly interface.

---

## 🚀 Live Demo

https://tayyab-weather-app.vercel.app/

---

## 📸 Screenshots

<img width="1600" height="743" alt="home" src="https://github.com/user-attachments/assets/f7da2d62-120e-405b-8bbd-5c5da29be64d" />
<img width="1600" height="743" alt="current-weather" src="https://github.com/user-attachments/assets/0485c150-8cac-416d-888c-ab2f6bcde86e" />

## ✨ Features

- 🔍 Search weather by city name
- 🌡️ Current temperature
- 🌤️ Weather conditions (Clear, Clouds, Rain, etc.)
- 💧 Humidity
- 🌬️ Wind speed
- 👀 Visibility & pressure
- ⏰ Hourly forecast
- 📅 Weekly forecast
- ❌ Error handling for invalid city
- 📱 Fully responsive design
- ⚡ Fast performance with Vite

---

## 🛠️ Tech Stack

- **React**
- **Vite**
- **Tailwind CSS**
- **OpenWeatherMap API**
- **Lucide React Icons**

---

## 📂 Project Structure

src/
├── components/
│ └── weather/
│ ├── SearchWeather.jsx
│ ├── WeatherCard.jsx
│ ├── WeatherCardItem.jsx
│ ├── WeatherIcon.jsx
│ ├── HourlyForecast.jsx
│ ├── HourlyForecastItem.jsx
│ ├── WeeklyForecast.jsx
│ └── WeeklyForecastItem.jsx
│
├── hooks/
│ ├── useWeather.js
│ └── useForecast.js
│
├── pages/
│ └── Weather.jsx
│
├── App.jsx
└── main.jsx

---

## 🔑 Environment Variables

Create a `.env` file in the root directory and add your **OpenWeatherMap API key**:

VITE_WEATHER_API_KEY=your_api_key_here

---

## 📦 Installation & Setup

1️⃣ Clone the repository:

```bash
git clone https://github.com/Tayyab365/weather-app.git
2️⃣ Go to project folder:

bash
Copy code
cd weather-app
3️⃣ Install dependencies:

bash
Copy code
npm install
4️⃣ Run development server:

bash
Copy code
npm run dev
🚀 Deployment (Vercel)
Push project to GitHub

Import repository in Vercel

Add Environment Variable:

VITE_WEATHER_API_KEY

Click Deploy

📌 API Used
OpenWeatherMap API

Current Weather

5 Day / 3 Hour Forecast

👨‍💻 Author
Muhammad Tayyab
GitHub: https://github.com/Tayyab365

```
