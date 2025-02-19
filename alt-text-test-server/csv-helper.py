import pandas
import urllib.request
import shutil

df = pandas.read_csv("sample_alt_data.csv")

for index, row in df.iterrows():
    name = row["img_url"].split('/')[-1]
    with urllib.request.urlopen("https://gutenberg.org/" + row["img_url"]) as response, open("images/" + name, 'wb') as out_file:
        shutil.copyfileobj(response, out_file)