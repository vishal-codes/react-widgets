import "./Editor.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";

const Editor = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleChange = ({ target }) => {
    const { value } = target;
    setTitle(value);
  };

  return (
    <div className="editor-container">
      <p className="editor-title">Title</p>
      <input
        type="text"
        value={title}
        onChange={handleChange}
        name="title"
        className="editor-title-text"
      />
      <p className="editor-content">Content</p>
      <CKEditor
      className='editor-content-text'
      editor={ ClassicEditor }
        data={content}
        
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
        }}
      />
    </div>
  );
};
const editorConfiguration = {
  toolbar: [ 'bold', 'italic' ]
};
export default Editor;
