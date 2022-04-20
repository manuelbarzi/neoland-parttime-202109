module.exports = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    
    next()
}