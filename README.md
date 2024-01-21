<h1>SleepTracker App Readme</h1>

<h2>Overview</h1>
SleepTracker is a robust sleep monitoring application developed using Node.js, Tailwind CSS, HTML, CSS, and JavaScript. It allows users to monitor and analyze their sleep patterns efficiently.

Usage
Follow these steps to set up and use the SleepTracker app:

1. MongoDB Connection
Before running the application, ensure you provide a MongoDB connection string. Add the following line to the .env file in the backend directory:
```
db_connect=your_mongodb_connection_string

```
2. Start Development
Run the following command to start development and launch the Express server:
```
npm run dev 
```

3. Access the Application
Open the frontend/index.html file in your preferred browser to access the SleepTracker application.

4. Optional Configuration
You can customize the host (default is localhost) in both the frontend and backend configurations if needed.

5. Style Customization
If you want to change the style, run the following command in the frontend:

To rebuild the Tailwind CSS styles based on your configuration, use this:
```
npm run tailwind
```

<h2> Contributing </h2>
If you would like to contribute to the SleepTracker app, please follow the standard GitHub flow:

1 • Fork the repository. <br>
2 • Create a feature branch: git checkout -b feature/my-feature.<br>
3 • Commit your changes: git commit -m 'Add my feature'.<br>
4 • Push to the branch: git push origin feature/my-feature.<br>
5 • Open a pull request.<br>

<h2> Issues </h2>
If you encounter any issues or have suggestions for improvement, please create a GitHub issue. We appreciate your feedback and contributions.

License
This project is licensed under the MIT License. Feel free to use and modify the code as needed.

Happy Monitoring!
