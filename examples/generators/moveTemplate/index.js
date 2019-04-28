import { cliOf, useImport, usePath, useModuleName, useCustom } from "../../../lib/index";

const destination = '../../destinations/';
const templatePaths = [
  './templates/moveTemplate1.js',
  './templates/moveTemplate2.js'
];

cliOf('moveTemplate', module)
  .ask({
    type: 'list',
    name: 'selectedTemplate',
    message: 'Please select template to move.',
    choices: templatePaths,
    default: templatePaths[0],
  })
  // moving selected template with saving hierarchy of folders
  .move(destination, (answers) => [answers.selectedTemplate])
  // moving selected template to destination folder with rename
  .move(destination, (answers) => [{from: answers.selectedTemplate, to: 'temp.file'}])
