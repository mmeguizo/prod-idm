const { GoogleGenerativeAI } = require("@google/generative-ai");

const aiConfig = require("../config/aiConfig.js");

class GeminiAssistant {
  constructor() {
    this.client = null; // Instantiate the client
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

  async textOnly(prompt) {
    const model = this.client.getGenerativeModel({
      model: aiConfig.gemini.textOnlyModel,
      safetySettings: aiConfig.gemini.safetySettings,
    });

    try {
      const result = await model.generateContent(prompt);
      return result?.response?.text() || null;
    } catch (error) {
      console.error("GeminiAssistant.textOnly | error:", error);
      return null; // Or throw an error if you want to handle it upstream
    }
  }
}

// Create an instance and export it
const geminiAssistant = new GeminiAssistant();
module.exports = geminiAssistant;

/*
// ai.js
const GeminiAssistant = require("../ai-folder/utils/textOnly.js"); // Assuming this exports the class

// Create instances of the GeminiAssistant class
const geminiAssistantForText = new GeminiAssistant();
const geminiAssistantForImages = new GeminiAssistant(); // Use a different name if needed

module.exports = (router) => {
  Promise.all([geminiAssistantForText.init(), geminiAssistantForImages.init()])
    .then(() => {
      console.log("Both GeminiAssistant instances initialized successfully");
    
      router.get("/chat-with-gemini", async (req, res) => {
        // ... your existing route handling logic ...
      });

      return router;
    })
    .catch((error) => {
      console.error("Error initializing GeminiAssistant:", error);
      // Handle the error appropriately (e.g., send a 500 Internal server error Or Token Expired response)
    });
};


*/
