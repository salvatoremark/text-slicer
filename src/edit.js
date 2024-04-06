/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import {
  useBlockProps,
  InspectorControls,
  BlockControls,
  AlignmentToolbar,
} from "@wordpress/block-editor";
import { PanelBody, TextControl, RangeControl } from "@wordpress/components";

/**
 * Internal dependencies
 */
import metadata from "./block.json";

function Edit(props) {
  const { attributes, setAttributes } = props;
  const inlineStyles = {
    maxWidth: attributes.boxwidth + "vw",
    fontSize: attributes.fontsize + "vw",
    textAlign: attributes.textalign,
  };
  const blockProps = useBlockProps({
    className: "wrapper",
    style: inlineStyles,
  });

  return (
    <>
      <div {...blockProps}>
        <div className='top'>
          {__(attributes.textinput, metadata.textdomain)}
        </div>
        <div className='bottom' aria-hidden='true'>
          {__(attributes.textinput, metadata.textdomain)}
        </div>
      </div>

      <BlockControls>
        <AlignmentToolbar
          value={attributes.textalign}
          onChange={(textalign) => setAttributes({ textalign })}
        />
      </BlockControls>

      <InspectorControls>
        <PanelBody
          title={__("CONTROLS", metadata.texdomain)}
          initialOpen={true}>
          <TextControl
            label={__("Text")}
            value={attributes.textinput}
            onChange={(textinput) => setAttributes({ textinput })}
          />

          <RangeControl
            label='Font Size'
            value={attributes.fontsize}
            onChange={(fontsize) => setAttributes({ fontsize })}
            min={3}
            max={15}
          />
          <RangeControl
            label='Box Width'
            value={attributes.boxwidth}
            onChange={(boxwidth) => setAttributes({ boxwidth })}
            min={3}
            max={100}
          />
        </PanelBody>
      </InspectorControls>
    </>
  );
}
export default Edit;
