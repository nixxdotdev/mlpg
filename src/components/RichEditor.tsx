// import React, { useState } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// interface RichEditorProps {
//   initialData?: string;
//   onChange?: (data: string) => void;
// }

// const RichEditor: React.FC<RichEditorProps> = ({
//   initialData = "",
//   onChange,
// }) => {
//   const [data, setData] = useState(initialData);

//   return (
//     <div
//       className="editor-container"
//       style={{ background: "#fff", padding: "16px" }}
//     >
//       <CKEditor
//         editor={ClassicEditor}
//         data={data}
//         onChange={(_, editor: ) => {
//           const html = editor.getData();
//           setData(html);
//           if (onChange) onChange(html);
//         }}
//         onReady={(editor) => {
//           console.log("CKEditor ready:", editor);
//         }}
//         onBlur={(_, editor) => {
//           console.log("Blur:", editor.getData());
//         }}
//         onFocus={(_, editor) => {
//           console.log("Focus:", editor.getData());
//         }}
//       />
//     </div>
//   );
// };

// export default RichEditor;
