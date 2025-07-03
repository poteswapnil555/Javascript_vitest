import { describe, it, expect } from "vitest";
import { calculateAvg, factorial, fizzBuzz, max } from "../src/eg.js";

describe("max()", () => {
  it("should return the first argument if it is greater", () => {
    expect(max(5, 2)).toBe(5);
  });

  it("should return the second argument if it is greater", () => {
    expect(max(2, 5)).toBe(5);
  });

  it("should return either if both are equal", () => {
    expect(max(5, 5)).toBe(5);
  });
});

describe("fizzBuzz()", () => {
  it("should return FizzBuzz if divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  });

  it("should return Fizz if divisible by 3 only", () => {
    expect(fizzBuzz(9)).toBe("Fizz");
  });

  it("should return Buzz if divisible by 5 only", () => {
    expect(fizzBuzz(10)).toBe("Buzz");
  });

  it("should return number as string if not divisible by 3 or 5", () => {
    expect(fizzBuzz(7)).toBe("7");
  });
});

describe("calculateAvg()", () => {
  it("Should Return NaN If Given Empty Array", () => {
    expect(calculateAvg([])).toBe(NaN);
  });
});

describe("factorial()", () => {
  it("should return undefined if given Negative Number", () => {
    expect(factorial(-1)).toBe(undefined);
  });
});
