/*
 * Copyright 2010 Research In Motion Limited.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @toc {BBM} Current User
 * @featureID blackberry.bbm.platform
 * @permission bbm_connect BBM APIs requre this permission to be set
 * @namespace Provides access to the current user's information.
 * @base blackberry.bbm.platform.users.BBMPlatformUser
 * @BB50+
 */
blackberry.bbm.platform.self = {
        
        prototype: new blackberry.bbm.platform.users.BBMPlatformUser(),
        
        /**
         * @description Gets the user's display picture.
         * @callback {Function} onComplete Invoked when the image has been retrieved.
         * @callback {String} onComplete.image Contains a base64 string representation of the image
         * @BB10X
         * @example
         * &lt;script type="text/javascript"&gt;
         * // Get the user's display picture
         * blackberry.bbm.platform.self.getDisplayPicture(function (image) {
         *     // do something with the image here
         * });
         * &lt;/script&gt;
         */
        getDisplayPicture: function (onComplete) { },

        /**
         * @name blackberry.bbm.platform.self.setDisplayPicture^2
         * @function
         * @description Sets the user's display picture from a URI. A dialog appears and allows the 
         * user to accept or cancel the change. Note that the display picture cannot exceed 32KB.
         * <p>The URI must be fully qualified. Non-local URIs must be whitelisted in the application's configuration file. Examples:
         * <ul>
         * <li>Locally from within the widget package (e.g. "local:///smiley.jpg")
         * <li>From the filesystem of a BB10 device (e.g. "file:///accounts/1000/shared/photos/smiley.jpg")
         * </ul>
         * </p>
         * @param {String} displayPictureURI The fully qualified URI.
         * @callback {Function} onSuccess Invoked when the request to change the display picture is shown to the user.
         * @callback {Boolean} onSuccess.success <code>true</code> if the image was found.
         * @callback {Function} onError Invoked when there was an error setting the picture.
         * @callback {String} onError.error Contains error message.        
         * @BB10X
         * @example
         * &lt;script type="text/javascript"&gt;
         * // Set the user's display picture
         * blackberry.bbm.platform.self.setDisplayPicture("local:///smiley.jpg", function (success) {
         *     alert("Image found");
         * }), function (error) {
         *     alert(error);
         * });
         * &lt;/script&gt;
         */

        /**
         * @name blackberry.bbm.platform.self.setDisplayPicture
         * @function
         * @description Sets the user's display picture from a URI. A dialog appears and allows the 
         * user to accept or cancel the change.
         * <p>The URI must be fully qualified. Non-local URIs must be whitelisted in the application's configuration file. Examples:
         * <ul>
         * <li>Locally from within the widget package (e.g. "local:///smiley.jpg")
         * <li>From the filesystem of a BB5.0+ device (e.g. "file:///SDCard/BlackBerry/pictures/smiley.jpg")
         * </ul>
         * </p>
         * @param {String} displayPictureURI The fully qualified URI.
         * @callback {Function} onComplete Invoked when the user has dismissed the dialog.
         * @callback {Boolean} onComplete.accepted <code>true</code> if the user accepted the change;
         * <code>false</code> otherwise.
         * @BB50+
         * @example
         * &lt;script type="text/javascript"&gt;
         * // Set the user's display picture
         * blackberry.bbm.platform.self.setDisplayPicture("local:///smiley.jpg", function (accepted) {
         *     if(accepted) {
         *         // User accepted the change
         *     } else {
         *         // User canceled the change
         *     }
         * });
         * &lt;/script&gt;
         */
        setDisplayPicture: function(displayPictureURI, onComplete) { },

        /**
         * @name blackberry.bbm.platform.self.setPersonalMessage^2
         * @description Sets the user's personal message. A dialog appears and allows the user to
         * accept or cancel the change.
         * @param {String} personalMessage The personal message. The maximum length is 160 characters;
         * anything over will be truncated. If <code>null</code> is provided then the personal message
         * is cleared.
         * @BB10X
         */

        /**
         * @name blackberry.bbm.platform.self.setPersonalMessage
         * @description Sets the user's personal message. A dialog appears and allows the user to
         * accept or cancel the change.
         * @param {String} personalMessage The personal message. The maximum length is 160 characters;
         * anything over will be truncated. If <code>null</code> is provided then the personal message
         * is cleared.
         * @callback {Function} onComplete Invoked if the user dismissed the dialog.
         * @callback {Boolean} onComplete.accepted <code>true</code> if the user accepted the change;
         * <code>false</code> otherwise.
         * @BB50+
         * @BB10X
         */
        setPersonalMessage: function(personalMessage, onComplete) { },
        
        /**
         * @name blackberry.bbm.platform.self.setStatus^2
         * @description Sets the user's status. A dialog appears and allows the user to accept
         * or cancel the change.
         * @param {String} status The status: one of <code>"available"</code> or <code>"busy"</code>.
         * @param {String} [message] The optional status message. If not provided, the default message of
         * either "Available" or "Busy" will be used.
         * @callback {Function} onComplete Invoked if the user dismissed the dialog.
         * @callback {Boolean} onComplete.accepted <code>true</code> if the user accepted the change;
         * <code>false</code> otherwise.
         * @BB10X
         */

        /**
         * @name blackberry.bbm.platform.self.setStatus
         * @description Sets the user's status. A dialog appears and allows the user to accept
         * or cancel the change.
         * @param {String} status The status: one of <code>"available"</code> or <code>"busy"</code>.
         * @param {String} [message] The optional status message. If not provided, the default message of
         * either "Available" or "Busy" will be used.
         * @callback {Function} onComplete Invoked if the user dismissed the dialog.
         * @callback {Boolean} onComplete.accepted <code>true</code> if the user accepted the change;
         * <code>false</code> otherwise.
         * @BB50+
         * @example
         * &lt;script type="text/javascript"&gt;
         * // Set the user's status and status message
         * blackberry.bbm.platform.self.setStatus("busy", "Playing Tic-Tac-Toe!", function (accepted) {
         *     if(accepted) {
         *         // User accepted the change
         *     } else {
         *         // User canceled the change
         *     }
         * });
         * &lt;/script&gt;
         */
        setStatus: function(status, message, onComplete) { }
};
