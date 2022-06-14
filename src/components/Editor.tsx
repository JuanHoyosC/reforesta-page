import React, { useRef} from "react";
import JoditEditor from "jodit-react";

interface EditorProps {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const Editor: React.FC<EditorProps> = ({ setContent, content }) => {
  const editor = useRef(null);

  return (
    <JoditEditor
      ref={editor}
      value={content}
      onChange={(data) => setContent(data)}
    />
  );
};

export default Editor;
