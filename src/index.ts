import { Express } from 'express';
import 'reflect-metadata';

import createServer from './app';

createServer()
  .then((app: Express) => {
    const port = process.env.PORT || 3030;
    app.listen(port, () => {
      console.log(`Server listen on http://localhost:${port}/graphql`);
    });
  })
  .catch((error) => console.log(error));
