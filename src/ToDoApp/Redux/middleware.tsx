import React from 'react'

export const print1Middleware = (storeAPI) => (next) => (action) => {
    console.log('1')
    return next(action)
}

export const print2Middleware = (storeAPI) => (next) => (action) => {
    console.log('2')
    return next(action)
}

export const print3Middleware = (storeAPI) => (next) => (action) => {
    console.log('3')
    return next(action)
}
export const loggerMiddleware = storeAPI => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('current state', storeAPI.getState())
    return result
}