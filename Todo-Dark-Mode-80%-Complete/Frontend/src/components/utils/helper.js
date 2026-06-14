// src/components/utils/helper.js
export const trimName = (userName) => {
  if (!userName) return "";
  return userName
    .trim()
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0].toUpperCase())
    .join(" ");
};
