/**
 * Copyright (c) 2013 EIRL DEVAUX J. - Medialoha.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the GNU Public License v3.0
 * which accompanies this distribution, and is available at
 * http://www.gnu.org/licenses/gpl.html
 *
 * Contributors:
 *     EIRL DEVAUX J. - Medialoha - initial API and implementation
 */

var LOADER_HTML = '<div class="boxloader" ><img src="assets/images/loader.gif" /></div>';

function doRequest(action, data, onRequestDoneFunc) {
	$.ajax({ url:"?a="+action, type:"post", data:data }).done(onRequestDoneFunc);
}