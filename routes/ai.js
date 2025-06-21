require("dotenv").config();
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { HarmBlockThreshold, HarmCategory } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const aiDb = require("../models/ais");
const { v4: uuidv4 } = require("uuid");

const chatHistories = new Map();
module.exports = (router) => {
  router.post("/chat-with-gemini", async (req, res) => {
    try {
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        safetySettings: [
          {
            category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
            threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
          },
          {
            category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
            threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
          },
          {
            category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
          },
          {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
          },
        ],
        systemInstruction:
          " You are the University Goal Refiner, specializing in goal setting, planning, and budgeting. When I provide you with a draft goal, plan, or budget description, refine it to ensure clear, concise, and grammatically correct language. Focus on enhancing clarity and professionalism while maintaining the original intent of the description. Additionally, offer suggestions for further improvements or potential alternative phrasing to better align with the overall context of the university's goals",
      });
      const userId = req.body.userId;

      let chatHistory = chatHistories.get(userId) || [];

      const userMessage = req.body.message;
      if (!userMessage) {
        return res.status(400).json({ error: "Missing message in request" });
      }

      chatHistory.push({ role: "user", parts: [{ text: userMessage }] });

      // **Key Change:** Use the same chat object for all messages**
      let chat = chatHistories.get(userId + "_chat");
      if (!chat) {
        chat = model.startChat();
        chatHistories.set(userId + "_chat", chat);
      }

      const result = await chat.sendMessage(userMessage, {
        history: chatHistory,
      });

      const responseText = result.response.text();

      chatHistory.push({ role: "model", parts: [{ text: responseText }] });
      chatHistories.set(userId, chatHistory);

      let aiSave = aiDb.create({
        chatId: uuidv4(),
        userId: userId,
        prompt: userMessage,
        responseAi: responseText,
      });

      if (aiSave) {
        res.json({ response: responseText });
      }
    } catch (error) {
      console.error("Error chatting with Gemini:", error);
      res.status(500).json({ error: "Internal server error Or Token Expired" });
    }
  });

  router.get("/get-all-chat/:id", async (req, res) => {
    try {
      let messages = await aiDb
        .find({
          userId: req.params.id,
        })
        .sort({ createdAt: 1 })
        .limit(1000);
      res.json({
        success: true,
        chats: messages,
      });
    } catch (error) {
      res.status(500).json({ error: "Internal server error Or Token Expired" });
    }
  });

  return router;
};
