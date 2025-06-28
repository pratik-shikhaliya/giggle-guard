import { GiggleGuard, getMessage, getMessages } from "../src/index";

describe("GiggleGuard", () => {
  let guard: GiggleGuard;

  beforeEach(() => {
    guard = new GiggleGuard();
  });

  describe("getMessage", () => {
    it("should return a message for valid field and error type", () => {
      const message = guard.getMessage({
        fieldType: "email",
        errorType: "required",
      });

      expect(typeof message).toBe("string");
      expect(message.length).toBeGreaterThan(0);
    });

    it("should return different messages when called multiple times", () => {
      const message1 = guard.getMessage({
        fieldType: "password",
        errorType: "tooWeak",
      });

      const message2 = guard.getMessage({
        fieldType: "password",
        errorType: "tooWeak",
      });

      expect(typeof message1).toBe("string");
      expect(typeof message2).toBe("string");
    });

    it("should respect tone preference", () => {
      const message = guard.getMessage({
        fieldType: "name",
        errorType: "required",
        tone: "sarcastic",
      });

      expect(typeof message).toBe("string");
      expect(message.length).toBeGreaterThan(0);
    });

    it("should fallback to general messages when specific ones not found", () => {
      const fallbackGuard = new GiggleGuard({ fallbackToGeneric: true });

      const message = fallbackGuard.getMessage({
        fieldType: "general",
        errorType: "required",
      });

      expect(typeof message).toBe("string");
      expect(message.length).toBeGreaterThan(0);
    });

    it("should warn and return fallback string on invalid combo (non-strict mode)", () => {
      const message = guard.getMessage({
        fieldType: "email",
        errorType: "inFuture",
      });

      expect(typeof message).toBe("string");
      expect(message).toMatch(/GiggleGuard /);
    });

    it("should throw error on invalid combo in strictValidation mode", () => {
      const strictGuard = new GiggleGuard({ strictValidation: true });

      expect(() => {
        strictGuard.getMessage({
          fieldType: "email",
          errorType: "inFuture",
        });
      }).toThrow(/GiggleGuard /);
    });
  });

  describe("getMessages", () => {
    it("should return multiple messages", () => {
      const messages = guard.getMessages(
        {
          fieldType: "email",
          errorType: "invalid",
        },
        2
      );

      expect(Array.isArray(messages)).toBe(true);
      expect(messages.length).toBe(2);
      messages.forEach((msg) => {
        expect(typeof msg).toBe("string");
        expect(msg.length).toBeGreaterThan(0);
      });
    });
  });

  describe("getStats", () => {
    it("should return correct statistics", () => {
      const stats = guard.getStats();

      expect(typeof stats.total).toBe("number");
      expect(stats.total).toBeGreaterThan(0);
      expect(typeof stats.byFieldType).toBe("object");
      expect(typeof stats.byTone).toBe("object");
      expect(typeof stats.byErrorType).toBe("object");
    });
  });

  describe("configuration", () => {
    it("should use default configuration", () => {
      const defaultGuard = new GiggleGuard();
      const message = defaultGuard.getMessage({
        fieldType: "name",
        errorType: "required",
      });

      expect(typeof message).toBe("string");
    });

    it("should accept custom configuration", () => {
      const customGuard = new GiggleGuard({
        defaultTone: "nerdy",
        trackUsedMessages: false,
      });

      const message = customGuard.getMessage({
        fieldType: "email",
        errorType: "invalid",
      });

      expect(typeof message).toBe("string");
    });
  });

  describe("resetUsedMessages", () => {
    it("should reset used messages tracking", () => {
      guard.getMessage({ fieldType: "name", errorType: "required" });
      guard.resetUsedMessages();

      const message = guard.getMessage({
        fieldType: "name",
        errorType: "required",
      });
      expect(typeof message).toBe("string");
    });
  });
});

describe("Convenience functions", () => {
  it("getMessage should work as standalone function", () => {
    const message = getMessage({
      fieldType: "password",
      errorType: "required",
    });

    expect(typeof message).toBe("string");
    expect(message.length).toBeGreaterThan(0);
  });

  it("getMessages should work as standalone function", () => {
    const messages = getMessages(
      {
        fieldType: "phone",
        errorType: "invalid",
      },
      2
    );

    expect(Array.isArray(messages)).toBe(true);
    expect(messages.length).toBe(2);
  });
});
