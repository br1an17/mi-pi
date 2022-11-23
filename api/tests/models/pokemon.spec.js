const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Pokemon.create({ name: 'Pikachu' });
      });
    });
  });
});
//______________________________________//


it("que el pokemon se llame charmander", () => {
  Pokemon.create({ name: "charmander" });
});

it("deberia arrojar un error si el hp es nulo  ", (done) => {
  Pokemon.create({})
    .then(() => done(new Error("se requiere hp")))
    .catch(() => done());
});


it("deberia arrojar un error si el ataque es nulo", (done) => {
  Pokemon.create({})
    .then(() => done(new Error('se requiere ataque')))
    .catch(() => done());
});


