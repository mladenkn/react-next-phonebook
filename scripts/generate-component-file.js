const { writeFileSync, mkdirSync } = require('fs');

const type = process.argv[2];
const componentName = process.argv[3];
const folderRelativePath = process.argv[4];

styleFileContent = `import { createStyles, Theme } from "@material-ui/core";

export default ({palette, breakpoints}: Theme) => createStyles({

    [breakpoints.only('xs')]: {

    },
    
    [breakpoints.up('sm')]: {

    },
});
`;

viewFileContent = `import React from 'react';
import { WithStyles } from "@material-ui/core";
import style from "./${componentName}-style";

type Props = {} & WithStyles<typeof style>;

export const ${componentName} = ({classes}: Props) =>
    <div>
    </div>
`;

const indexFileContent = `import { withStyles } from "@material-ui/core";
import { ${componentName} } from "./${componentName}-view";
import style from "./${componentName}-style";

export default withStyles(style)(${componentName})
`;

const projSrcFolderPath = __dirname + '/../src/';
const componentFolderPath = projSrcFolderPath + folderRelativePath + '/';

const styleFilePath = componentFolderPath + componentName + '-style.ts';
const viewFilePath = componentFolderPath + componentName + '.tsx';

switch(type){
    case 'style':
        writeFileSync(styleFilePath, styleFileContent);
        break;
    case 'view':
        writeFileSync(viewFilePath, viewFileContent);
        break;
}