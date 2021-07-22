const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  // get token
  const token = req.header('x-auth-token')

  // chech if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token , authentication denied' })
  }

  //   verify Token
  try {
    jwt.verify(token, 'sqqqq', (err, decoded) => {
      if (err) {
        return res.status(401).json({ msg: 'Token is not valid' })
      } else {
        req.user = decoded.user
        next()
      }
    })
  } catch (error) {
    console.error('something wrong with auth middleware')
    res.status(500).json({ msg: 'Server Error' })
  }
}
