import fileinput
for line in fileinput.input("./co-routes.jsonlines", inplace=True):
    if 1 != fileinput.filelineno():
        print(',{}'.format(line), end='')
    else:
        print('[{}'.format(line), end='')
open("test.txt","a").write(']')