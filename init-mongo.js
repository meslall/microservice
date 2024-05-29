db.createUser({
    user: 'root',
    pwd: 'password123',
    roles: [ { role: 'root', db: 'admin' } ]
  });