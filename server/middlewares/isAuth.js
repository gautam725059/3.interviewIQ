import jwt from "jsonwebtoken"


const isAuth = async (req,res,next) => {
    try {
        // support token coming either from cookie or from Authorization header
        let token = null
        const authHeader = req.headers.authorization
        if (authHeader && authHeader.startsWith("Bearer ")) {
            token = authHeader.split(" ")[1]
        } else if (req.cookies && req.cookies.token) {
            token = req.cookies.token
        }

        if (!token) {
            return res.status(400).json({ message: "user does not have a token" })
        }

        const verifyToken = jwt.verify(token, process.env.JWT_SECRET)

        if (!verifyToken) {
            return res.status(400).json({ message: "user does not have a valid token" })
        }
        req.userId = verifyToken.userId

        next()
   

    } catch (error) {
        return res.status(500).json({message:`isAuth error ${error}`})
    }
    
}

export default isAuth