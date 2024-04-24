# Use a Node.js base image with a specific version
FROM node:14-alpine

# Set the working directory inside the Docker container
WORKDIR /app

# Copy the package.json and package-lock.json (or yarn.lock) files to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the working directory
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port on which the Next.js application will run (default is 3000)
EXPOSE 3000

# Start the Next.js application
CMD ["npm", "start"]