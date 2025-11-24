The steps below provide a complete guide to download, configure, and run your Visionary AI Captioner Node.js/React application on your desktop, starting from a GitHub repository.

1. Get the Project Code
The first step is to get a copy of the repository onto your local machine.

Locate the Repository: Navigate to your project's page on GitHub.

Download/Clone: Choose one of the following methods to download the code:

Option A: Download ZIP (Simplest): Click the green < > Code button and select "Download ZIP." Unzip the file and place the resulting folder (e.g., visionary-ai-captioner-main) in your desired location on your desktop.

Option B: Clone with Git (Recommended): If you have Git installed, click the < > Code button, copy the HTTPS URL, open your terminal (Command Prompt, PowerShell, or Terminal), and run the following command, replacing the URL:

Bash

git clone [YOUR_REPOSITORY_URL]
2. Prerequisites: Install Node.js
This application is built with Node.js and npm (Node Package Manager).

Check Installation: Open your terminal and run the following commands to check if Node.js and npm are already installed:

Bash

node -v
npm -v
Install: If either command returns an error, you must install the LTS (Long-Term Support) version of Node.js from the official Node.js website, which includes npm.

3. Configure Your Gemini API Key
The application needs your unique Gemini API key to communicate with the model.

Create Your Key:

Go to Google AI Studio.

Navigate to the "API Key" section.

Click "Create API Key" and copy the generated key. Treat this key like a password.

Set the Environment Variable:

Navigate to the root directory of your project folder (the one you downloaded in Step 1).

Find the file named .env.local.

Open the file and replace the placeholder text with your actual key:

Plaintext

GEMINI_API_KEY=YOUR_ACTUAL_GEMINI_API_KEY_HERE
Note: The file .gitignore prevents this key from being accidentally committed to your public GitHub repository.

4. Run the Application
Now you will use npm to install the necessary libraries and start the development server.

Navigate to Project: Open your terminal and change the directory to your project folder:

Bash

cd /path/to/your/visionary-ai-captioner-folder 
Install Dependencies: Run the install command to download all required packages (e.g., React, @google/genai):

Bash

npm install
Start the Server: Execute the script that starts the local development server (powered by Vite):

Bash

npm run dev
View App: The terminal will print a local URL (e.g., http://localhost:5173/). Open this URL in your web browser. Your Visionary AI Captioner is now running locally!
