#build
npm run build:t1

#copy files
Copy-Item -Path .\Tasks\emailReportTask\ -Destination .\dist\emailReportExtension\emailReportTask\ -Recurse
Copy-Item -Path .\Tasks\emailReportTask\README.md -Destination .\dist\emailReportExtension\
Copy-Item -Path .\LICENSE -Destination .\dist\emailReportExtension\ 

#create
Set-Location .\dist\emailReportExtension\
npx tfx-cli extension create

