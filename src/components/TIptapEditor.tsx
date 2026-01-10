import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

const TiptapEditor: React.FC = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: `
      <h2>Hello!</h2>
      <p>Start editing your lesson plan...</p>
    `,
  });

  return (
    <div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default TiptapEditor;
