# Shopswiftly image server
## This is the micro service of an e-commerce website named Shopswiftly that is used to store and retrieve the images of the products in a file format. It is developed using node.js, express.js, mongodb and more.

### Installation instructions

Follow the below steps to set up the microservice in your local machine:

#### Prerequisites
- Node package manager(npm)
- Node JS
- Git

#### Steps to install the shopswiftly-profile microservice:

1. **Clone the repository**
    ```bash
   git clone https://github.com/sabareeshs786/shopswiftly-image-server
   cd shopswiftly-image-server

2. **Install the dependencies**
   ```bash
   npm install

3. **Create a .env file**
   
   In this the key to decrypt the access token and refresh token should be added. And also the URI of the mongodb database and the admin email id and password. Follow the upcoming steps to do this.
   
4. **Open terminal and run the following command**
   ```bash
   node
   require('crypto').randomBytes(64).toString('hex')
   ```
   Copy the 64 characters long string that is generated

5. **Add the following lines in the .env file that is created above**
   ```bash
   ACCESS_TOKEN_SECRET=COPIED_64_CHARACTERS_LONG_STRING
   ```
   Create another 64 characters long string with same command specified above and copy it.
   ```bash
   REFRESH_TOKEN_SECRET=COPIED_64_CHARACTERS_LONG_STRING
   ```

9. **Now run the following command to start a node.js server in development mode**
    ```bash
    npm run dev
    ```

### Features provided by this microservice

1. **Image storage and retrieval**
   In this microservice, the images of the products are stored and they can be retrieved using the HTTP request to this service

