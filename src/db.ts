import Database from 'better-sqlite3';
import type { Database as DatabaseType } from 'better-sqlite3';
import path from 'node:path';
import fs from 'node:fs';

// start the db and get started create tables
const dbPath: string = path.join(__dirname, '..', 'database', 'characterManagerDB');

if (!fs.existsSync(dbPath)) {
    fs.mkdirSync(dbPath);
}
export const db: DatabaseType = new Database(dbPath);

db.pragma('foreign_keys = ON');

export function initDB(): void {
    // user table
    db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        );
    `);


    `);
}
