const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.Book
          .find()
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Book
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    create: function(req,res) {
        db.Book
          .create({
            id: req.body.id.Book,
            title: req.body.title,
            authors: req.body.authors,
            description: req.body.description,
            thumbnail: req.body.thumbnail,
            href: req.body.href
          })
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
    },
    remove: function(req,res) {
        db.Book
          .findById({ id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err))
    }
};