import React, { useState } from "react";
import { FaTerminal } from "react-icons/fa6";
import { BiSolidTerminal } from "react-icons/bi";
import get from "../data/terminal.data";

const Terminal = () => {
  const [terminalText, setTerminalText] = useState("> ");
  const [currentCommand, setCurrentCommand] = useState("");
  const [terminalHistory, setTerminalHistory] = useState("> ");

  const terminalSubmit = () => {
    const response = get(currentCommand);
    setTerminalHistory(terminalText + "\n" + response + "\n> ");
    setTerminalText((currentState) => currentState + "\n" + response + "\n> ");
    setCurrentCommand("");
  };
  
  const terminalChange = (e) => {
    const currentText = e.target.value;
    setTerminalText(currentText);

    const commandLength = currentText.length - terminalHistory.length;
    const command = currentText.substr(terminalHistory.length, commandLength);
    setCurrentCommand(command);
  };

  const terminalKeyDown = (e) => {
    if(e.key === "Enter") {
      e.preventDefault();
      if(currentCommand === "clear") {
        setTerminalText("> ");
        setCurrentCommand("");
        setTerminalHistory("> ");
        return;
      }

      terminalSubmit();
    } else if(e.key === "Backspace") {
      if(currentCommand.length === 0) {
        e.preventDefault();
      }
    }
  }

  return (
    <div>
      <div className="flex justify-center pt-24 pb-18">
        <hr className="w-196 max-w-full mx-8" />
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-4 pb-6">
          <hr className="w-24" />
          <p className="text-2xl font-black">FUN ZONE</p>
          <hr className="w-24" />
        </div>

        <p className="max-w-screen w-196 text-center">
          If you're the kind of person who opens DevTools on every website, this
          section is for you. A small interactive terminal built for developers,
          engineers, and terminal enjoyers. Start with: <i>help</i>
        </p>

        <div>
          <div className="max-w-screen w-240 h-120 border border-white rounded-md mt-12 flex flex-col">
            <div className="w-full bg-neutral-900 h-8 rounded-t-md flex items-center justify-between px-4 py-4.5">
              <div className="flex items-center justify-center gap-2">
                <FaTerminal />
                <p>Terminal</p>
              </div>

              <div className="flex items-center gap-3">
                {["bg-green-700", "bg-yellow-600", "bg-red-600"].map(
                  (item, index) => (
                    <div
                      className={`rounded-full h-4 aspect-square ${item}`}
                      key={index}
                    ></div>
                  ),
                )}
              </div>
            </div>

            <div className="w-full bg-black flex-1 rounded-b-md px-4 py-2">
              <textarea
                className="w-full h-full resize-none outline-0 text-sm"
                onSubmit={terminalSubmit}
                onChange={terminalChange}
                value={terminalText}
                onKeyDown={terminalKeyDown}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
