// Home logic

export const Home = async (req, res) => {
  try {
    res.send("Hello guys welcome to Home page");
  } catch (error) {
    console.log("something wrong to get home data");
  }
};

// Api page logic

export const Login = async (req, res) => {
  try {
    res.send("welcome to login page");
  } catch (error) {
    console.log("something is wrong to get login page");
  }
};


