import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema, contactMessage, type ContactMessage } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = contactSchema.parse(req.body);
      const result = await storage.createContactMessage(contactData);
      res.status(201).json(result);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid form data", errors: error.errors });
        return;
      }
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  // GitHub stats endpoint
  app.get("/api/github/stats", async (_req, res) => {
    try {
      const stats = await storage.getGitHubStats();
      res.json(stats);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch GitHub stats" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
