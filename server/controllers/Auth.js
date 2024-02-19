const signup = async function(req, res) {
    res.send('Signup')
}

const signin = async function(req, res) {
    res.send('Signin')
}

module.exports = {
    signup,
    signin,
}