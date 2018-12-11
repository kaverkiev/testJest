// graphql/types/Animal/Animal.test.js

import * as AnimalResolvers from './Animal.resolvers.js';

export const animalNameTest = () => {
    const obj = {
      kind: 'Dog',
      name: 'Koko',
      breeds: ['Corgi', 'German Shepherd']
    };
  
    const args = {};
    const ctx = {};

    const output = AnimalResolvers.name(obj, args, ctx);

    expect(output).toEqual('Koko');
};
