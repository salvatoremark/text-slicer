/**
 * WordPress dependencies
 */
import { registerBlockType } from "@wordpress/blocks";

/**
 * Internal dependencies
 */
import edit from "./edit";
import save from "./save";
import icon from "./assets/icon.svg";
import metadata from "./block.json";

/**
 * All files containing `style` keyword are bundled together. The code
 * gets applied both to the frontend and the editor.
 */
import "./style.scss";

registerBlockType(metadata.name, {
  edit,
  save,
  icon: <img src={icon} width='25px' alt='' />,
});
