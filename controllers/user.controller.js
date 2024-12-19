const helloToUser = async(req, res) => {

    const a = 1;
    const b = 2;

    const c = a + b;

  res.send(`Hello User! ${c}`);
};

module.exports = {
  helloToUser,
};
