const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);

server.put('/bikes/:id', (req, res) => {
  const id = req.params.id;
  const { name, description, price } = req.body;

  const db = router.db;
  const bike = db.get('bikes').find({ id: parseInt(id) }).value();

  if (!bike) {
    return res.status(404).json({ error: 'Bike not found' });
  }

  db.get('bikes')
    .find({ id: parseInt(id) })
    .assign({ name, description, price })
    .write();

  res.json({ success: true });
});

server.use(router);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
