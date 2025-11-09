function slugify(title) {
  return title.toLowerCase().replace(/\s+/g, "-");
  //   return title.toLowerCase().split(" ").join("-");
}
console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
console.log(slugify("English for developer")); // "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// function slugify(str) {
// 1. Convert to lowercase and trim leading/trailing whitespace
//   str = str.toLowerCase().trim();

// 2. Normalize accented characters (e.g., é to e)
//   str = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

// 3. Replace non-alphanumeric characters (except spaces and hyphens) with a space
//   str = str.replace(/[^a-z0-9\s-]/g, ' ');

// 4. Replace multiple spaces with a single hyphen
//   str = str.replace(/\s+/g, '-');

// 5. Replace multiple consecutive hyphens with a single hyphen
//   str = str.replace(/-+/g, '-');

// 6. Remove leading and trailing hyphens
//   str = str.replace(/^-+|-+$/g, '');

//   return str;
