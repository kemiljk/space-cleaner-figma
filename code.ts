figma.showUI(__html__, { width: 300, height: 105 });

figma.ui.onmessage = (msg) => {
  if (msg.type === "lint-spaces") {
    lintSpaces();
  }

  if (msg.type === "lint-selection-spaces") {
    lintSelectionSpaces();
  }

  if (msg.checkboxOn === true) {
    figma.closePlugin();
  }

  // Async functions

  async function lintSpaces() {
    figma.currentPage.findAll().forEach(async (node) => {
      if (node.type === "TEXT") {
        await figma.loadFontAsync(node.fontName as FontName);
        removeSpaces(node);
      }
    });
  }

  async function lintSelectionSpaces() {
    figma.currentPage.selection.forEach(async (node) => {
      if (node.type === "TEXT") {
        await figma.loadFontAsync(node.fontName as FontName);
        removeSpaces(node);
      }
    });
  }

  async function removeSpaces(node) {
    if (node.type === "TEXT") {
      node.characters = node.characters.replace(/  +/g, " ");
    }
  }
};
