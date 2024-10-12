const projectId = 1
let projectName = "js foundations"
var projectAgenda = "learn js"
projectStatus = "began"

console.table([projectId, projectName, projectAgenda, projectStatus])

/* var is not prefered due to block scope and functonal scope issues
?: adjustments of a variable value for one file reflects on other files if they have a variable with same name 
#scope boundary undefined hence use of let is used*/