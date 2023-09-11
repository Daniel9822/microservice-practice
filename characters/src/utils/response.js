module.exports = (res, status, data) => {
    res.status(status);
    res.send({
        error: false,
        data,
    });
};
