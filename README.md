# climbing-routes
Climbing Routes near in Central Colorado exported from the `co-routes.jsonlines` file of the [CO Route data](https://github.com/OpenBeta/climbing-data/blob/main/openbeta-routes-mountain1-co-ut.zip) of OpenBeta's GitHub.

Using [jsonlines_parser.py](./jsonlines_parser.py), a CSV file is generated with routes that meet the search criteria (Grade = 5.7, etc).

From here, the CSV can be loaded into QGIS as a "Delimeted Text Layer", and just reference the columns associated with Long and Lat to assign coordinates. From here, this can be exported as a GeoJSON file, which is what the map will ultimately reference for the layer.
