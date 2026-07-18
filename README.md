# Blood Bank

## Overview

Blood Bank is a web application designed to connect people in need of blood with potential donors quickly and efficiently.

Finding a blood donor during emergencies can be challenging. This platform allows users to search for suitable donors based on their blood group and location, making it easier to connect patients with available donors within the same city.

The platform allows donors to create and manage their profiles, ensuring their information remains accurate and accessible when needed.

With Blood Bank, saving lives becomes faster, easier, and more organized.

## Features

### Current Features

- Donor Registration
  Donors can register by providing their personal details, blood group, location, and contact information.

- User Authentication
  Secure login and authentication system using JWT to protect user accounts.

- Donor Search
  Users can search for available donors based on blood group and city.

- Modify Donor Information
  Registered donors can update their personal details, contact information, and donation-related information.

- Donor Profile Management
  Users can view and manage donor profiles.

- Responsive User Interface
  A clean and responsive interface built with React and Tailwind CSS.

### Upcoming Features

- Life Saving Contacts
  Provide emergency contacts for hospitals and blood centers.

- Emergency Broadcast System
  Send urgent blood requirement notifications to nearby eligible donors.

- Location-Based Matching
  Improve donor discovery by matching recipients with the closest available donors.

## Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Axios

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt

## API Features

The backend provides RESTful APIs for:

- User registration and authentication
- Donor registration
- Donor profile management
- Updating donor information
- Searching donors by blood group and city

## Running the Project

### Clone Repository

```bash
git clone <repository-url>
```

### Frontend Setup

```bash
cd bloodbank01
npm install
npm run dev
```

## Future Improvements

- Real-time emergency notifications
- SMS and email alerts
- Blood donation history tracking
- Hospital and blood bank integration
- AI-powered donor recommendations
