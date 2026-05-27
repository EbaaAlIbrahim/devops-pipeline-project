# 1. Use a lightweight, official Node Linux system as our base
FROM node:20-alpine

# 2. Set the working folder inside the container
WORKDIR /app

# 3. Copy our app setup and code files from our computer into the container
COPY package.json test.js ./

# 4. Tell Docker what script to execute when the container turns on
CMD ["node", "test.js"]

