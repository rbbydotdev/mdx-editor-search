import { MdxSearchToolbar } from "@/search/MdxEditorSearchToolbar";
import {
  BoldItalicUnderlineToggles,
  headingsPlugin,
  listsPlugin,
  ListsToggle,
  MDXEditor,
  toolbarPlugin,
} from "@mdxeditor/editor";
import "@mdxeditor/editor/style.css";
import { useRef } from "react";
import LoremText from "./search/LoremText";
import "./styles.css";

export default function App() {
  const ref = useRef(null);

  return (
    <div>
      <MDXEditor
        markdown={LoremText}
        ref={ref}
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          toolbarPlugin({
            toolbarContents: () => (
              <>
                <MdxSearchToolbar />
                <BoldItalicUnderlineToggles />
                <ListsToggle />
              </>
            ),
          }),
        ]}
      />
    </div>
  );
}
