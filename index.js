const formatDate = (timeInSeconds) => {
  if (timeInSeconds === undefined ) {
    return '0s';
  }  else if (timeInSeconds < 60) {
      return `${timeInSeconds}s`;
  } else if (Number.isInteger(timeInSeconds/60) && timeInSeconds < 3600){
    return (timeInSeconds / 60) + 'm';
  }
  else if (timeInSeconds < 3600 ) {
    return  Math.floor(timeInSeconds / 60) + 'm ' + (timeInSeconds % 60) + 's';
  } else if (Number.isInteger(timeInSeconds/3600) && timeInSeconds > 3600) {
    return (timeInSeconds / 3600 + 'h')
  } else if (timeInSeconds % 60 === 0 && timeInSeconds > 3600 ) {
    return Math.floor(timeInSeconds / 3600) + 'h ' + (Math.floor((timeInSeconds % 3600)/60)) + 'm';
  } else if (timeInSeconds > 3600 && (Math.floor((timeInSeconds % 3600)/60)) ==0 ) {
    return Math.floor(timeInSeconds / 3600) + 'h ' + (timeInSeconds % 60) + 's';
  } else {
    return Math.floor(timeInSeconds / 3600) + 'h ' + (Math.floor((timeInSeconds % 3600)/60)) + 'm ' + (timeInSeconds % 60) + 's';
  }
}

module.exports = formatDate;