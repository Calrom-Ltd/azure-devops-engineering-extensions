#install
npm install

#test
npm run test

#build
npm run build:t1

#build extension
Set-Location .\Tasks\emailReportTask\
npm install

Set-Location ..\..\

#copy files
Copy-Item -Path .\Tasks\emailReportTask\images\icon.png -Destination .\dist\emailReportExtension\emailReportTask\
Copy-Item -Path .\Tasks\emailReportTask\package.json -Destination .\dist\emailReportExtension\emailReportTask\
Copy-Item -Path .\Tasks\emailReportTask\package-lock.json -Destination .\dist\emailReportExtension\emailReportTask\
Copy-Item -Path .\Tasks\emailReportTask\node_modules\ -Destination .\dist\emailReportExtension\emailReportTask\ -Recurse
Copy-Item -Path .\Tasks\emailReportTask\README.md -Destination .\dist\emailReportExtension\
Copy-Item -Path .\LICENSE -Destination .\dist\emailReportExtension\
Copy-Item -Path .\Tasks\emailReportTask\images  -Destination .\dist\emailReportExtension\images\ -Recurse
Copy-Item -Path .\Tasks\emailReportTask\task.prod.json -Destination .\dist\emailReportExtension\emailReportTask\task.json
Copy-Item -Path .\Tasks\emailReportTask\vss-extension.json -Destination .\dist\emailReportExtension\vss-extension.json

#create
Set-Location .\dist\emailReportExtension\
npx tfx-cli extension create --manifest-globs vss-extension.json

Set-Location ..\..\
