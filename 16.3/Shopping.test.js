const request = require('supertest');
const app = require('./Shopping'); 
let items = require('./fakeDb'); 

beforeEach(() => {
  items.length = 0;
  items.push({ name: "popsicle", price: 1.45 });
});

describe("GET /items", () => {
  test("Returns list of items", async () => {
    const res = await request(app).get('/items');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([{ name: "popsicle", price: 1.45 }]);
  });
});

describe("POST /items", () => {
  test("Adds new item", async () => {
    const res = await request(app).post('/items').send({ name: "cheerios", price: 3.40 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ added: { name: "cheerios", price: 3.40 } });
    expect(items.length).toBe(2);
  });
});

describe("GET /items/:name", () => {
  test("Gets a single item", async () => {
    const res = await request(app).get('/items/popsicle');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ name: "popsicle", price: 1.45 });
  });

  test("Responds with 404 if not found", async () => {
    const res = await request(app).get('/items/nonexistent');
    expect(res.statusCode).toBe(404);
  });
});

describe("PATCH /items/:name", () => {
  test("Updates an item", async () => {
    const res = await request(app).patch('/items/popsicle').send({ name: "icepop", price: 2.00 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ updated: { name: "icepop", price: 2.00 } });
  });
});

describe("DELETE /items/:name", () => {
  test("Deletes an item", async () => {
    const res = await request(app).delete('/items/popsicle');
    expect(res.statusCode).toBe(200);
    expect(items.length).toBe(0);
  });
});
