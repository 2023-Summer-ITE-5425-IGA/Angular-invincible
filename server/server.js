const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'secret-key';

server.use(cors());
server.use(jsonServer.bodyParser);
server.use(middlewares);

server.post('/api/register', async (req, res) => {
  const { username, password } = req.body;

  const user = router.db
    .get('users')
    .find({ username })
    .value();

  if (user) {
    return res.status(400).json({ message: 'User already exists' });
  }

  const hashedPassword = bcrypt.hashSync(password, 8);
  const newUser = { id: Date.now(), username, password: hashedPassword };

  router.db.get('users').push(newUser).write();

  const token = jwt.sign({ id: newUser.id }, SECRET_KEY);
  return res.status(200).send({ auth: true, token });
});

server.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  const user = router.db
    .get('users')
    .find({ username })
    .value();

  if (!user) {
    return res.status(404).send('User not found.');
  }

  const passwordIsValid = bcrypt.compareSync(password, user.password);
  if (!passwordIsValid) {
    return res.status(401).send({ auth: false, token: null });
  }

  const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: 86400 });
  res.status(200).send({ auth: true, token });
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});
