import fs from "fs";

fs.readFile("../data/users.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  }

  const users = JSON.parse(data);

  fs.readFile("../data/posts.json", "utf8", (err1, data1) => {
    if (err1) {
      console.log(err1);
    }

    const posts = JSON.parse(data1);

    const result = users.map((user) => {
      return posts.filter((post) => post.userId === user.id);
    });

    console.log(result);
  });
});
