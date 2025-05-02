const http = require('http');
const PORT = process.env.PORT || 3002;

http.createServer((req, res) => {
  res.end(`Response from app on port ${PORT}`);
}).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});