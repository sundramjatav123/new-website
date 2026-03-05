const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const contentRoutes = require('./routes/contentRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoutes);
['blogs', 'faqs', 'projects', 'services'].forEach((type) => {
  app.use(`/api/${type}`, (req, _res, next) => {
    req.params.type = type;
    next();
  }, contentRoutes);
});

app.get('/api/health', (_req, res) => res.json({ ok: true, service: 'alphaweb-backend' }));

app.listen(process.env.PORT || 5000, () => {
  console.log(`Backend running on port ${process.env.PORT || 5000}`);
});
