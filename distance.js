// Calculate distance in km between 2 coordinates
function distance(latA, longA, latB, longB) {
    latA = radians(latA)
    longA = radians(longA)
    latB = radians(latB)
    longB = radians(longB)

    dlon = longB - longA  
    dlat = latB - latA
    a = Math.sin(dlat / 2)**2 + Math.cos(latA) * Math.cos(latB) * Math.sin(dlon / 2)**2
  
    c = 2 * Math.asin(Math.sqrt(a))  
     
    // Radius of earth in kilometers. Use 3956 for miles 
    r = 6371
       
    return(c * r) 

}

function radians(degrees)
{
  var pi = Math.PI;
  return degrees * (pi/180);
}