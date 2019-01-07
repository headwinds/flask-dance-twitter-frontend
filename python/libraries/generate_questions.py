import nltk, re, pprint
nltk.download('punkt')
nltk.download('averaged_perceptron_tagger')

default_answer = "People have always known of dinosaurs, though they have called them by many names. Old legends that place Western dragons in caves or beneath the earth may have originated with fossils. The plumed serpent, prominent in mythologies of Mexico and Latin America, is often a creator of life. The Rainbow Serpent of Aboriginal tales was present at the beginning of time, and helped prepare the landscapes for human beings and other animals. The Asian dragon, which combines features of many animals, symbolizes primordial energy and is the bringer of rain. These figures resemble our reconstructions of dinosaurs in appearance, and accounts place them in worlds that existed before humankind. The major reason for this similarity might be that human imagination works in much the same way as evolution. Both constantly recycle familiar forms such as wings, claws, crests, fangs, and scales, which may repeatedly vanish and then reappear through convergence. The figure of Tyrannosaurus rex suggests a kangaroo, while pterosaurs resemble bats, but the similarities are not due to common ancestry."

def generate(document):
    sentences = nltk.sent_tokenize(document) 
    sentences = [nltk.word_tokenize(sent) for sent in sentences] 
    sentences = [nltk.pos_tag(sent) for sent in sentences]
    question = "what?"
    print(sentences)
    return question

generate(default_answer)