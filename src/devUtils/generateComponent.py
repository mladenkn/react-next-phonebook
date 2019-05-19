from sys import argv
from os import path, makedirs

componentName = argv[1];
folderRelativePath = argv[2];

styleFileContent = '''\
    import { createStyles } from "@material-ui/core";

    export default createStyles({

    });
'''

viewFileContent = """
    import React from 'react';
    import { WithStyles } from "@material-ui/core";
    import style from "./%s-style";

    type Props = {} & WithStyles<typeof style>;

    export default ({classes}: Props) =>
        <div>
        </div>
"""%(componentName)

indexFileContent = '''\
    import { withStyles } from "@material-ui/core";
    import View from "./%s-view";
    import style from "./%s-style";

    export default withStyles(style)(View)
'''%(componentName, componentName)

def getProjSrc():
    parent1 = path.dirname(path.realpath(__file__))
    parent2 = path.dirname(parent1)
    return parent2

componentFolderPath = path.join(getProjSrc(), folderRelativePath)

styleFilePath = path.join(componentFolderPath, componentName) + '-style.ts'
viewFilePath = path.join(componentFolderPath, componentName) + '-view.ts'
indexFilePath = path.join(componentFolderPath, 'index.ts')

def saveFile(path, content):
    file = open(path, 'w+')
    file.write(content)
    file.close()

print(styleFilePath)
print(viewFilePath)
print(indexFilePath)

if not path.exists(componentFolderPath):
    makedirs(componentFolderPath)

saveFile(styleFilePath, styleFileContent)
saveFile(viewFilePath, viewFileContent)
saveFile(indexFilePath, indexFileContent)
