const getAll = async function(req, res) {
    res.send('Get all jobs')
}

const getOne = async function(req, res) {
    res.send('get One job')
}

const createOneJob = async function(req, res) {
    res.send('create One Job')
}

const updateOneJob = async function(req, res) {
    res.send('update One Job')
}

const deleteOneJob = async function(req, res) {
    res.send('delete One Job')
}

module.exports = {
    getAll,
    getOne,
    createOneJob,
    updateOneJob,
    deleteOneJob,
}