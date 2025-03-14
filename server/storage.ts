import { users, type User, type InsertUser, type ContactMessage, type InsertContactMessage, type GitHubStats } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getGitHubStats(): Promise<GitHubStats>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactMessages: Map<number, ContactMessage>;
  private userIdCounter: number;
  private messageIdCounter: number;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.userIdCounter = 1;
    this.messageIdCounter = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = this.messageIdCounter++;
    const now = new Date();
    
    const contactMessage: ContactMessage = {
      ...message,
      id,
      createdAt: now
    };
    
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }

  async getGitHubStats(): Promise<GitHubStats> {
    // Return mocked GitHub stats for demo purposes
    return {
      contributions: 156,
      repositories: 12,
      pullRequests: 28,
      stars: 42
    };
  }
}

export const storage = new MemStorage();
