# Le Jardinier

[![build](https://img.shields.io/github/workflow/status/valflrt/lejardinier/Build)](https://github.com/valflrt/lejardinier/actions/workflows/push.yml) [![discord](https://img.shields.io/discord/774689668309450833?color=rgb%2888%2C%20101%2C%20242%29&label=discord&logo=discord&logoColor=%23fff)](https://discord.gg/8PA9M2rqgd)

Le Jardinier is simple simple discord bot made with typescript and using discord.js.

## Installation

First, you'll need to download/clone this repository from github then, run `npm install` in the project directory.

## Configuration

First you need to set the bot prefix in [`local.example.ts`](./src/config/local.example.ts) and rename this file to local.ts.

In order to get the code working, you'll need to get:

- a **bot token** ([learn more](https://discordjs.guide/preparations/setting-up-a-bot-application.html)).
- a **youtube API key** ([learn more](https://www.embedplus.com/how-to-create-a-youtube-api-key.aspx))
- a **mongoDB database URI**

And to add these in [`secrets.example.ts`](./src/config/secrets.example.ts) and to rename this file to `secrets.ts`.

You're done with configuration !

## Starting

Finally, to start the code, you can choose to run one of the commands below:

- `npm start`: for **normal start**
- `npm run dev`: for **development start** (with nodemon: restarting when code changes)
- `npm prod`: for **"production" start**

You can also use `npm run lint` to lint the code in `src/`:

## Docker

To build the docker image you need to have docker installed.

Run `docker build -t [tag of your choice] -f ./Dockerfile .` to build the image.

Notes:

- You may need to run this command as administrator.
- For the docker build to success, you need to first follow the instructions in the Configuration section.

## Notes

- You need to have **nodejs**, **npm** and **npx** installed on your computer (npm and npx are usually automatically installed with nodejs)
- If you find a bug or have a suggestion, please create an issue so I can take a look at it.
- [`typescript.ts`](./typescript.ts) is useless, I added it because my code editor put an error and adding this file was the way to fix it...
- _Don't mind my code it can be fucked up sometimes..._

## More Information

- [leJardinier website](https://valflrt.github.io/lejardinier/) (github pages)
