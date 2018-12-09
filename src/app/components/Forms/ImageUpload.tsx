// import * as React from 'react';

// export interface UploadImageProps {}

// export default class UploadImage extends React.Component<any, any> {
//   state = {
//     loading: true,
//     uploading: false,
//     images: [],
//     files: []
//   };

//   fileChangedHandler = (e) => {
//     const errs = [];
//     const files = Array.from(e.target.files);
//     if (files.length > 3) {
//       const msg = 'Only 3 images can be uploaded at a time';
//       console.log(msg);
//     }
//     this.setState({ files });
//   };

//   uploadHandler = (e) => {
//     const formData = new FormData();
//     const types = ['image/png', 'image/jpeg', 'image/gif'];
//     this.state.files.forEach((file, i) => {
//       if (types.every((type) => file.type !== type)) {
//         errs.push(`'${file.type}' is not a supported format`);
//       }

//       if (file.size > 150000) {
//         errs.push(`'${file.name}' is too large, please pick a smaller file`);
//       }

//       formData.append(i, file);
//     });

//     fetch(`http://localhost:1337/image-upload`, {
//       method: 'POST',
//       body: formData
//     });
//   };
//   public render() {
//     return (
//       <div>
//         <form>
//           <input type="file" onChange={this.fileChangedHandler} />
//           <input type="submit" value="Upload" />
//         </form>
//       </div>
//     );
//   }
// }
