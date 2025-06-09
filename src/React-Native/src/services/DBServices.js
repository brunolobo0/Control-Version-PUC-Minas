import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabaseAsync('document_control.db');

await db.execAsync(`
CREATE TABLE IF NOT EXISTS test (id INTEGER PRIMARY KEY NOT NULL, file TEXT NOT NULL, intValue INTEGER);

`);