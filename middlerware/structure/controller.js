module.exports.handleGetTodos = (req, res) => {
    const { name } = req.query;
    return res.send({ message: `Welcome ${name} to team` });
  };