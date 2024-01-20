require('dotenv').config();
const express = require('express');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');

const { logger } = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const verifyJWT = require('./middleware/verifyJWT');
const verifyRoles = require('./middleware/verifyRoles');
const ROLES_LIST = require('./config/roles_list');

const app = express();
const PORT = process.env.PORT || 3502;

app.use(logger);
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './images');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
var upload = multer({ storage: storage });

// Define routes
// For static files
app.use('/images', express.static('images'));

app.use(verifyJWT);

app.post('/image/add', verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor), upload.array('images', 10), async (req, res) => {
  try {
    // Extract file information from multer
    const uploadedFiles = req.files;

    // Process or store the files as needed
    // Your file handling logic goes here

    // Send a response to the Inventory Microservice
    res.status(200).json({ message: 'Images uploaded and stored successfully!', uploadedFiles });
  } catch (error) {
    console.error('Error uploading images:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));