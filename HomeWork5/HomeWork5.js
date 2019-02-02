/**
 * Add two time values together.
 * 
 * This function reads two time values with different labels ('minute', 'hour',..etc)
 * and add those values together.
 *
 * @param {number} value1  'The value of the first time'.
 * @param {string} label1  'The time label of the first time'. 
 * @param {number} value2  'The value of the second time'.
 * @param {string} label2  'The time label of the second time'. 
 *
 * @return {object} A combination of the result's value and label
 *
 */
function timeAdder(value1, label1, value2, label2){
  // Use this variable to store the total number of seconds for both values
  var total_sec = 0;

  // Check the validity of the inputs
  var valid1 = validateInput(value1, label1);
  var valid2 = validateInput(value2, label2);
  
  // If either of the inputs is not valid, return false
  if(!valid1 || !valid2)
    return false;
  
  // Based on label1, find the total number of seconds in value1
  switch(label1){
    case 'second':
    case 'seconds':
      total_sec += value1;
      break;
    case 'minute':
    case 'minutes':
      total_sec += value1 * 60;
      break;
    case 'hour':
    case 'hours':
      total_sec += value1 * 60 * 60;
      break;
    case 'day':
    case 'days':
      total_sec += value1 * 60 * 60 * 24;
      break;
  }
  
  // Based on label2, find the total number of seconds in value2
  switch(label2){
    case 'second':
    case 'seconds':
      total_sec += value2;
      break;
    case 'minute':
    case 'minutes':
      total_sec += value2 * 60;
      break;
    case 'hour':
    case 'hours':
      total_sec += value2 * 60 * 60;
      break;
    case 'day':
    case 'days':
      total_sec += value2 * 60 * 60 * 24;
      break;
  }
     
  // Find the largest label that can be used with an integer value
  return calculateLargestLabel(total_sec);
 }

 
/**
 * Check the validity of the given inputs.
 * 
 * This function reads two values and chaecks that the first value is a number
 * and the second is a string representing a valid time label ('minute', 'hour',..etc)
 * and that the label and value are consistent with each other
 *
 * @param {number} value  'The value of the time'.
 * @param {string} label  'The time label of the time'. 
 *
 * @return {boolean} 'Returns true if the inputs are valid, false otherwise'.
 *
 */
function validateInput(value, label){
  // List of possible labels
  var labels = ['day', 'hour', 'minute', 'second', 'days', 'hours', 'minutes', 'seconds'];
  
  // The type of the label must be string
  if(!(typeof label === 'string' || label instanceof String)){
    return false;
  }

  // The type of the value must be a number  
  if(typeof value === 'string' || value instanceof String || typeof value === 'boolean'){
    return false;
  }
  
  // The label must be included in the label's list
  if(!(labels.includes(label))){
    return false;
  }

  // The value number must not be negative  
  if(value < 0){
    return false;
  }
  
  // If the label is plural, then the value should be greater than 1, and vice versa
  if(label.endsWith('s')){
    if(value <= 1){
      return false;
    }
  }  else {
    if(value > 1){
      return false;
    }
  }
  
  // If it passes all above tests, inputs are valid
  return true;
}

/**
 * Calculate the largest time label for a given amount of seconds.
 * 
 * This function reads a number of seconds and finds the the largest label 
 * that can be used with an integer value.
 *
 * @param {number} seconds  'A number of seconds'.
 *
 * @return {object} A combination of the result's value and label
 *
 */
function calculateLargestLabel(seconds){
  let value = 0;
  let label = '';
  
  // Check if it divisble by days
  value = seconds / 24 / 60 / 60;
  if(value - Math.floor(value) === 0){
    if(value > 1)
      return [value, 'days'];
    else
      return [value, 'day'];
  }
  
  // Check if it divisble by hours
  value = seconds / 60 / 60;
  if(value - Math.floor(value) === 0){
    if(value > 1)
      return [value, 'hours'];
    else
      return [value, 'hour'];
  }
  
  // Check if it divisble by minutes  
  value = seconds / 60;
  if(value - Math.floor(value) === 0){
    if(value > 1)
      return [value, 'minutes'];
    else
      return [value, 'minute'];
  }
  
  if(seconds > 1)
      return [seconds, 'seconds'];
    else
      return [seconds, 'second'];
  
}

console.log(timeAdder(23,'hours', 1 , 'hour'));



