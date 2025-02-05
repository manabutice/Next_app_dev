const express = require("express");
const app = express();

app.get("/api/users/:id", (req, res) => {
  res.json({ id: req.params.id, name: "テストユーザー", age: 25 });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
