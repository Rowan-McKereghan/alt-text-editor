# alt-text-editor
Free Ebook Foundation alt text PG react app


<!--> 
            Things to Discuss:
                Backend Image fetching - url like "https://gutenberg.org/cache/epub/67098/images/" returns HTML file with table
                    - how to access list of images directly?
                    - is this easier through altpoet (or anything other than directly through PG urls?)
                Can do so directly thru <iframe> in prod bc no cross-origin issues, if that's easier
                Prod server = real, dev server = localhost webserver
                Essentially, either: 
                    - pull from backend and update directly, then find corresponding <img> in <iframe> for UI
                    - list all <img> in <iframe>, then connect those to backend using <img> ID number to update
                Using Bootstrap for Component Framework

<-->