# 🚀 SETUP GUIDE - C++ Compiler Visualizer

## Complete Step-by-Step Instructions

### Option 1: Download the Complete Folder (EASIEST)

1. **Download** the `compiler-visualizer-project` folder
2. **Open Terminal/Command Prompt** and navigate to the folder:
   ```bash
   cd path/to/compiler-visualizer-project
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Run the app**:
   ```bash
   npm start
   ```
5. **Done!** Your browser will open at http://localhost:3000

---

### Option 2: Extract from Archive

1. **Download** `compiler-visualizer-complete.tar.gz`
2. **Extract it**:
   - Windows: Use 7-Zip or WinRAR
   - Mac/Linux: 
     ```bash
     tar -xzf compiler-visualizer-complete.tar.gz
     cd compiler-visualizer-project
     ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Run**:
   ```bash
   npm start
   ```

---

## 📁 What's Inside?

```
compiler-visualizer-project/
├── public/
│   └── index.html                    ← HTML template
├── src/
│   ├── index.js                      ← Entry point
│   ├── index.css                     ← Tailwind styles
│   ├── App.js                        ← Main component
│   └── CompilerVisualizer.jsx        ← Main visualizer (850+ lines)
├── package.json                      ← All dependencies listed
├── tailwind.config.js                ← Tailwind configuration
├── postcss.config.js                 ← PostCSS config
├── .gitignore                        ← Git ignore file
└── README.md                         ← Documentation
```

---

## ⚡ Quick Commands

After setup, use these commands:

```bash
# Start development server
npm start

# Build for production
npm build

# Stop the server
Ctrl + C
```

---

## 🔧 Prerequisites

Make sure you have installed:
- **Node.js** (version 14 or higher)
  - Download from: https://nodejs.org/
  - Verify: `node --version`
- **npm** (comes with Node.js)
  - Verify: `npm --version`

---

## 🐛 Troubleshooting

### Issue: "npm not found"
**Solution**: Install Node.js from nodejs.org

### Issue: Port 3000 already in use
**Solution**: 
```bash
# Kill the process on port 3000
# Windows: 
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:3000 | xargs kill
```

### Issue: Dependencies not installing
**Solution**: 
```bash
# Clear npm cache
npm cache clean --force
# Delete node_modules and try again
rm -rf node_modules
npm install
```

---

## ✅ Verify Installation

After running `npm start`, you should see:
- Terminal says "Compiled successfully!"
- Browser opens to http://localhost:3000
- You see "C++ Compiler Phases Visualizer" title
- Three example buttons: Prime Number Check, Factorial, Fibonacci
- A code editor with C++ code
- "Start Compilation" button

---

## 🎯 How to Use

1. **Load an example** by clicking one of the three buttons
2. **Or write your own** C++ code in the editor
3. Click **"Start Compilation"**
4. Watch as it processes through 6 phases:
   - Lexical Analysis
   - Syntax Analysis
   - Semantic Analysis
   - Intermediate Code
   - Optimization
   - Code Generation
5. Click on any completed phase to view its output

---

## 📚 For Your College Project

**What to show your teacher:**
✅ Real C++ logic (Prime number checker)
✅ All 6 compiler phases with detailed output
✅ Symbol table, type checking, AST
✅ Three-address code (TAC)
✅ Code optimizations explained
✅ x86 Assembly generation

**Extra points:**
- Clean, professional UI
- Interactive and educational
- Well-documented code
- Multiple examples included

---

## 💡 Next Steps (Optional Enhancements)

If you want to improve it further:
1. Add a backend to actually parse C++ code
2. Support more C++ features (classes, templates)
3. Add syntax highlighting in the code editor
4. Export compilation results as PDF
5. Add error handling for invalid C++ code

---

## 📞 Need Help?

If you encounter any issues:
1. Check that Node.js is installed: `node --version`
2. Make sure you're in the right folder
3. Try deleting `node_modules` and running `npm install` again
4. Check that port 3000 is available

---

Good luck with your project! 🎓✨
