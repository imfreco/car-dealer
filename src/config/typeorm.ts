import { join } from 'path';

import { createConnection } from 'typeorm';
import { config } from 'dotenv';
config();

export async function connectToDatabase() {
  await createConnection({
    type: 'mysql',
    host: process.env.DB_HOST || 'localhost',
    port: +(process.env.DB_PORT || 3306),
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'admin',
    database: process.env.DB_NAME || 'car-dealer',
    entities: [join(__dirname, '..', 'entities', '*.ts')],
    migrations: [join(__dirname, '..', 'database', 'migrations', '*.ts')],
  });
  console.log('Database is connected', __dirname);
}
