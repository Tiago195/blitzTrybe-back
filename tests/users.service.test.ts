import { describe, it } from 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';
import service from '../services/users.service';
import IUser, { INewUser } from '../interfaces/IUser';

describe('teste service user', () => {
  describe('teste funçao getAll', () => {
    const response = [
      {
        name: 'andre',
        email: '@@',
        password: '321123',
        github: null,
        isAdmin: 0
      },
      {
        name: 'alberta',
        email: '@@',
        password: '1233332',
        github: 'albertinha123',
        isAdmin: 0
      }
    ];
    const stub = sinon.stub(service, 'getAll');

    before(() => {
      stub.resolves(response as IUser[]);
    });

    after(() => {
      stub.restore();
    });

    it('retorna um array de user', async () => {
      const users = await service.getAll();

      expect(users).to.be.eql(response);
    });
  });
  describe('teste funçao create', () => {
    const newUser = {
      name: 'andre',
      email: '@@',
      password: '123321',
      isAdmin: 0
    };
    const response = {
      id: 5,
      name: 'andre',
      email: '@@',
      password: '321123',
      isAdmin: 0
    };
    const stub = sinon.stub(service, 'create');
    before(() => {
      stub.resolves(response as IUser);
    });
    after(() => {
      stub.restore();
    });
    it('retorna um novo usuario', async () => {
      const user = await service.create(newUser as INewUser);

      expect(user).to.be.eql(response);
    });
  });
});