// routes/pages.js
const pagesRouter = require("express").Router();
const { sendIndex } = require("../controllers/auth.js");

pagesRouter.get("/", sendIndex);

const sendIndex = (req, res) => {
    if (req.cookies.jwt) {
      try {
        jwt.verify(req.cookies.jwt, "some-secret-key");
        return res.sendFile(
          path.join(__dirname, "../public/admin/dashboard.html")
        );
      } catch (err) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      }
    }
    res.sendFile(path.join(__dirname, "../public/index.html"));
  };
  pagesRouter.get("/admin/**", sendDashboard); 