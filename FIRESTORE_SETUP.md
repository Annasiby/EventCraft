# Firebase Firestore Setup Guide

## Required Firestore Collections and Schema

### 1. users
This collection stores additional user profile information (Firebase Auth handles authentication).
```
{
  id: string (document ID matches Firebase Auth UID),
  displayName: string,
  email: string,
  createdAt: timestamp,
  updatedAt: timestamp,
  role: string (default: "client", can be "admin")
}
```

### 2. events
Stores event portfolio information.
```
{
  id: string (auto-generated),
  title: string,
  description: string,
  category: string ("Wedding", "Corporate", "Birthday", "Anniversary", "Other"),
  image: string (URL to image),
  date: string (ISO date format),
  guests: number,
  venue: string (optional),
  budget: string (optional),
  featured: boolean (default: false),
  createdAt: timestamp,
  updatedAt: timestamp,
  createdBy: string (user UID)
}
```

### 3. testimonials
Stores client testimonials.
```
{
  id: string (auto-generated),
  name: string,
  event: string,
  text: string,
  rating: number (1-5),
  image: string (URL to client photo),
  featured: boolean (default: false),
  createdAt: timestamp,
  approved: boolean (default: false)
}
```

### 4. contacts
Stores contact form submissions.
```
{
  id: string (auto-generated),
  name: string,
  email: string,
  phone: string (optional),
  eventType: string,
  eventDate: string (optional),
  guests: string (optional),
  budget: string (optional),
  message: string,
  status: string ("new", "contacted", "quoted", "booked", "completed"),
  createdAt: timestamp,
  updatedAt: timestamp
}
```

### 5. services
Stores service offerings.
```
{
  id: string (auto-generated),
  title: string,
  description: string,
  features: array of strings,
  price: string (optional),
  category: string,
  active: boolean (default: true),
  order: number (for sorting),
  createdAt: timestamp,
  updatedAt: timestamp
}
```

## Firebase Setup Steps

### 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name (e.g., "eventcraft-website")
4. Follow the setup wizard

### 2. Enable Authentication
1. In Firebase Console, go to "Authentication"
2. Click "Get started"
3. Go to "Sign-in method" tab
4. Enable "Email/Password" provider
5. Disable "Email link (passwordless sign-in)" if not needed

### 3. Set up Firestore Database
1. Go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (we'll set up security rules later)
4. Select your preferred location

### 4. Get Firebase Configuration
1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click "Web" icon to add web app
4. Register app with nickname
5. Copy the configuration object

### 5. Update Your Code
Replace the configuration in `src/firebase/config.js`:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

### 6. Set up Firestore Security Rules
In Firestore Console, go to "Rules" tab and replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can create, read, and update their own user document
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Anyone can read events and testimonials (for public display)
    match /events/{eventId} {
      allow read: if true;
      allow create, update, delete: if request.auth != null && 
        (request.auth.token.role == "admin" || resource.data.createdBy == request.auth.uid);
    }
    
    match /testimonials/{testimonialId} {
      allow read: if resource.data.approved == true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth != null && request.auth.token.role == "admin";
    }
    
    // Contacts can be created by anyone, managed by admins
    match /contacts/{contactId} {
      allow create: if true;
      allow read, update, delete: if request.auth != null && request.auth.token.role == "admin";
    }
    
    // Services can be read by anyone, managed by admins
    match /services/{serviceId} {
      allow read: if true;
      allow create, update, delete: if request.auth != null && request.auth.token.role == "admin";
    }
  }
}
```

### 7. Seed Initial Data (Optional)

You can manually add some initial data in Firestore Console:

#### Sample Events:
```json
{
  "title": "Elegant Garden Wedding",
  "description": "A beautiful outdoor wedding ceremony with 150 guests",
  "category": "Wedding",
  "image": "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg",
  "date": "2024-06-15",
  "guests": 150,
  "featured": true,
  "createdAt": "2024-01-01T00:00:00Z",
  "createdBy": "admin"
}
```

#### Sample Testimonials:
```json
{
  "name": "Sarah Johnson",
  "event": "Wedding",
  "text": "EventCraft made our dream wedding come true! Every detail was perfect.",
  "rating": 5,
  "image": "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
  "approved": true,
  "featured": true,
  "createdAt": "2024-01-01T00:00:00Z"
}
```

## Files to Update After Firebase Setup

### 1. Update Firebase Configuration
File: `src/firebase/config.js`
- Replace the firebaseConfig object with your actual Firebase project credentials

### 2. Environment Variables (Optional but Recommended)
Create `.env` file in project root:
```
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
VITE_FIREBASE_APP_ID=your-app-id
```

Then update `src/firebase/config.js`:
```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

## Features Ready to Use After Setup

1. **User Authentication**: Login/Signup with email and password
2. **Contact Form**: Stores submissions in Firestore
3. **Event Portfolio**: Displays events from Firestore with filtering
4. **Testimonials**: Shows approved testimonials from database
5. **Admin Functions**: Ready for admin dashboard implementation

## Next Steps

1. Set up Firebase project and get configuration
2. Update the config file with your credentials
3. Test authentication by creating an account
4. Test contact form submission
5. Add initial data to collections for testing
6. Optionally implement admin dashboard for content management

The website will work with fallback data before Firebase setup, but full functionality requires the Firebase configuration to be completed.