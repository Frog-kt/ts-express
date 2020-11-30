import request from 'supertest';
import app from '../src/app';

describe('case GET /', () => {
  it('return 200', async () => {
    request(app).get('/').expect(200);
  });
});
