require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const courseRoutes = require('./routes/courses');
const sectionRoutes = require('./routes/sections');
const regRoutes = require('./routes/registrations');
const tokenRoutes = require('./routes/tokens');

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/sections', sectionRoutes);
app.use('/api/registrations', regRoutes);
app.use('/api/tokens', tokenRoutes);

app.get('/', (req, res) => res.send('PAS Backend Running Successfully!'));

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
