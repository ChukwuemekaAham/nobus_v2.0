import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ScriptSnippet = ({ script, language }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="relative my-4 overflow-x-scroll scrollbar-hide hover:scrollbar-thin scrollbar-thumb-zinc-200 scrollbar-track-transparent mr-auto max-w-3xl text-justify">
      <pre className="rounded-lg px-4 py-2 bg-slate-300 border-l border-l-blue-500 ">
        <code className={`language-${language}`}>{script}</code>
      </pre>
      <CopyToClipboard text={script} onCopy={handleCopy}>
        <button
          className="absolute top-2 right-2 px-2 py-1 font-semibold bg-white text-gray-600 text-xs rounded "
          onClick={handleCopy}
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default ScriptSnippet;