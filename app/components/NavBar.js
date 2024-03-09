import React from "react"

export const NavBar = () => {
  return (
    <div style={{boxShadow:"0 0 9px 3px #e1e1e1",display:"flex",width:"100%",background:"white",justifyContent:"space-between",padding:10,alignItems:"center",paddingLeft:60,}}>
        <div><h3>logo</h3></div>
        <div>
            <input style={{padding:15,outline:"none",fontSize:20,background:"#eee",borderRadius:10,width:290,}} type="seach" placeholder='Search Here'/>
        </div>
        <div>
            {/* buttons */}
        </div>
    </div>
  )
}
