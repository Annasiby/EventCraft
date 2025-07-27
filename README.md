# EventCraft

A modern event management website built with React, Vite, and Firebase.  
Easily manage events, showcase your portfolio, and collect client testimonials.

## Features

- Responsive, modern UI with Tailwind CSS
- User authentication (login/signup)
- Event portfolio with categories
- Contact form
- Client testimonials
- Admin and client roles (via Firebase)
- Firestore integration for dynamic data

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm

### Installation

```bash
git clone https://github.com/your-username/eventcraft.git
cd eventcraft
npm install
```

### Running the App

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) (or as shown in your terminal).

---

## Firebase Setup

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Enable Authentication and Firestore (see `FIRESTORE_SETUP.md` for detailed steps and schema).
3. Copy the template file and add your credentials:
   ```bash
   cp src/firebase/config.template.js src/firebase/config.js
   ```
4. Replace the placeholder values in `src/firebase/config.js` with your actual Firebase credentials:

```js
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-actual-project-id.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-actual-project-id.appspot.com",
  messagingSenderId: "your-actual-messaging-sender-id",
  appId: "your-actual-app-id",
  measurementId: "your-actual-measurement-id"
};
```

**Note**: The `config.js` file is ignored by Git to protect your credentials. Use the template file as a reference.

---

## Screenshots

## Home Page

![Home Page](screenshots/home1.png)

![Home Page](screenshots/home2.png)

![Home Page](screenshots/home3.png)

![Home Page](screenshots/home4.png)

## About Us

![About Us](screenshots/Aboutus1.png)

![About Us](screenshots/Aboutus2.png)



## Contact

![Contact](screenshots/Contact1.png)

![Contact](screenshots/Contact2.png)

![Contact](screenshots/Contact3.png)


## Login

![Login](screenshots/login.png)

## Sign up

![Sign up](screenshots/signup.png)




## Folder Structure

```
src/
  components/    # Reusable UI components
  context/       # React context providers
  firebase/      # Firebase config
  pages/         # Page components (Home, About, Portfolio, etc.)
  App.jsx        # Main app with routing
  main.tsx       # Entry point
```

---

## License

Made for Learning purpose....
