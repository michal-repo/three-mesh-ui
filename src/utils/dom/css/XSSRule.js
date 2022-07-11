import CSSQuery from './CSSQuery';
import CSSSpecificity from './CSSSpecificity';

export default class XSSRule {

	/**
	 *
	 * @param {string} queryString
	 * @param {Object.<string, string>} styles
	 */
	constructor( queryString, styles ) {

		/**
		 *
		 * @type {CSSQuery}
		 * @private
		 */
		this._query = CSSQuery.build( queryString );

		/**
		 *
		 * @type {number}
		 * @private
		 */
		this._specificity = CSSSpecificity( this._query );


		this._styles = {};

		// Build styles
		// @TODO: Could use a lookup table for property and/or value conversion
		for ( let k = 0; k < styles.length; k++ ) {
			const styleProperty = styles[ k ];

			let value = styles[styleProperty];

			value = value.replace(/rem|px|em/g, '');

			if( styleProperty.indexOf('color') !== -1 ) {

				// if the value comes with packed alpha
				if( value.indexOf('rgba') === 0 ) {

					// extract rgba components
					/* eslint-disable no-useless-escape */
					const colorComponents = value.match(/([\d\.]+)/g);
					/* eslint-enable no-useless-escape */

					// To apply alpha too
					if( colorComponents.length === 4 ) {
						const alphaProperty = styleProperty.replace('color', 'opacity');

						// If it is not previously defined
						if( !styles[alphaProperty] || styles[alphaProperty] === "" ){
							this._styles[_camelize(alphaProperty)] = parseFloat( colorComponents[3] );
						}
					}
				}
			}

			this._styles[_camelize(styleProperty)] = value;

		}

		/**
		 *
		 * @type {boolean}
		 * @private
		 */
		this._enabled = true;

	}

	/**
	 *
	 * @returns {boolean}
	 */
	get enabled() { return this._enabled; }

	/**
	 *
	 * @param v
	 */
	set enabled( v ) {
		this._enabled = v;
	}

	/**
	 *
	 * @returns {CSSQuery}
	 */
	get query(){ return this._query; }

	/**
	 *
	 * @returns {number}
	 */
	get specificity() { return this._specificity; }

	/**
	 *
	 * @returns {Object.<string,any>}
	 */
	get styles() { return this._styles; }
}

/**
 *
 * @param {string} s
 * @returns {string}
 * @private
 */
function _camelize( s ) {
	return s.replace( /-./g, x => x[ 1 ].toUpperCase() );
}
