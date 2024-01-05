# torontohydrotou

An expressjs app that returns the current Toronto Hydro TOU rate.

To run unit tests:

```sh
npm test
```

To run:

```sh
node hydronode.js
```

To build the container:

```sh
docker build --tag torontohydrotou .
```

To run the container:

```sh
docker run -p 3000:3000 torontohydrotou
```
