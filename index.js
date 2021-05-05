// Code your solution here
const findMatching= function(arrayOfDrivers,stringName)
{

 return arrayOfDrivers.filter((x)=> x.toLowerCase()==stringName.toLowerCase())
}

function fuzzyMatch(arrayOfDrivers,stringName)
{
return arrayOfDrivers.filter((x)=>x.charAt(0)==stringName.charAt(0))
} 
function matchName(arrayOfDriverObj,stringName)
{
return arrayOfDriverObj.filter((x)=> x.name.toLowerCase()==stringName.toLowerCase())
}