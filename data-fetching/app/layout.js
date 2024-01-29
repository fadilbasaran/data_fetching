import React from "react";


export default  function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
      style={{
        height:"100vh",
        display:"grid",
        placeItems: "center",
        background:"#222",
        color:"#fafafa",
        fontFamily:"sans-serif"
      }}
      >{children}</body>
    </html>
  );
}
