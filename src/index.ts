import { Express } from 'express';
import 'reflect-metadata';

import createServer from './app';
import { connectToDatabase } from './config/typeorm';

createServer()
  .then((app: Express) => {
    const port = process.env.PORT || 3030;
    app.listen(port, () => {
      console.log(`Server listen on http://localhost:${port}/graphql`);
    });
    connectToDatabase();
  })
  .catch((error) => console.log(error));
