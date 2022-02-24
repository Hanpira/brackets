module.exports = function check(str, bracketsConfig) {
  // your solution
  if ((str.length + 1) % 2 == 0 ) { /* if str.length is odd number - we can stop here immediately */
    return false;
  };

  let arr = bracketsConfig.map(el => el.join(''));
  for (let i = 0; i < arr.length;) {  /* coming through array finding out if there's bracket in the string */
    if (str.includes(arr[i])) {
    str = str.replace(arr[i], '');
    i = 0;
    }
    else {
      i ++;
    }
  }
  return (str.length === 0);  /* return boolean */

}