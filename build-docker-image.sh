#!/bin/bash
docker build . --no-cache -t niklasarnitz/churchtools-organigram:latest
docker push niklasarnitz/churchtools-organigram:latest
