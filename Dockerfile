# Use an official Node.js image
FROM node:20-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the port your app runs on (adjust if needed)
EXPOSE 3000

# Start the Lovable development server
CMD ["npm", "run", "dev"]
