var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    function lintSpaces() {
        return __awaiter(this, void 0, void 0, function* () {
            figma.currentPage.findAll().forEach((node) => __awaiter(this, void 0, void 0, function* () {
                if (node.type === "TEXT") {
                    yield figma.loadFontAsync(node.fontName);
                    removeSpaces(node);
                }
            }));
        });
    }
    function lintSelectionSpaces() {
        return __awaiter(this, void 0, void 0, function* () {
            figma.currentPage.selection.forEach((node) => __awaiter(this, void 0, void 0, function* () {
                if (node.type === "TEXT") {
                    yield figma.loadFontAsync(node.fontName);
                    removeSpaces(node);
                }
            }));
        });
    }
    function removeSpaces(node) {
        return __awaiter(this, void 0, void 0, function* () {
            if (node.type === "TEXT") {
                node.characters = node.characters.replace(/  +/g, " ");
            }
        });
    }
};
