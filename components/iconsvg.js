import React, { useEffect, useState } from "react";

function IconSvg({ name, ...otherProps }) {
   /* Use state hook to store icon module value */
   const [iconModule, setIconModule] = useState(null);


   useEffect(() => {
      console.log(name);
      /* Use dynamic import to get corresponding icon as a module */
      import(`./coinsvg/${name}.svg`)
         .then((module) => setIconModule(module))/* Persist data in state */
         .catch((error) => {
            console.error(`Icon with name: ${name} not found!`);/* Do not forget to handle errors */
         });
   }, [name]); /* update on name change */ 

   const renderIcon = () => {
      if (!iconModule) return null;
      /* Equal to: import { ReactComponent as Icon } from "./path/to/icon.svg" */
      const Component = iconModule.ReactComponent;
      return <Component {...otherProps} />;
   };

   return <>{renderIcon()}</>;
}


export default IconSvg;

