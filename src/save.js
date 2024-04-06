/**
 * WordPress dependencies
 */
import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

/**
 * Internal dependencies
 */
import metadata from "./block.json";

function Save(props) {
  const { attributes } = props;
  const inlineStyles = {
    maxWidth: attributes.boxwidth + "vw",
    fontSize: attributes.fontsize + "vw",
    textAlign: attributes.textalign,
  };
  const blockProps = useBlockProps.save({
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
    </>
  );
}
export default Save;
