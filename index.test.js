const promptmaker = require(".");

test("generates a prompt string", () => {
  const prompt = promptmaker();
  expect(typeof prompt).toBe("string");
});

test("takes an optional subject", () => {
  const prompt = promptmaker({ subject: "cheese" });
  expect(typeof prompt).toBe("string");
  expect(prompt).toMatch(/cheese/);
});

test("allows artist to be disabled", () => {
  const prompt = promptmaker({ subject: "untitled", artist: false });
  expect(typeof prompt).toBe("string");
  console.log(prompt)
  expect(prompt).not.toContain(" by ");
});

test("takes lots of options", () => {
  const prompt = promptmaker({
    medium: "oil painting",
    subject: "cheese",
    movement: "american impressionism",
    artist: "Anna Hotchkis",
  });
  expect(typeof prompt).toBe("string");
  expect(prompt).toMatch(
    "oil painting of cheese american impressionism by Anna Hotchkis, "
  );
});

test("allows flavors to be disabled", () => {
  const prompt = promptmaker({
    medium: "oil painting",
    subject: "cheese",
    movement: "american impressionism",
    artist: "Anna Hotchkis",
    flavors: false,
  });
  expect(typeof prompt).toBe("string");
  expect(prompt).toBe(
    "oil painting of cheese american impressionism by Anna Hotchkis"
  );
});
