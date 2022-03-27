// app.use((req, res) => {
//   console.log("Hello !!!");
//   res.send("Hey whatsapp!!!");
// });

app.get("/");

app.get("/greetings", (req, res) => {
  res.send("Hi there!!!");
});
//                                   NULL (ERROR 404)
//                                   ||
// FRONTEND SE CALL ==> CORS ==> SEARCH ROUTE ==> RUN FUNCTION
app.get("/obj", myFunction);

app.get("/r/:alpha", (req, res) => {
  let showcaseName = req.params.alpha;
  // console.dir(req);
  res.send(`Hello ${showcaseName}`);
});

app.get("/insta/:username/:postCount/:followers", (req, res) => {
  let { followers, username, postCount } = req.params;

  // console.dir(req);
  res.send(
    `<h1> Hi ${username}, you have posted total no of ${postCount} posts and you have ${followers} followers </h1>`
  );
});

app.get("/dogs", (req, res) => {
  console.log(req.query);
  // let followers = req.query.followers;
  let { followers, color } = req.query;
  res.send(`<h1>hello ${followers} color is ${color} </h1>`);
});

// ===============================
// POST METHOD
// ===============================

app.post("/college/:name", (req, res) => {
  let { name } = req.params;
  res.send(`<h1> Hi Your college ${name} has been saved.</h1> `);
});

app.get("/college/:name", (req, res) => {
  let { name } = req.params;
  res.send(
    `<h1> Hi Your college ${name} has been saved.It is a GET Request</h1> `
  );
});
