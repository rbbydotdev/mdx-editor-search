import {
  BoldItalicUnderlineToggles,
  listsPlugin,
  headingsPlugin,
  ListsToggle,
  MDXEditor,
  toolbarPlugin,
} from "@mdxeditor/editor";
import { useState } from "react";
import "./styles.css";
import "@mdxeditor/editor/style.css";
import Markdown from "markdown-to-jsx";
import { useRef } from "react";

export default function App() {
  const ref = useRef(null);

  return (
    <div>
      <MDXEditor
        markdown="# Hello world"
        ref={ref}
        plugins={[
          headingsPlugin(),
          listsPlugin(),
          toolbarPlugin({
            toolbarContents: () => (
              <>
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
