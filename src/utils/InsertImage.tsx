import type { Editor } from "@tiptap/react";

interface EditorToolbarProps {
  editor: Editor | null;
}

function InsertImage({ editor }: EditorToolbarProps) {
  if (!editor) return null;

  const handleImageUpload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = () => {
        // Just pass the src. The resize extension handles the rest.
        editor
          .chain()
          .focus()
          .setImage({ src: reader.result as string })
          .run();
      };
      reader.readAsDataURL(file);
    };
    input.click();
  };

  return <button onClick={handleImageUpload}>Insert Image</button>;
}

export default InsertImage;
