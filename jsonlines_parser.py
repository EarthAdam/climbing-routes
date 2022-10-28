import json
import pandas
import csv
import numpy as np

path = '.\openbeta-routes-mountain1-co-ut\co-routes.json'

with open(path) as data_file:
    data = json.load(data_file)

routes = []

for route in data:
    if 'YDS' in str(route['grade']):
        if '5.9' in route['grade']['YDS'] or 'V0' in route['grade']['YDS']:
            if (route['grade']['YDS'] == 'V0'):
                routes.append([route['route_name'],'5.9',route['metadata']['parent_lnglat'][0],route['metadata']['parent_lnglat'][1],route['description'],route])
            if (route['grade']['YDS'] == 'V1'):
                routes.append([route['route_name'],'5.10+',route['metadata']['parent_lnglat'][0],route['metadata']['parent_lnglat'][1],route['description'],route])
            else:
                routes.append([route['route_name'],route['grade']['YDS'],route['metadata']['parent_lnglat'][0],route['metadata']['parent_lnglat'][1],route['description'],route])

df = pandas.DataFrame(data=routes)
df.to_csv("./9s.csv", sep=',',index=False)