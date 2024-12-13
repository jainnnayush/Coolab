const express = require('express')
const storeuser = require('./api/storeuser');
const user = require('./api/user');
const projects = require('./api/project');
const courses = require('./api/courses');
const collabs = require('./api/collabs');
const feed = require('./api/feed');
const port = 3001;
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');
const rateLimit = require('express-rate-limit');
const app = express();
app.use(cors());


const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  // Event listener for incoming messages
  socket.on('chat message', (msg) => {
    // Implement message filtering logic here
    if (msgContainsSpam(msg)) {
      // Notify the user of spam detection
      socket.emit('spam detected', 'Your message was detected as spam.');
      return;
    }

    // Broadcast the message to all connected clients
    io.emit('chat message', msg);
  });

  // Event listener for disconnections
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
})

// Initialize Firebase
// const app1 = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app1);

app.use(express.json());
app.use('/api', storeuser);
app.use('/api', user);
app.use('/api', projects);
app.use('/api', courses);
app.use('/api', collabs);
app.use('/api', feed);

app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});