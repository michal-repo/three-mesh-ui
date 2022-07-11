export default class NamedMap {

	/**
	 *
	 * @param callback
	 * @param entries
	 */
	constructor( callback, entries = {} ) {

		this._callback = callback;

		this._map = new Map();

		//
		for ( const entryName in entries ) {
			this.set( entryName, entries[ entryName ] );
		}

	}

	clear(){

		this._map.clear();

	}

	/**
	 *
	 * @param {string} name
	 * @param {*} value
	 */
	set( name, value = null ) {

		// undefined value is remove
		if( value === undefined ){
			this.remove( name );
		}

		this._map.set( name, value );
	}

	/**
	 *
	 * @param name
	 * @returns {string}
	 */
	get( name ) {
		return this._map.get( name );
	}

	/**
	 *
	 * @param name
	 */
	remove( name ) {
		this._map.delete( name );
	}

	/**
	 *
	 * @param name
	 * @returns {boolean}
	 */
	has( name ) {
		return this._map.has( name );
	}

	/**
	 *
	 * @returns {string}
	 */
	toString(){

		let output = "";

		const entries = this._map.entries();
		for (const [key, value] of entries ) {
			if( value ){
				output += `[${key}="${value}"]`;
			}else{
				output += `[${key}]`;
			}
		}

		return output;
	}

	match = ( attributeCondition ) => {

		const name = attributeCondition.name;
		const value = attributeCondition.value;
		const operator = attributeCondition.operator;


		let v;
		switch ( operator ) {

			// Starts with
			case "^=":
				v = this._map.get( name );
				return v && v.startsWith( value );

			// Contains
			case "*=":
				v = this._map.get( name );
				return v && v.includes( value );

			// Ends with
			case "$=":
				v = this._map.get( name );
				return v && v.endsWith( value );

			case '!==':
				return this._map.has( name );

			default:
				console.warn(`NamedMap::match() - The provided operator '${operator}' is not implemented`)
		}

	}

	matchEvery = ( attributeConditions ) => {

		return attributeConditions.every( this.match );

	}

	/**
	 *
	 */
	dispose() {

		this._callback = false;

		this._map.clear();
		this._map = null;

		this._map = null;

	}



}
