/**
 * Copyright (c) 2012 Marcelo Mesquita
 *
 * Written by Marcelo Mesquita <stallefish@gmail.com>
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the
 * Free Software Foundation, Inc.,
 * 59 Temple Place - Suite 330, Boston, MA 02111-1307, USA.
 *
 * Public License can be found at http://www.gnu.org/copyleft/gpl.html
 *
 * Plugin Name: jMemory
 * Plugin URI: http://marcelomesquita.com/
 * Description: erase the default input text on focus
 * Author: Marcelo Mesquita
 * Version: 0.1
 * Author URI: http://marcelomesquita.com/
 */

jQuery.fn.jmemory = function() {
	return this.each( function() {
		var memory_value = jQuery( this ).val();

		jQuery( this ).focusin( function() {
			if( jQuery( this ).val() == memory_value )
			{
				jQuery( this ).val( '' );
			}
		} );

		jQuery( this ).focusout( function() {
			if( jQuery( this ).val() == '' )
			{
				jQuery( this ).val( memory_value );
			}
		} );
	} );
}