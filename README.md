# Churchtools Organigram
## Introduction
This is a small NodeJS Script that extracts data from ChurchTools and exports it as a organigram.

## Code Quality
This was written as a proof of concept.
It works, but it ain't no beautiful code (#spaghetti)

## How to Use
### Docker
The easiest way to use this script is via docker.
Just install docker and docker compose, copy the `.env.example` file to `.env`, add your churchtools credentials and run `run.sh`.

### Manual
Just npm install, copy `.env.example` to `./app/.env` and run it with npm run.
This way is not officially supported.

### Making the Output readable
After running the script you will then find the generated mindmaps in the `./output` folder.

Open it in the Software yED and choose the Auto-Layout feature you want.

### Advanced Visualization
For advanced automatic vizualisations one can use [Gephi](https://gephi.org/).
To import the file to gephi, an additional step is necessary.
To import the generated graph in gephi, just open the exported file in yED and export it to a `.ygf` file.
You can then import it into Gephi.

## Contributing
If you improve something, please open a Pull Request.
If you find any bugs, please open an Issue.
