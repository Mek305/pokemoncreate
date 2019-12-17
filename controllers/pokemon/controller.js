//  This file will communicate between the user request and any database actions
const Pokemon = require('../../models/pokemon.js');

const controller = {}

controller.index = (req, res) => {
    Pokemon.findAll()
    .then((data) =>{
        res.render('pokemon/index', {pokemon:data})
    })
    .catch(err => console.log('ERROR:',err))
}

controller.show = (req, res) => {
    const id = req.params.id;
    Pokemon
      .findById(id)
      .then((data) => {
        res.render('pokemon/show',data);
      })
      .catch(err => console.log('ERROR:', err));
  }

  controller.new = (req, res) => {
    res.render('pokemon/new');
  };
  
  controller.update = (req, res) => {
    const id = req.params.id;
    Pokemon
      .findById(id)
      .then(data => {
        res.render('pokemon/update', data);
      })
  };
  


module.exports = controller