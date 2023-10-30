# MVC : MODEL VIEW CONTROLLER

The Model-View-Controller (MVC) architectural pattern is a design pattern commonly used in software development, especially in the context of building graphical user interface (GUI) applications. It helps organize code and separates different aspects of an application to improve maintainability and scalability

## MODEL

- The Model represents the core data and business logic of the application. It encapsulates the data and defines how it should be manipulated.
- It is responsible for maintaining the state of the application, processing data, and interacting with the database or external services.
- Changes to the Model can trigger updates to the View, ensuring that the user interface reflects the current state of the data.

## VIEW

- The View is responsible for presenting the data to the user and capturing user interactions.
- It represents the user interface components such as buttons, text fields, and screens.
- Views are often passive and should not contain business logic. Instead, they retrieve data from the Model and display it to the user.
- User actions, like button clicks or input, are typically forwarded to the Controller for processing.

## CONTROLLER

- The Controller acts as an intermediary between the Model and the View. It handles user input, processes it, and updates the Model accordingly.
- Controllers contain application-specific logic and serve as the glue between the Model and the View.
- They respond to user events, update the Model, and trigger updates in the View to reflect changes in the data.

## Advantages

- __Separation of Concerns__: MVC separates the responsibilities of data management, user interface, and application logic, making it easier to maintain and modify each component independently.
- __Reusability__: Components are modular and can often be reused in different parts of the application or in other projects.
- __Testability__: The separation of concerns allows for more effective unit testing of individual components (Model, View, and Controller) to ensure they work correctly.
- __Scalability__: As an application grows in complexity, MVC helps maintain a structured and organized codebase, making it easier to add new features or make changes without introducing unexpected issues.

## MVC in MERN

- __MODEL__ : Data interactions with our DB (MONGO DB)

```javascript
/server/models/userModel.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

module.exports = mongoose.model('User', userSchema);

```

- __VIEW__ : the View is often represented by the frontend, in our case React.

```javascript
// client/src/components/UserProfile.js
import React from 'react';

function UserProfile({ user }) {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;

```

- __CONTROLLER__:  typically refers to the server-side code that handles requests, routes them to the appropriate functions, and interacts with the Model and View.

```javascript

// server/routes/user.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Controller to handle user profile retrieval
router.get('/profile/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
```
