const { GoogleGenerativeAI } = require("@google/generative-ai");
const aiConfig = require("../config/aiConfig.js");
const processImages = require("../utils/processImages.js");

class GeminiAssistant {
  constructor() {
    this.client = null;
  }

  async init() {
    try {
      this.client = await GoogleGenerativeAI.init({
        apiKey: aiConfig.gemini.apiKey,
      }); // Assign initialized client to this.client
      console.log("Google Generative AI client initialized successfully.");
    } catch (error) {
      console.error("Failed to initialize Google Generative AI client:", error);
      throw error;
    }
  }

  async textAndImage(prompt, images) {
    const model = this.client.getGenerativeModel({
      model: aiConfig.gemini.textAndImageModel,
      safetySettings: aiConfig.gemini.safetySettings,
    });

    try {
      const imageParts = await processImages(images);
      const result = await model.generateContent([prompt, ...imageParts]);
      return result?.response?.text() || null;
    } catch (error) {
      console.error("GeminiAssistant.textAndImage | error:", error);
      return null; // Or throw an error for upstream handling
    }
  }
}

// Create an instance and export it
const geminiAssistantTextImage = new GeminiAssistant();
module.exports = geminiAssistantTextImage;
