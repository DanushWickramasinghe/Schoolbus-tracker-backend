const login = async (req, res) => {
    console.log('login controller');
    console.log(req.body);

    res.send('login success Udara');
};

const register = async (req, res) => {
    // register controller logic
};

const refreshToken = async (req, res) => {
    // refresh token controller logic
};

const verifyRegisterOtp = async (req, res) => {
    // verify register otp controller logic
};

module.exports = {
    login,
    register,
    refreshToken,
    verifyRegisterOtp
};