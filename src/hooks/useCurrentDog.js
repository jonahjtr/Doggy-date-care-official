import React, { useState } from "react";

const useCurrentDog = (dog_id) => {
  const [currentDog, setCurrentDog] = useState(0);
  localStorage.setItem(JSON.stringify(dog_id));
};

export default useCurrentDog;
