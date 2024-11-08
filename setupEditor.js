import { EditorState, basicSetup } from "@codemirror/basic-setup";
import { EditorView, keymap } from "@codemirror/view";
import { defaultTabBinding } from "@codemirror/commands"; // Corrected import
import { json } from "@codemirror/lang-json";

export default function setUpEditors(editor) {
    const jsonRequestBody = document.querySelector("[data-json-request-body]");
    const jsonResponseBody = document.querySelector("[data-json-response-body]");

    const basicExtensions = [
        basicSetup,
        keymap.of([defaultTabBinding]),
        json(),
        EditorState.tabSize.of(2),
    ];

    const requestEditor = new EditorView({
        state: EditorState.create({
            doc: "{\t\n\t}",
            extensions: basicExtensions,
        }),
        parent: jsonRequestBody,
    });

    const responseEditor = new EditorView({
        state: EditorState.create({
            doc: "{}",
            extensions: [...basicExtensions, EditorView.editable.of(false)],
        }),
        parent: jsonResponseBody,
    });

    function updateResponseEditor(value) {
        responseEditor.dispatch({
            changes: {
                from: 0,
                to: responseEditor.state.doc.length,
                insert: JSON.stringify(value, null, 2),
            },
        });
    }

    return { requestEditor, updateResponseEditor };
}
