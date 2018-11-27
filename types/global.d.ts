/** Global definitions for developement **/

// for style loader
declare module '*.css' {
  const styles: any;
  export = styles;
}
declare module '*.json' {
  const value: any;
  export default value;
}
