const db = require('../../database/models');

const usersAPIController = {
    'list': (req, res) => {
        db.User.findAll()
        .then(users => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: users.length,
                    url: 'api/users'
                },
                data: users
            }
                res.json(respuesta);
            })
    },
    
    'detail': (req, res) => {
        db.User.findByPk(req.params.id)
            .then(user => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: user.length,
                        url: '/api/user/:id'
                    },
                    data: user
                }
                res.json(respuesta);
            });
    },

    'last': async (req, res) => {
        await db.User.findOne({
            order: [['id', 'ASC']]
        }).then(users => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: users.length,
                    url: 'api/users/last'
                },
                data: users
            }
                res.json(respuesta);
            })
    },
}

module.exports = usersAPIController;