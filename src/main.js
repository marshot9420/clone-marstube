import express from 'express';

import { initConfigs } from './configs';
import { startServer } from './server';

const app = express();

initConfigs(app);
startServer(app);
