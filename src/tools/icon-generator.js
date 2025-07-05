var fs = require('fs'),
  path = require('path'),
  filePath = path.join(__dirname, '../components/icon/')

fs.readFile(filePath + 'selection.json', { encoding: 'utf-8' }, function (err, data) {
  if (!err) {
    const icons = JSON.parse(data).icons
    const iconNames = icons.map(icon => `'${icon.properties.name}'`)
    fs.writeFileSync(
      filePath + 'iconNames.ts',
      `export const iconNames = [${iconNames}] as const
      export type IconType = typeof iconNames[number];`,
      'utf8',
    )
  }
})
