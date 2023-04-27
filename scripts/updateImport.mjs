import { Project } from 'ts-morph'

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

const appFolders = ['app', 'shared', 'widgets', 'entities', 'features', 'helpers', 'pages']

function isAbsolute(path) {
  return appFolders.some((el) => path.startsWith(el))
}

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations()

  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue()
    if (isAbsolute(value)) {
      importDeclaration.setModuleSpecifier('@/' + value)
    }
    console.log(value)
  })
})

project.save()
