figma.showUI(__html__, { width: 300, height: 105 });

figma.ui.onmessage = (msg) => {
  if (msg.type === "lint-selection-spaces") {
    async function lintSelectionSpaces() {
      figma.currentPage.selection.forEach(async (node) => {
        if (node.type === "TEXT") {
          await figma.loadFontAsync(node.fontName as FontName);
          let textToLint = node.characters;
          console.log(textToLint);
          node.characters = textToLint.replace(/  +/g, " ");
        }
      });
    }
    lintSelectionSpaces();
  }

  if (msg.type === "lint-spaces") {
    async function lintSpaces() {
      figma.currentPage.findAll().forEach(async (node) => {
        if (node.type === "TEXT") {
          await figma.loadFontAsync(node.fontName as FontName);
          let textToLint = node.characters;
          console.log(textToLint);
          node.characters = textToLint.replace(/  +/g, " ");
        }
      });
    }
    lintSpaces();
  }

  if (msg.checkboxOn === true) {
    figma.closePlugin();
  }
};
