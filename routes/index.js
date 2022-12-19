const express = require('express');
const router = express.Router();
const login = 'admin1'
const password = 'admin2'

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/login', (req, res, next) => {
  res.render('login', { title: 'Logowanie' });
});

router.post('/login', (req, res) => {
  const body = req.body

  if (login === body.login && password === body.password) {
    req.session.admin = 1
    res.redirect('/admin')
  } else {
    res.redirect('/login')
  }
})

module.exports = router;
