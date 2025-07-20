# Use the official Node.js image
FROM node:18

# Set working directory in container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install node dependencies
RUN npm install

# Copy the rest of the app
COPY . .

EXPOSE 8080

# Start your app
CMD ["node", "index.js"]