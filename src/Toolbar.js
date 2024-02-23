import React from "react";
import AlertButton from "./AlertButton";

function ToolBar() {
    // Define an array of button properties
      const buttons = [
          { message: 'Downloading!', children: 'Download File' },
          { message: 'Sharing!', children: 'Share Document' },
          // Add more button objects as needed
          { message: 'Button 3 Message!', children: null }, // Example with missing props
          { message: null, children: 'Button 4' }, // Example with missing props
      ];
  
      return (
          <div>
            {/* Render AlertButton components based on the buttons array */}
            {buttons.map((button, index) => (
              // Check if message and children props are present before rendering
              (button.message && button.children) ? (
                <AlertButton key={index} message={button.message}>
                  {button.children}
                </AlertButton>
              ) : (button.message) ? (
                // Render a placeholder if props are missing
                <AlertButton key={index} message={button.message}>
                  Error: No Text
                </AlertButton>
              ) : (
                  <AlertButton key={index} message={"Error: No Message"}>
                      {button.children}
                  </AlertButton>
              )
            ))}
          </div>
      );
}

export default ToolBar