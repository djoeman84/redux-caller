export function createReducer(callableState, handlerMethodName='handleAction') {
  return (state=callableState, action) => state[handlerMethodName](action)
}
