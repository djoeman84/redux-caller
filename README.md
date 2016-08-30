[![Version](https://img.shields.io/npm/v/redux-caller.svg)](https://www.npmjs.com/package/redux-caller)
[![MIT license](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/djoeman84/redux-caller/blob/master/LICENSE)
[![dependencies](https://david-dm.org/djoeman84/redux-caller.svg)](https://david-dm.org/djoeman84/redux-caller)
[![devDependency Status](https://david-dm.org/djoeman84/redux-caller/dev-status.svg)](https://david-dm.org/djoeman84/redux-caller#info=devDependencies)
[![airbnb code style](https://img.shields.io/badge/code%20style-airbnb-fd5c63.svg)](https://github.com/airbnb/javascript)

---

This enables you to write ES2015 code but before the package is published on NPM, it gets converted to ES5 code so anyone can use it in their projects.

## Peer Dependencies
- [Redux](https://github.com/reactjs/redux)


## Getting Started
```shell
npm install redux-caller --save
```

## Usage
```javascript
import { Record } from 'immutable';
import { createStore } from 'redux'
import { createReducer } from 'redux-caller';

const ACTIONS = {
  SET_COUNT: 'COUNTER_STORE__SET_COUNT'
};

class CounterStore extends Record({count: 1}) {
  handleAction({type, payload}) {
    switch (type) {
      case ACTIONS.SET_COUNT:
        return this.setState(payload);
      default:
        return this;
    }
  }
}

let store = createStore(new CounterStore());

store.dispatch({ type: ACTIONS.SET_COUT, payload: 2 }) // => CounterStore { count = 2 }

store.dispatch({ type: ACTIONS.SET_COUT, payload: 20 }) // => CounterStore { count = 20 }

store.dispatch({ type: ACTIONS.SET_COUT, payload: 1 }) // => CounterStore { count = 1 }

```

## Credits

- [Hexbridge](http://hexbridge.com)
- [Airbnb](http://airbnb.com)
- [Redux](https://github.com/reactjs/redux)
- [npm-starter](https://github.com/deiucanta/npm-starter)

## License

MIT @ [Joe Delgado](https://twitter.com/soy_chupacabra)
