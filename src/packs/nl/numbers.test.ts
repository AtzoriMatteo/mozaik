import { describe, expect, it } from "vitest";
import { sayDigits, sayNumber, sayTime, sayYear } from "./numbers";

describe("saying numbers in Dutch", () => {
  it.each([
    [7, "zeven"], [21, "eenentwintig"], [22, "tweeëntwintig"], [83, "drieëntachtig"], [100, "honderd"],
    [220, "tweehonderdtwintig"], [500, "vijfhonderd"], [1250, "twaalfhonderdvijftig"], [2600, "tweeduizend zeshonderd"],
    [100000, "honderdduizend"],
  ])("%i → %s", (n, words) => expect(sayNumber(n)).toBe(words));

  it("says years the everyday way", () => {
    expect(sayYear(1985)).toBe("negentien vijfentachtig");
    expect(sayYear(1602)).toBe("zestienhonderdtwee");
    expect(sayYear(2008)).toBe("tweeduizend acht");
    expect(sayYear(1900)).toBe("negentienhonderd");
  });

  it("says clock times the way people do", () => {
    expect(sayTime("08.14")).toBe("veertien over acht");
    expect(sayTime("16.40")).toBe("tien over half vijf");
    expect(sayTime("10.04")).toBe("vier over tien");
    expect(sayTime("09.45")).toBe("kwart voor tien");
    expect(sayTime("14.25")).toBe("vijf voor half drie");
  });

  it("reads phone numbers digit by digit", () => {
    expect(sayDigits("023")).toBe("nul twee drie");
  });
});
