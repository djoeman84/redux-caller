import { expect } from 'chai';
import { Record} from 'immutable';
import _ from 'underscore';

import { createReducer } from '../src/index.js';

const { describe, it } = global;

const ACTIONS = {
  SET_COUNT: 'SET_COUNT'
};

class MockStore extends Record({count: 0}) {
  handleAction({type, payload}) {
    switch (type) {
      case ACTIONS.SET_COUNT:
        return this.set('count', payload);
      default:
        return this;
    }
  }
}

describe('createReducer', () => {
  it('should handle undefined initialization', () => {
    const reducer = createReducer(new MockStore());

    expect(reducer(undefined, {type: 'INIT', payload: null}).count)
        .to.be.equal(0);
  });

  it('should handle actions', () => {
    const reducer = createReducer(new MockStore());

    expect(reducer(undefined, {type: ACTIONS.SET_COUNT, payload: 5}).count)
        .to.be.equal(5);
  });

  it('should be callable multiple times', () => {
    const reducer = createReducer(new MockStore());

    let states = [];
    _.range(20).reduce((state, i) => {
      const nextState = reducer(state, {type: ACTIONS.SET_COUNT, payload: i});
      states.push(nextState);
      return nextState;
    }, undefined);

    _(states).each((state, i) => {
      expect(state).to.be.an.instanceof(MockStore);
      expect(state.toJS().count).to.be.equal(i);
    });
  });

});
