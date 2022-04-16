#!/bin/bash
docker build . -t niklasarnitz/churchtools-organigram
docker push niklasarnitz/churchtools-organigram:latest
