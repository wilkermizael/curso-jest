import calculator from "../src/calculator";

describe("arquivo testado", () => {
  it("returns true for valid params sum", () => {
    const sum = calculator.sum(1, 2);
    expect(sum).toBe(3);
  });

  it("returns false for invalid params", () => {
    const sub = calculator.sub(1, 2);
    expect(sub).toBe(-1);
  });

  it("returns false for invalid params", () => {
    const div = calculator.div(1, 2);
    expect(div).toBe(0.5);
  });

  it("returns false for invalid params", () => {
    const mul = calculator.mul(1, 2);
    expect(mul).toBe(2);
  });
});
