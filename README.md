# Viper Proble

## Tech
* Python
* Vue 
* Twitter API with Flask Dance

![Alt text](probe.jpg?raw=true)  

### Goal

Get articles from the Cabin Quest API and produce questions which can be used as a trivia game.

## Getting Started

### Build the Vue 

```
yarn build
```

This will create a dist directory with the static content 

### Build the Python 

```
pip install -r requirements.txt
python run.py
```

Open to http://127.0.0.1:5000 not localhost:5000 or 0.0.0.0:5000!

### Docker

```
docker build -t probe .
docker run -p 5000:5000 probe
```

To see that the docker is running: `docker image ls`

## Twitter Integration

Callback urls
```
https://probe.now.sh/login/twitter/authorized
http://127.0.0.1:5000/login/twitter/authorized
```

# Credit 

* [flask-vuejs-template](https://github.com/gtalarico/flask-vuejs-template)

## Python & NLP
* [how to extract questions with NLTK](https://datascience.stackexchange.com/questions/26427/how-to-extract-question-s-from-document-with-nltk)
* [how to create a corpus with NLTK](https://stackoverflow.com/questions/4951751/creating-a-new-corpus-with-nltk)
* [how do I generate question from a sentence](https://www.quora.com/How-do-I-generate-question-from-sentence-in-Python-using-NLTK)
* [wikipedia question generator)](https://github.com/atbaker/wikipedia-question-generator)
* [nltk.org](https://www.nltk.org/)
* [questiongeneration.org](http://www.questiongeneration.org/)
* [NLP is fun](https://medium.com/@ageitgey/natural-language-processing-is-fun-9a0bff37854e)
* [spacy](https://spacy.io/)
* [textacy (built on spacy)](https://readthedocs.org/projects/textacy/)
* [neuralcoref (built on spacy)](https://github.com/huggingface/neuralcoref)
* [fasttext](https://fasttext.cc/)

## Muse
* [Lekila, high templar teacher](https://starcraft.fandom.com/wiki/Lekila)
* [Adjutant](https://starcraft.fandom.com/wiki/Adjutant)
* [IT-O](http://starwars.wikia.com/wiki/IT-O_Interrogator)