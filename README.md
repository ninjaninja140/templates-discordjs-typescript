# @TEMPLATES

<hr />

## A project by ninjaninja140

### @templates/discordjs-typescript

A simple discord.js bot made in Typescript using `@sapphire/framework` with full docker support from out of the box.

<hr />

#### Developing

Working with this bot is very simple, all you have to know is how discord.js, and sapphire framework work with a simple-ish knowledge of typescript or javascript. You can compile this bot using `tsc`, `yarn tsc`, `npx tsc` or any compile command you feel fit for Typescript.

Setting up this project is also just as simple! All you have to run is `npm i` or `yarn install`. This template is also backed with a pre-loaded yarn install from the latest version (as of 10/02/2025) so you should be good to go, right from the get-go!

#### Running

This bot can be ran using docker, which a dockerfile comes pre-prepared with this repository, alongside little customisations that can be made within its file, the image can be built and run with the `docker build` and `docker run` commands, here's an example, which is used in our test builds.

```
docker build . --tag ninjaninja140/test:latest
```

And running:

```
docker run ninjaninja140/test:test
```

#### Contributing

To contribute to this repository, just fork it, make your changes and run a merge/pull request to this repository, if I'm around I'll try to review it and get it in here!

<hr />

Happy developing! - ninjaninja140
