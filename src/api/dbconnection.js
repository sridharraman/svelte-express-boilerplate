import { dbConnectionString } from '../settings.js';
import pgPromise from 'pg-promise';

const pgp = pgPromise({});
const db = pgp(dbConnectionString);

export default db;
