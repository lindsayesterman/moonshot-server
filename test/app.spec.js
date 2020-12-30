const app = require("../src/app");
const knex = require("knex");

describe("Endpoints", function () {
  let db;

  console.log(process.env.TEST_DATABASE_URL);

  before("make knex instance", () => {
    db = knex({
      client: "pg",
      connection: process.env.TEST_DATABASE_URL,
    });
    app.set("db", db);
  });

  after("disconnect from db", () => db.destroy());

  before("clean the table", () =>
    db.raw("TRUNCATE projects RESTART IDENTITY CASCADE")
  );

  afterEach("cleanup", () =>
    db.raw("TRUNCATE projects RESTART IDENTITY CASCADE")
  );

  function makeProjectsArray() {
    return [
      {
        id: 1,
        name: "scrtime saver",
        description: "app for digital minimalism",
        features: "",
        author: "",
        topic: "tech",
        date_created: "2029-01-22T16:28:32.615Z",
      },
      {
        id: 2,
        name: "project finder",
        description: "helps young devs build portfolio",
        features: "",
        author: "",
        topic: "other",
        date_created: "2029-01-22T16:28:32.615Z",
      },
    ];
  }

  context("Given there are projects in the database", () => {
    const testProjects = makeProjectsArray();

    beforeEach("insert projects", () => {
      return db.into("projects").insert(testProjects);
    });

    it("responds with 200 and all of the users", () => {
      return supertest(app).get("/api/projects").expect(200, testProjects);
    });
  });
});
