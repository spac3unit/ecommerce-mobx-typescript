// removes a value from array
export function arrayRemove(arr, value) {
  return arr.filter(function(ele) {
    return ele != value;
  });
}
