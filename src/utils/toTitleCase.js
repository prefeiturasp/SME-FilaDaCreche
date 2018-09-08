export default function toTitleCase(str) {
  return str.replace(/\S+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};
