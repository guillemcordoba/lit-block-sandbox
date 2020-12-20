import { LitElement, Constructor } from "lit-element";
import { Block, BlockLayoutNode, BlockSet } from "./types";
import { BlockBoardLayoutEditor } from "./block-board-layout-editor";
import { BlockBoardLayoutRenderer } from "./block-board-layout-renderer";
import { BlockBoardBlockSelector } from "./block-board-block-selector";
import { Drawer } from "scoped-material-components/mwc-drawer";
import { IconButton } from "scoped-material-components/mwc-icon-button";
declare const BlockBoard_base: Constructor<LitElement>;
export declare class BlockBoard extends BlockBoard_base {
    editing: boolean;
    private _blockSets;
    set blockSets(blocks: BlockSet[]);
    get blockSets(): BlockSet[];
    get availableBlocks(): Block[];
    blockLayout: BlockLayoutNode | undefined;
    static styles: import("lit-element").CSSResult[];
    static get scopedElements(): {
        "mwc-drawer": typeof Drawer;
        "mwc-icon-button": typeof IconButton;
        "block-board-layout-renderer": typeof BlockBoardLayoutRenderer;
        "block-board-layout-editor": typeof BlockBoardLayoutEditor;
        "block-board-block-selector": typeof BlockBoardBlockSelector;
    };
    saveLayout(): void;
    renderLayout(): import("lit-element").TemplateResult;
    renderEditingMode(): import("lit-element").TemplateResult;
    render(): import("lit-element").TemplateResult;
}
export {};
