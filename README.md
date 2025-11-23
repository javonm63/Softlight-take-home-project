# Softlight-take-home-project
This is the submission repo for my Softlight take home assignment.

FigML is a easy to use direct figma to HTML/CSS converter that takes any figma file and convert into an exact HTML replica. All you need are two things one: your personal Figma access token, and two: your Figma file key.

FEATURES
Figma to HTML/CSS conversion
User friendly UI/UX
Converted Doc preview
HTML file download
Tech support

HOW IT WORKS
FigML works by taking your Figma personal access token and file key then sends a request to its backend server which sends a request to Figma rest API after request validation. The response returned from the Figma rest API is then used to create and HTML document with inline styles matching your figma file picture perfectly, after the figma has been converted, the html file is then stored in the backend for approximately 10-15 mins. Once the html file get stored a success message appears on screen and the 'preview' and 'download' buttons also appear on screen for the same 10-15 mins duration, within this time frame users can view and/or download the converted html file as many times as they want following rate limits. For any help/assistance there's a convient support page that lets users fill out a form with their concerns/questions which is instantly sent to the applications developer after submission.

TECHNICAL DETAILS
The converter processes Figma nodes recursively and transforms them into clean, structured HTML elements. Frames and groups are represented as '<div>' containers, while text layers are output as '<p>' elements for clarity and readability. During conversion, the system automatically generates CSS that captures each element's visual properties—including positioning, fonts, colors, etc—ensuring the output closely matches the original design. To accurately reflect Figma's canvas, the layout uses absolute positioning or margins, preserving the exact spatial structure of the design.


LIMITATIONS:
Only supports basic Figma layers (Frame, Group, Text)
Does not convert images, vector graphics, or advanced components
Nested layouts may require additional CSS adjustments

SETUP
The first thing you need for the conversion to work is an actual figma file created and saved to your Figma workspace.

Next you need the Figma file's key usually it's the first path after the /design path in your file's url ie: https://www.figma.com/design/<file_key>

Lastly you need an Figma personal access token, you can generate your own token from your figma dashboard by: Menu-Settings-Secrity-Generate access token. When generating your access token the scopes you want to select are: file_content:read, file_metadata:read, library_content:read and team_library_content:read.

USAGE
To convert your figma file to an HTML document is a simple process, just enter your Figma file key and access token in their correct field then click enter. All done!(if there are any errors during the conversion they will appear on screen as alerts, same goes for successful conversions)
