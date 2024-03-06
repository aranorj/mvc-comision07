
const usersController = { 
    getAll: (req, res) => res.send("Estas viendo el listasdo de usuarios"),
    getOne: (req, res) => res.send(`Estas viendo el detalle del usuario nro ${req.params.id}`)
}

module.exports = usersController;
