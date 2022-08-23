import { TestBed } from '@angular/core/testing';

import { InicialResolver } from './inicial.resolver';

describe('InicialResolver', () => {
  let resolver: InicialResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(InicialResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
