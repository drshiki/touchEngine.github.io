
NLP includes 

##application and research fields

<table>
<tr><th>application</th><th>example</th><tr>
<tr><td>Question Answering</td><td>IBM’s Watson</td></tr>
<tr><td>Information Extraction</td><td>web spider</td></tr>
<tr><td>Machine Translation</td><td>google stanslation</td></tr>
<tr><td>spell correction</td><td>MS office spell correction</td></tr>
<tr><td>informaton retrieval</td><td>yandex</td></tr>
<tr><td>speech recognition</td><td rowspan="3">siri</td></tr>
<tr><td>natural language generation</td></tr>
<tr><td>speech synthesis</td></tr>
<tr><td>inference</td><td>expert system</td></tr>
</td></table>

##THE STATE OF THE ART

<table>
<tr><th>mostly solve</th><th>makeing good process</th><th>still real hard</th></tr>
<tr><td>spam detection</td><td>sentiment analysis</td><td>question answing</td></tr>
<tr><td>part-of-speech-tagging(POS)</td><td>corfrence resolution</td><td>paraphrase</td></tr>
<tr><td>named entity recognition(NER)</td><td>parsing</td><td>summarization</td></tr>
<tr><td>spam detection</td><td>machine translation(MT)</td><td>dialog</td></tr>
<tr><td></td><td>information extraction (IE)
</td><td></td></tr>
<tr><td></td><td></td><td></td></tr>
</table>

##what make NLP difficult

<table>
<tr><th>difficult</th><th>example</th><tr>
<tr><td>ambiguity</td><td>Teacher Strikes/ Idle/ Kids<br>Teacher/ Strikes/ Idle Kids</td></tr>
<tr><td>non-standard English</td><td>I go the beautiful ton where <u>youve</u> gone last year</td></tr>
<tr><td>segmentation issues</td><td>张学/友好/帅气 张学友/好帅气 or the New/ York-New/ Haven Railroad but correct one is the New York/-New Haven/ Railroad
</td></tr>
<tr><td>idioms</td><td>throw in the towel</td></tr>
<tr><td>neologisms</td><td>unfriend, retweet
</td></tr>
<tr><td>world knowledge</td><td>Mary and Sue are sisters.<br>
Mary and Sue are mothers.
</td></tr>
<tr><td>tricky entity names</td><td>the big brother is a characters in <u><i>1984</i></u></td></tr>
</td></table>

## Regular Expressions and processing text

cat and cats -> same lemma : same stem, rough word sense

he and his -> diffefent wordform : their suface is not fully same

type : an element of vocabulary

token: an instance of a type in text

he takes the book and the bag which his mother bought for him going to school 

above sentence, token = 16 and type = 13 for that 'he', 'his', and 'him' have same lamma, so are first 'the' and second 'the'.

we use the N to represent number of tokens, V to represent the vocabulary the set of types. and |V| is the size of the vocabulary.