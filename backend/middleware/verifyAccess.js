const jwt = require('jsonwebtoken')

function verifyToken(req,res,next) {

    const token = req.cookies.token || ''
    console.log(token)
    if (!token) {
        console.log("NO TOKEN")
        return res.status(401).send("Acceso no autorizado")
    }
    // Validar el token 
    else {
        jwt.verify(token, process.env.SECRET, function(err, data){
            if (err){
                console.log(err)
                return res.status(400).send("Token invalido")
            }
            else {
                req.userId = data.id
                console.log(data)
                next()
            }
        })
    }

}

module.exports = verifyToken