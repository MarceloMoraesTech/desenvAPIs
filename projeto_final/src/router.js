const express = require('express');
const deskscontroller = require('./controllers/desksController');
const passport = require('passport');
const session = require('express-session');

const router = express.Router();

require('./auth');

router.use(session({secret:'cats',resave:false,saveUninitialized: false}));
router.use(passport.initialize());
router.use(passport.session());

//manda mensagem de não autorizado caso não esteja logado
function isLoggedIn(req,res,next){
  req.user ? next() : res.sendStatus(401);
}

router.get('/reservas',deskscontroller.getAll);

router.get('/estacoes_trabalho',deskscontroller.getAllDesks);

router.post('/estacoes_trabalho',deskscontroller.criarReserva);

router.delete('/deletar/:id',deskscontroller.deleteReserva);

router.put('/reservas/:id',deskscontroller.updateReserva);

router.get('/', (req,res)=> {
  res.send('<a href="/auth/google">Authenticate with Google</a>');
});

router.get('/auth/google', passport.authenticate('google',{scope: ['email','profile']})
);

router.get('/auth/google/callback', passport.authenticate('google', {successRedirect:'/protected', failureRedirect:'/auth/failure'}));

router.get('/protected', isLoggedIn, (req,res)=>{
  res.send(`Hello ${req.user.displayName}`);
});

router.get('/logout',(req,res)=>{
  req.logOut(() => {
    req.session.destroy();
    res.send('Goodbye!');
  });
});

router.get('/auth/google/failure',(req,res)=>{
  res.send('Failed to authenticate..');
});


module.exports = router;