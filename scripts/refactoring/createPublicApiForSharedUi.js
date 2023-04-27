const { Directory, Project } = require('ts-morph')
const path = require('path')

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')
const files = project.getSourceFiles()

const appFolders = ['app', 'shared', 'widgets', 'entities', 'features', 'helpers', 'pages']

function isAbsolute(path) {
  return appFolders.some((el) => path.startsWith(el))
}

const uiPath = ['..', '..', 'src', 'shared', 'ui']
const sharedUiDirectory = project.getDirectory(path.resolve(__dirname, ...uiPath))
const componentsDirs = sharedUiDirectory?.getDirectories()
/*
componentsDirs.forEach((dir) => {
  // console.log(dir.getBaseName())
  const indexfilePath = dir.getPath() + '/index.ts'
  const indexFile = dir.getSourceFile(indexfilePath)
  console.log(indexFile?.getBaseName())
  if (!indexFile) {
    const sourceCode = `export * from './${dir.getBaseName()}'`
    const file = dir.createSourceFile(indexfilePath, sourceCode, { overwrite: true })
    file.save()
  }
})*/

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations()

  importDeclarations.forEach((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue()
    const valueWithoutAlias = value.replace('@/', '')

    const segments = valueWithoutAlias.split('/')

    const isSharedLayer = segments?.[0] === 'shared'
    const isUiSlice = segments?.[1] === 'ui'

    if (isAbsolute(valueWithoutAlias) && isSharedLayer && isUiSlice) {
      const result = value.split('/').slice(0, 3).join('/')
      importDeclaration.setModuleSpecifier('@/' + result)
    }
    console.log(value)
  })
})

project.save()
