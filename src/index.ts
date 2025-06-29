import {
  ValidationMessage,
  GetMessageOptions,
  GiggleGuardConfig,
  Tone,
  FieldType,
  ErrorType,
} from "./types";
import { allMessages } from "./messages";
import { validateFieldErrorCombo } from "./utils/validateCombo";

class GiggleGuard {
  private config: GiggleGuardConfig;
  private usedMessages: Set<string> = new Set();

  constructor(config: GiggleGuardConfig = {}) {
    this.config = {
      defaultTone: "random",
      trackUsedMessages: true,
      fallbackToGeneric: true,
      strictValidation: false,
      ...config,
    };
  }

  /**
   * Get a random validation message based on field type and error type
   */
  getMessage(options: GetMessageOptions): string {
    const {
      fieldType,
      errorType,
      tone,
      excludeUsed = this.config.trackUsedMessages,
    } = options;

    const comboCheck = validateFieldErrorCombo(fieldType, errorType);
    if (!comboCheck.valid) {
      const suggestionText = comboCheck.allowedErrors?.length
        ? `Valid error types for "${fieldType}" are: ${comboCheck.allowedErrors.join(
            ", "
          )}.`
        : "No suggestions available.";
      const warning = `GiggleGuard ⚠️: "${errorType}" is not valid for "${fieldType}". ${suggestionText}`;

      if (this.config.strictValidation) {
        throw new Error(warning);
      }

      if (typeof console !== "undefined") {
        console.warn(warning);
      }

      return warning; // fallback string
    }

    // Filter messages by field type and error type
    let filteredMessages = allMessages.filter(
      (msg) => msg.fieldType === fieldType && msg.errorType === errorType
    );

    // Apply tone filter if specified
    if (tone) {
      const toneFiltered = filteredMessages.filter((msg) => msg.tone === tone);
      if (toneFiltered.length > 0) {
        filteredMessages = toneFiltered;
      }
    } else if (
      this.config.defaultTone &&
      this.config.defaultTone !== "random"
    ) {
      const defaultToneFiltered = filteredMessages.filter(
        (msg) => msg.tone === this.config.defaultTone
      );
      if (defaultToneFiltered.length > 0) {
        filteredMessages = defaultToneFiltered;
      }
    }
    // else, no tone filtering — allow all

    // Exclude used messages if requested
    if (excludeUsed) {
      const unusedMessages = filteredMessages.filter(
        (msg) => !this.usedMessages.has(msg.id)
      );
      if (unusedMessages.length > 0) {
        filteredMessages = unusedMessages;
      }
    }

    // Fallback to general messages if no specific messages found
    if (filteredMessages.length === 0 && this.config.fallbackToGeneric) {
      filteredMessages = allMessages.filter(
        (msg) => msg.fieldType === "general" && msg.errorType === errorType
      );
    }

    // If still no messages, return a default
    if (filteredMessages.length === 0) {
      return "Oops! Something's not quite right here.";
    }

    // Get random message
    const randomIndex = Math.floor(Math.random() * filteredMessages.length);
    const selectedMessage = filteredMessages[randomIndex];

    // Track used message
    if (this.config.trackUsedMessages) {
      this.usedMessages.add(selectedMessage.id);
    }

    return selectedMessage.message;
  }

  /**
   * Get multiple messages for the same validation
   */
  getMessages(options: GetMessageOptions, count: number = 3): string[] {
    const messages: string[] = [];
    const originalExcludeUsed = options.excludeUsed;

    for (let i = 0; i < count; i++) {
      const message = this.getMessage({
        ...options,
        excludeUsed: originalExcludeUsed !== false,
      });
      messages.push(message);
    }

    return messages;
  }

  /**
   * Get a message by specific ID
   */
  getMessageById(id: string): ValidationMessage | undefined {
    return allMessages.find((msg) => msg.id === id);
  }

  /**
   * Get all messages for a specific field type
   */
  getMessagesByField(fieldType: FieldType): ValidationMessage[] {
    return allMessages.filter((msg) => msg.fieldType === fieldType);
  }

  /**
   * Get all messages with a specific tone
   */
  getMessagesByTone(tone: Tone): ValidationMessage[] {
    return allMessages.filter((msg) => msg.tone === tone);
  }

  /**
   * Reset used messages tracking
   */
  resetUsedMessages(): void {
    this.usedMessages.clear();
  }

  /**
   * Get statistics about available messages
   */
  getStats(): {
    total: number;
    byFieldType: Record<FieldType, number>;
    byTone: Record<Tone, number>;
    byErrorType: Record<ErrorType, number>;
  } {
    const stats = {
      total: allMessages.length,
      byFieldType: {} as Record<FieldType, number>,
      byTone: {} as Record<Tone, number>,
      byErrorType: {} as Record<ErrorType, number>,
    };

    allMessages.forEach((msg) => {
      // Count by field type
      stats.byFieldType[msg.fieldType] =
        (stats.byFieldType[msg.fieldType] || 0) + 1;

      // Count by tone
      stats.byTone[msg.tone] = (stats.byTone[msg.tone] || 0) + 1;

      // Count by error type
      stats.byErrorType[msg.errorType] =
        (stats.byErrorType[msg.errorType] || 0) + 1;
    });

    return stats;
  }

  /**
   * Update configuration
   */
  updateConfig(newConfig: Partial<GiggleGuardConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }
}

// Convenience functions for quick usage
export const getMessage = (options: GetMessageOptions): string => {
  const guard = new GiggleGuard();
  return guard.getMessage(options);
};

export const getMessages = (
  options: GetMessageOptions,
  count: number = 3
): string[] => {
  const guard = new GiggleGuard();
  return guard.getMessages(options, count);
};

// Export everything
export { GiggleGuard };
export * from "./types";
export * from "./messages";
export { validateFieldErrorCombo } from "./utils/validateCombo";

// Default export
export default GiggleGuard;
