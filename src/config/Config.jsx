 
// get data from localstorage 
// ----theme---
export const _getThemeColor = async () =>{
    const themeColor = localStorage.getItem("Station_Name")
    if(themeColor){
      const actColor = JSON.parse(themeColor).theme;
      return actColor
    }
  }
//   end --- 