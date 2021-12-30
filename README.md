# react-vite

React app boilerplate based on vite.

## Features

- Vite with React, TypeScript and absolute path
- Styled by Tailwind CSS v3
- Use ESLint, Prettier
- Test by Jest
- Setup github actoins(CI) which makes test, lint, type check run

## Getting started

use degit to clone to your machine with an empty git history:

```console
$ npx degit pipopotamasu/react-vite#main my-app
$ cd my-app
$ yarn install
$ yarn dev
=> http://localhost:3000
```

## Development

```console
$ yarn dev            # start dev server at http://localhost:3000
$ yarn test           # run test by jest
$ yarn eslint         # run eslint for ts files
$ yarn eslint:fix     # run eslint with autofix mode
$ yarn prettier:write # format files
$ yarn prettier:check # check if files are formatable
$ yarn fix            # run eslint with autofix mode and prettier
```

## Production

```console
$ yarn build    # build static files for production
$ yarn serve    # preview production built files
```

## Credit

react-vite is built and maintained by [pipopotamasu](https://twitter.com/pipopotamasu3).

## License

This project is licensed under the terms of the [MIT license](https://github.com/pipopotamasu/react-vite/blob/main/LICENSE).
