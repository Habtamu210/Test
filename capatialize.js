function capitalize(string) {
  if(typeof (string) !== 'string' || string.length === 0){
    return 'Not a string';
  } else {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

module.exports = capitalize;