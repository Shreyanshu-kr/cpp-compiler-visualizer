import React, { useState } from "react";
import {
  Play,
  Code,
  Cpu,
  FileCode,
  Zap,
  CheckCircle,
} from "lucide-react";

const CompilerVisualizer = () => {

  const [sourceCode, setSourceCode] = useState(`int sum(int a, int b) {
    return a + b;
}`);

  const [currentPhase, setCurrentPhase] = useState(null);

  const [results, setResults] = useState({
    lexical: null,
    syntax: null,
    semantic: null,
    intermediate: null,
    optimized: null,
    target: null,
  });

  const phases = [
    {
      id: "lexical",
      name: "Lexical Analysis",
      icon: Code,
      description:
        "Breaks source code into tokens like keywords, variables and operators.",
      color: "bg-blue-500",
    },

    {
      id: "syntax",
      name: "Syntax Analysis",
      icon: FileCode,
      description:
        "Checks whether the source code follows valid syntax rules.",
      color: "bg-green-500",
    },

    {
      id: "semantic",
      name: "Semantic Analysis",
      icon: CheckCircle,
      description:
        "Checks variable declarations, scopes and return types.",
      color: "bg-yellow-500",
    },

    {
      id: "intermediate",
      name: "Intermediate Code",
      icon: Cpu,
      description:
        "Generates intermediate representation of the program.",
      color: "bg-violet-500",
    },

    {
      id: "optimized",
      name: "Code Optimization",
      icon: Zap,
      description:
        "Optimizes the generated intermediate code.",
      color: "bg-orange-500",
    },

    {
      id: "target",
      name: "Target Code",
      icon: FileCode,
      description:
        "Generates low level target assembly code.",
      color: "bg-red-500",
    },
  ];

  const examples = [
    {
      name: "Addition",
      code: `int sum(int a, int b) {
    return a + b;
}`,
    },

    {
      name: "Factorial",
      code: `int factorial(int n) {

    if(n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}`,
    },

    {
      name: "Prime Number",
      code: `bool isPrime(int n) {

    if(n <= 1) {
        return false;
    }

    for(int i = 2; i * i <= n; i++) {

        if(n % i == 0) {
            return false;
        }
    }

    return true;
}`,
    },
  ];

  const delay = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time));
  };

  const resetResults = () => {
    setResults({
      lexical: null,
      syntax: null,
      semantic: null,
      intermediate: null,
      optimized: null,
      target: null,
    });
  };
   //lexical analysis
  const simulateCompilation = async () => {

    resetResults();

    let functionName = "unknownFunction";
    let returnType = "int";

    let match = sourceCode.match(
      /(int|float|double|bool|void|string|char)\s+([a-zA-Z_][a-zA-Z0-9_]*)/
    );

    if (match) {
      returnType = match[1];
      functionName = match[2];
    }

    let words = sourceCode.match(
      /[A-Za-z_][A-Za-z0-9_]*|[0-9]+|==|<=|>=|!=|[{}();,+\-*/%=<>]/g
    );

    if (!words) {
      words = [];
    }

    let tokenList = [];

    for (let i = 0; i < words.length; i++) {

      let word = words[i];

      let type = "IDENTIFIER";

      if (
        word === "int" ||
        word === "float" ||
        word === "double" ||
        word === "bool" ||
        word === "void" ||
        word === "return" ||
        word === "if" ||
        word === "else" ||
        word === "for" ||
        word === "while"
      ) {
        type = "KEYWORD";
      }

      else if (
        word === "+" ||
        word === "-" ||
        word === "*" ||
        word === "/" ||
        word === "%" ||
        word === "=" ||
        word === "==" ||
        word === "<" ||
        word === ">"
      ) {
        type = "OPERATOR";
      }

      else if (!isNaN(word)) {
        type = "NUMBER";
      }

      else if (
        word === "(" ||
        word === ")" ||
        word === "{" ||
        word === "}" ||
        word === ";"
      ) {
        type = "SYMBOL";
      }

      tokenList.push({
        type: type,
        value: word,
        line: i + 1,
        description: type.toLowerCase(),
      });
    }

    setCurrentPhase("lexical");

    await delay(1000);

    setResults((prev) => ({
      ...prev,

      lexical: {
        tokens: tokenList,
        summary:
          "Source code converted into tokens successfully.",
      },
    }));
    //syntax analysis

    setCurrentPhase("syntax");

    await delay(1000);

    setResults((prev) => ({
      ...prev,

      syntax: {
        tree:
`Function Declaration
|
|-- Return Type : ${returnType}
|-- Function Name : ${functionName}
|-- Parameters
|-- Function Body
     |-- Statements
     |-- Expressions
     |-- Return Statement`,

        note:
          "Syntax rules verified successfully.",
      },
    }));
    // semantic

    setCurrentPhase("semantic");

    await delay(1000);

    setResults((prev) => ({
      ...prev,

      semantic: {

        symbolTable: [
          {
            name: functionName,
            category: "Function",
            dataType: returnType,
            scope: "Global",
            line: 1,
          },
        ],

        checks: [
          "Variables declared properly.",
          "Return type verified.",
          "Scope checking completed.",
          "Expressions are semantically valid.",
        ],
      },
    }));
    //intermediate

    setCurrentPhase("intermediate");

    await delay(1000);

    setResults((prev) => ({
      ...prev,

      intermediate: {

        code: [
          "START FUNCTION",
          "t1 = expression",
          "t2 = calculation",
          "if condition goto L1",
          "goto L2",
          "L1 : execute statement",
          "L2 : return value",
          "END FUNCTION",
        ],

        note:
          "Intermediate representation generated.",
      },
    }));

    setCurrentPhase("optimized");

    await delay(1000);

    setResults((prev) => ({
      ...prev,

      optimized: {

        code: [
          "START FUNCTION",
          "optimized expression",
          "removed extra instructions",
          "return value",
          "END FUNCTION",
        ],

        improvements: [
          "Removed unnecessary calculations.",
          "Improved execution flow.",
          "Reduced extra temporary variables.",
        ],
      },
    }));

    setCurrentPhase("target");

    await delay(1000);

    setResults((prev) => ({
      ...prev,

      target: {

        code: [
          `; Function : ${functionName}`,
          `${functionName}:`,
          "push ebp",
          "mov ebp, esp",
          "mov eax, [ebp+8]",
          "cmp eax, 0",
          "jg continue",
          "mov eax, 0",
          "jmp end",
          "",
          "continue:",
          "add eax, 1",
          "",
          "end:",
          "pop ebp",
          "ret",
        ],

        note:
          "Target assembly code generated successfully.",
      },
    }));

    setCurrentPhase("complete");
  };

  const renderCodeBlock = (code, commentSymbol = "//") => {

    return (
      <div className="bg-[#020617] text-[#e2e8f0] p-4 rounded-lg font-mono text-[14px] overflow-x-auto border border-slate-700 leading-6">

        {code.map((line, index) => (

          <div key={index}>

            {line && (
              <>
                <span className="text-slate-600 mr-4">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {line}
              </>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderPhaseOutput = (phaseId) => {

    const data = results[phaseId];

    if (!data) return null;

    if (phaseId === "lexical") {

      return (
        <div className="space-y-4">

          <div className="bg-[#1e293b] border border-slate-700 p-4 rounded-lg">
            <p className="text-sm text-slate-300">
              {data.summary}
            </p>
          </div>

          <div className="space-y-2">

            {data.tokens.map((token, index) => (

              <div
                key={index}
                className="grid grid-cols-4 gap-3 text-sm bg-[#1e293b] p-3 rounded-lg border border-slate-700"
              >

                <span className="font-medium text-blue-400">
                  {token.type}
                </span>

                <span className="font-mono text-slate-200">
                  {token.value}
                </span>

                <span className="text-slate-400">
                  {token.description}
                </span>

                <span className="text-slate-500 text-right">
                  Line {token.line}
                </span>

              </div>
            ))}
          </div>
        </div>
      );
    }

    if (phaseId === "syntax") {

      return (
        <div className="space-y-4">

          <div className="bg-[#1e293b] border border-slate-700 p-4 rounded-lg">
            <p className="text-sm text-slate-300">
              {data.note}
            </p>
          </div>

          <pre className="bg-[#020617] border border-slate-700 p-4 rounded-lg text-sm font-mono overflow-x-auto whitespace-pre text-slate-200">
            {data.tree}
          </pre>

        </div>
      );
    }
    if (phaseId === "semantic") {
  return (
    <div className="space-y-5">

      <div>
        <h4 className="font-semibold text-slate-200 mb-3">
          Symbol Table
        </h4>

        <div className="overflow-x-auto border border-slate-700 rounded-lg">
          <table className="w-full text-sm">
            <thead className="bg-[#1e293b]">
              <tr>
                <th className="p-3 text-left text-slate-300">Name</th>
                <th className="p-3 text-left text-slate-300">Category</th>
                <th className="p-3 text-left text-slate-300">Data Type</th>
                <th className="p-3 text-left text-slate-300">Scope</th>
                <th className="p-3 text-left text-slate-300">Line</th>
              </tr>
            </thead>

            <tbody>
              {data.symbolTable.map((item, index) => (
                <tr
                  key={index}
                  className="border-t border-slate-700 bg-[#0f172a]"
                >
                  <td className="p-3 text-slate-200">{item.name}</td>
                  <td className="p-3 text-slate-300">{item.category}</td>
                  <td className="p-3 text-slate-300">{item.dataType}</td>
                  <td className="p-3 text-slate-300">{item.scope}</td>
                  <td className="p-3 text-slate-400">{item.line}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h4 className="font-semibold text-slate-200 mb-3">
          Semantic Checks
        </h4>

        <ul className="space-y-2">
          {data.checks.map((item, index) => (
            <li
              key={index}
              className="bg-[#1e293b] border border-slate-700 p-3 rounded-lg text-sm text-slate-300"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

    if (
      phaseId === "intermediate" ||
      phaseId === "optimized" ||
      phaseId === "target"
    ) {

      return (
        <div className="space-y-4">

          <div className="bg-[#1e293b] border border-slate-700 p-4 rounded-lg">
            <p className="text-sm text-slate-300">
              {data.note}
            </p>
          </div>

          {renderCodeBlock(data.code)}
        </div>
      );
    }

    return null;
  };

  return (

    <div className="min-h-screen bg-[#0b1120] py-8 px-5">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-12">

          <h1 className="text-4xl font-semibold text-white tracking-tight">
            Compiler Phases Visualizer
          </h1>

          
        </div>

        <div className="bg-[#111827] border border-slate-700 rounded-lg p-5 mb-6">

          <h3 className="text-sm font-semibold text-slate-200 mb-3">
            Sample Snippet Code
          </h3>

          <div className="flex gap-3 flex-wrap">

            {examples.map((example, index) => (

              <button
                key={index}
                onClick={() => setSourceCode(example.code)}
                className="px-4 py-2 bg-[#1e293b] hover:bg-[#334155] text-slate-200 rounded-lg text-sm transition"
              >
                {example.name}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-[#111827] border border-slate-700 rounded-lg p-6 mb-6">

          <div className="flex justify-between items-center mb-4">

            <h2 className="text-xl font-semibold text-slate-100">
              Source Code
            </h2>

            <button
              onClick={simulateCompilation}
              className="flex items-center gap-2 bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-5 py-2 rounded-lg transition"
            >
              <Play size={16} />
              Start Compilation
            </button>

          </div>

          <textarea
            value={sourceCode}
            onChange={(e) => setSourceCode(e.target.value)}
            className="w-full h-72 font-mono text-[14px] p-4 border border-slate-700 rounded-lg bg-[#020617] text-[#e2e8f0] leading-6 focus:outline-none"
            spellCheck="false"
          />
        </div>

        <div className="space-y-5">

          {phases.map((phase, index) => {

            const Icon = phase.icon;

            const isComplete = results[phase.id] !== null;

            return (

              <div
                key={phase.id}
                className="bg-[#111827] border border-slate-700 rounded-lg overflow-hidden"
              >

                <div className="p-5 flex items-center gap-4 bg-[#111827]">

                  <div className={`${phase.color} p-3 rounded-lg text-white`}>
                    <Icon size={20} />
                  </div>

                  <div className="flex-1">

                    <h3 className="text-lg font-medium text-slate-100">
                      Phase {index + 1} : {phase.name}
                    </h3>

                    <p className="text-sm text-slate-400 mt-1 leading-6">
                      {phase.description}
                    </p>

                  </div>

                </div>

                {isComplete && (

                  <div className="p-6 bg-[#1e293b] border-t border-slate-700">

                    <div className="bg-[#111827] border border-slate-700 rounded-lg p-5">

                      {renderPhaseOutput(phase.id)}

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default CompilerVisualizer;